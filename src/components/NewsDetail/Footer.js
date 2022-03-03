import { View, TouchableOpacity, Alert, Share } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../config/colors';

const Footer = ({navigation, route, onVisibleModal}) => {
  const onShare = async () => {
    if(route.params && route.params.url !== 'undefined')
    try {
      const result = await Share.share({
        message: route.params.url
      });
      if (result.action === Share.dismissedAction) {
        Alert.alert('Thông báo', 'Chia sẻ dữ liệu qua ứng dụng khác thất bại!');
      }
    } catch (error) {
      Alert.alert('Thông báo', error.message);
    }
  };

  return (
    <View style={styles.footer}>
    <TouchableOpacity onPress={() => {
      navigation.goBack();
    }}>
      <Icon name='arrow-back-outline' size={30} color={colors.gray} />
    </TouchableOpacity>
    <View style={styles.center}>
      <TouchableOpacity style={{marginRight: 20}} onPress={onVisibleModal}>
        <Icon name='expand-outline' size={30} color={colors.gray} />
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight: 20}}>
        <Icon name='bookmark-outline' size={30} color={colors.gray} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onShare}>
        <Icon name='share-social-outline' size={30} color={colors.gray} />
      </TouchableOpacity>
    </View>
  </View>

  )
}

export default Footer