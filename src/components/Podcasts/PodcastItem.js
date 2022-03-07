import { 
  View, 
  Text, 
  TouchableOpacity, 
  Platform, 
  PermissionsAndroid,
  Alert
 } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import cheerio from 'cheerio';
import axios from 'axios';
import SoundPlayer from 'react-native-sound-player';
import RNFS from 'react-native-fs';

import styles from './styles';


const PodcastItem = ({
  item, 
  active, 
  index, 
  onPlayAudioIndex, 
  navigation, 
  route
}) => {

  const withMP3 = (callback) => {
    axios
    .get(item.url)
    .then((response) => {
      const {data} = response;
      const $ = cheerio.load(data);
      const mp3 = $('audio').attr('src');
      callback(mp3);
    })
    .catch((error) => {
      console.log(error)
    });      
  }

  const playAudio = () => {
    if(active) {
      SoundPlayer.stop();
      onPlayAudioIndex(-1);
    } else {
      const callback = (mp3) => {
        try {          
          SoundPlayer.addEventListener('FinishedLoading', () => {
            onPlayAudioIndex(index);
          });
  
          SoundPlayer.playUrl(mp3);
        } catch(e) {
          console.log(e);
        }        
      }

      withMP3(callback);
    }
  }

  const preDownloadAudio = () => {
    const callback = async (mp3) => {
      if(Platform.OS == 'ios') {
        downloadAudio(mp3);
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Storage Permission Required',
              message: 'App needs access to your storage for Download file'
            }
          )
  
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Storage Permission Granted');
            downloadAudio(mp3)
          } else {
            Alert.alert('Storage Permiision Not Granted')
          }
        }
        catch (error) {
          console.log(error);
        }
      }
  
    }
    withMP3(callback);
  }

  const downloadAudio = (mp3) => {
    const callback = () => {
      const dir = `${RNFS.DownloadDirectoryPath}/vnexpress`;
      RNFS.exists(dir)
      .then(res => {
        if(!res) {
          RNFS.mkdir(dir)
        }

        const path = `${dir}/${item.title}.mp3`;
        const options = {
          fromUrl: mp3,
          toFile: path
        };
        RNFS.downloadFile(options).promise
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.warn(error);
        })
      })
      .catch(error => {
        console.log(error);
      })
    }

    withMP3(callback);
  }

  return (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate('PodcastDetailScreen', item);
      }}
    >
      <Text style={styles.itemTag}>{item.tag}</Text>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <View style={styles.itemControl}>
        <View style={styles.itemControlLeft}>
          <TouchableOpacity onPress={playAudio}>
            <Icon name={active ? 'pause-circle-outline' : 'play-circle-outline'} size={50} color='blue' />
          </TouchableOpacity>
          <Text style={styles.itemTime}>{item.time}</Text>
        </View>
        <View style={styles.itemControlRight}>
          <Text style={styles.itemDownload}>Tải về </Text>
          <TouchableOpacity onPress={preDownloadAudio}>
            <Icon name='arrow-down-circle-outline' size={30} color='gray' />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.itemDescrp}>{item.descrp}</Text>
    </TouchableOpacity>
  )
}

export default PodcastItem;