import { Alert, View, Modal, Text, Pressable, TouchableOpacity } from 'react-native';
import {WebView} from 'react-native-webview';
import React, {useContext, useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';

import Footer from './Footer';
import { NewsDetailContext } from '../../contexts/NewsDetailProvider';
import colors from '../../config/colors';
import styles from './styles';

const NewsDetailComponent = ({navigation, route}) => {
  const {newsDetailState, loadNewsDetail} = useContext(NewsDetailContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [heading, setHeading] = useState(30);
  const [paragraph, setParagraph] = useState(20);
  const {data} = route.params;

  useEffect(() => {
    if(data && data.url !== 'undefined') {
      loadNewsDetail(data.url);
    } else {
      Alert.alert("Thông báo", "Không tìm thấy kết quả");
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    }
  }, []);

  const onChangeFontSize = (fontSize) => {
    setParagraph(fontSize);
    setHeading(fontSize + 10);
    setModalVisible(false);
  }

  const onVisibleModal = () => {
    setModalVisible(true);
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
    {
      newsDetailState.loading ?         
      <LottieView source={require('../../assets/lotties/wait.json')} autoPlay loop />
      :  
      <View style={{width: '100%', height: '100%'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <Pressable style={styles.centeredView} onPress={() => {
          setModalVisible(false);
        }}>
          <Pressable style={styles.modalView} onPress={() => {}}>
            <TouchableOpacity onPress={() => onChangeFontSize(15)}>
              <Text style={{color: colors.primary, fontSize: 15, marginRight: 20}}>A</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onChangeFontSize(20)}>
              <Text style={{color: colors.primary, fontSize: 20, marginRight: 20}}>A</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onChangeFontSize(25)}>
              <Text style={{color: colors.primary, fontSize: 25, marginRight: 20}}>A</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onChangeFontSize(30)}>
              <Text style={{color: colors.primary, fontSize: 30, marginRight: 20}}>A</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
        <WebView 
          style={{marginTop: -280, marginBottom: 50}} 
          source={{ html: newsDetailState.data + `<style> p { font-size: ${paragraph}px!important} h1 {font-size: ${heading}px!important}; </style>` }}
          automaticallyAdjustContentInsets
          injectJavaScript
          mediaPlaybackRequiresUserAction
          nativeConfig
          allowsInlineMediaPlayback
          geolocationEnabled
          javaScriptEnabled
          />
          <Footer 
            data={data}
            navigation={navigation} 
            onVisibleModal={onVisibleModal} />
      </View>
    }
    </View>
  )
}

export default NewsDetailComponent;