import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import SoundPlayer from 'react-native-sound-player';
import axios from 'axios';
import cheerio from 'cheerio';

import Header from '../common/Header';
import ProgressBar from '../common/ProgressBar';
import colors from '../../config/colors';

const PodcastDetailComponent = ({navigation, route}) => {
  const podcast = route.params;
  const timeArr = podcast.time.split(':');
  const maxTime = {
    minute: parseInt(timeArr[0]),
    second: parseInt(timeArr[1])
  }
  let secondCurrent = 0;
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState({
    minute: 0,
    second: 0
  });

  const ref = useRef();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function refreshTime() {
    while(play) {
      await sleep(1000);
      const secondMax = maxTime.minute * 60 + maxTime.second;
      secondCurrent ++;
  
      if(secondCurrent <= 0) {
        setTime({
          minute: 0,
          second: 0
        })
      } else if(secondCurrent >= secondMax) {
        setTime({
          minute: maxTime.minute,
          second: maxTime.second
        })
      } else {
        setTime({
          minute: Math.floor(secondCurrent / 60),
          second: secondCurrent % 60      
        })
      }    
    }    
  }

  useEffect(() => {
    loadmp3();
  }, []);

  useEffect(() => {
    refreshTime();
  }, [play]);

  const onRefresh = (percent) => {
    let secondMax = maxTime.minute * 60 + maxTime.second; 
    let newSecond = Math.floor(secondMax * percent);
    SoundPlayer.seek(newSecond);

    setTime({
      minute: Math.floor(newSecond / 60),
      second: newSecond % 60
    });
  }

  const controlTime = (second) => {
    const secondCurrent = time.minute * 60 + time.second;
    const secondMax = maxTime.minute * 60 + maxTime.second;
    const secondCurrentChange = secondCurrent + second;

    if(secondCurrentChange <= 0) {
      SoundPlayer.seek(0);
      SoundPlayer.play();

      setTime({
        minute: 0,
        second: 0
      })
    } else if(secondCurrentChange >= secondMax) {
      SoundPlayer.seek(secondMax);
      SoundPlayer.play();

      setTime({
        minute: maxTime.minute,
        second: maxTime.second
      })
    } else {
      SoundPlayer.seek(secondCurrentChange);
      SoundPlayer.play();

      setTime({
        minute: Math.floor(secondCurrentChange / 60),
        second: secondCurrentChange % 60      
      })
    }
  }

  const loadmp3 = () => {
    axios
    .get(route.params.url)
    .then((response) => {
      const {data} = response;
      const $ = cheerio.load(data);
      const mp3 = $('audio').attr('src');
      try {
        setPlay(true);
        SoundPlayer.playUrl(mp3);
      } catch(e) {
        console.log(e);
      }
    })
    .catch((error) => {
      console.log(error)
    });      
  }

  const playAudio = () => {
    if(play) {
      SoundPlayer.pause();
    } else {
      SoundPlayer.seek(time.minute * 60 + time.second);
      SoundPlayer.play();
    }
    setPlay(!play);
  }
  
  return (
    <View>
      <ScrollView style={{paddingVertical: 60, paddingHorizontal: 20}}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{borderRadius: 5, width: 300, height: 200}}
            resizeMode='stretch'
            source={{uri: podcast.thumbnail}} />
        </View>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', marginVertical: 20}}>{podcast.title}</Text>
        <ProgressBar 
          max={maxTime.minute * 60 + maxTime.second} 
          progress={time.minute * 60 + time.second} 
          onRefresh={onRefresh} 
          />
        <View style={{flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', alignItems: 'center'}}>
          <Text ref={ref} style={{color: 'black'}}>{time.minute < 10 ? `0${time.minute}` : time.minute}:{time.second < 10 ? `0${time.second}` : time.second}</Text>
          <Text style={{color: 'black'}}>{maxTime.minute < 10 ? `0${maxTime.minute}` : maxTime.minute}:{maxTime.second < 10 ? `0${maxTime.second}` : maxTime.second}</Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
          <TouchableOpacity onPress={() => controlTime(-10)}>
            <Icon name='play-back-outline' size={40} color={colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => playAudio()}>
            {play ? 
            <Icon name='pause-circle-outline' size={80} color={colors.primary} />
            :
            <Icon name='play-circle-outline' size={80} color={colors.primary} />
          }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => controlTime(10)}>
            <Icon name='play-forward-outline' size={40} color={colors.gray} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{position: 'absolute', top: 0, left: 0, width: '100%'}}>
        <Header
          onLeftPress={() => {
            navigation.goBack();
            SoundPlayer.stop();
          }}
          leftIcon={'arrow-back-outline'}
          title='Trình nghe Podcast'
          rightIcon={'ellipsis-vertical'}        
        />
      </View>
    </View>
  )
}

export default PodcastDetailComponent;