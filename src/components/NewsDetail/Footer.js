import { View, TouchableOpacity, Alert, Share } from 'react-native'
import React, {useContext} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../config/colors';
import { AccountContext } from '../../contexts/AccountProvider';

const Footer = ({navigation, onVisibleModal, data}) => {
  const {state, storeNewsURL} = useContext(AccountContext);

  const onShare = async () => {
    if(data && data.url !== 'undefined')
    try {
      const result = await Share.share({
        message: data.url
      });
      if (result.action === Share.dismissedAction) {
        Alert.alert('Thông báo', 'Chia sẻ dữ liệu qua ứng dụng khác thất bại!');
      }
    } catch (error) {
      Alert.alert('Thông báo', error.message);
    }
  };

  const onStore = () => {
      if(Object.keys(state.data).length) {
        storeNewsURL(data);
      } else {
        Alert.alert(
        "Thông báo",
        "Để lưu tin tức bạn cần phải đăng nhập. Bạn có muốn chuyển sang màn hình đăng nhập không?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => {
            navigation.navigate('LoginScreen');
          } }
        ]
      );
      }
  }


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
      <TouchableOpacity onPress={onStore}>
        <Icon name="bookmark-outline" size={30} color={
          Object.keys(state.data).length ? 
          (state.data.news.filter(item => item.url == data.url).length > 0 ? colors.primary : colors.gray) : colors.gray
        } />
      </TouchableOpacity>
      <TouchableOpacity onPress={onShare}>
        <Icon name='share-social-outline' size={30} color={colors.gray} />
      </TouchableOpacity>
    </View>
  </View>

  )
}

export default Footer