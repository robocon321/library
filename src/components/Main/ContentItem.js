import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import 'moment/locale/vi';  // without this line it didn't work
moment.locale('vi');

import { AccountContext } from '../../contexts/AccountProvider';
import styles from './styles';
import colors from '../../config/colors';

const ContentItem = ({item, category, navigation, route}) => {
  const {storeNewsURL, state} = useContext(AccountContext);

  const getImgUrlFromItem = () => {
    const str = item.children[1].value;
    return str.substring(str.indexOf('src="') + 5, str.indexOf('" >'));
  }
  
  const getDescriptionFromItem = () => {
    const str = item.children[1].value;
    return str.substring(str.indexOf('</br>') + 5, str.indexOf('. >'));
  }

  const data = {
    title: item.children[0].value,
    url: item.children[3].value,
    thumbnail: getImgUrlFromItem(),
    descrp: getDescriptionFromItem(),
    time: item.children[2].value,
    category
  }
  
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('NewsDetailScreen', {
        data
      });
    }}>
      <View style={styles.itemContainer}>
        <View>
          <Image 
              style={styles.itemImage}
              resizeMode="contain"
              source={{
                uri: data.thumbnail
              }}
            />
        </View>
        <Text style={styles.itemTitle}>{data.title}</Text>
        <Text style={styles.itemDescrp}>{data.descrp}</Text>
        <View style={styles.itemWrapInfo}>
          <View style={styles.itemContainerComponentInfo}>
            <Text style={styles.itemTime}>{moment(new Date(data.time)).fromNow()}</Text>
            <Text>{data.category}</Text>
          </View>
          <TouchableOpacity onPress={() => {
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
          }}>
            <Icon name="bookmark-outline" size={30} color={
              Object.keys(state.data).length ? 
              (state.data.news.filter(item => item.url == data.url).length > 0 ? colors.primary : colors.gray) : colors.gray
            } />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ContentItem;