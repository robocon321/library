import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import moment from 'moment';
import 'moment/locale/vi';  // without this line it didn't work
moment.locale('vi');

import { AccountContext } from '../../contexts/AccountProvider';
import styles from './styles';

const ContentItem = ({item, navigation, route}) => {
  const {storeNewsURL, state} = useContext(AccountContext);
  
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('NewsDetailScreen', {
        data: item
      });
    }}>
      <View style={styles.itemContainer}>
        <View>
          <Image 
              style={styles.itemImage}
              resizeMode="contain"
              source={{
                uri: item.thumbnail
              }}
            />
        </View>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescrp}>{item.descrp}</Text>
        <View style={styles.itemWrapFooter}>
          <View style={styles.itemWrapFooterComponent}>
            <Text style={styles.itemTime}>{moment(new Date(item.time)).fromNow()}</Text>
            <Text>{item.category}</Text>
          </View>
          <TouchableOpacity onPress={() => {
            if(Object.keys(state.data).length) {
              storeNewsURL(item);
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
              (state.data.news.filter(item => item.url == item.url).length > 0 ? colors.primary : colors.gray) : colors.gray
            } />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ContentItem;