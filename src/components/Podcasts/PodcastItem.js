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

import colors from '../../config/colors';


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
      style={{backgroundColor: 'white', padding: 10, marginVertical: 10}}
      onPress={() => {
        navigation.navigate('PodcastDetailScreen', item);
      }}
    >
      <Text style={{color: colors.primary, fontSize: 20}}>{item.tag}</Text>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>{item.title}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={playAudio}>
            <Icon name={active ? 'pause-circle-outline' : 'play-circle-outline'} size={50} color='blue' />
          </TouchableOpacity>
          <Text style={{marginLeft: 20}}>{item.time}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginRight: 20}}>Tải về </Text>
          <TouchableOpacity onPress={preDownloadAudio}>
            <Icon name='arrow-down-circle-outline' size={30} color='gray' />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{fontSize: 20}}>{item.descrp}</Text>
    </TouchableOpacity>
  )
}

export default PodcastItem;