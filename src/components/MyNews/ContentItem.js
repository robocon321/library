import { View, Text, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import moment from 'moment';
import 'moment/locale/vi';  // without this line it didn't work
moment.locale('vi');

import { AccountContext } from '../../contexts/AccountProvider';

const {width} = Dimensions.get('screen');

const ContentItem = ({item, navigation, route}) => {
  const {storeNewsURL, state} = useContext(AccountContext);
  
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('NewsDetailScreen', {
        data: item
      });
    }}>
      <View style={{width, backgroundColor: 'white', padding: 10}}>
        <View>
          <Image 
              style={{width: '100%', height: 250}}
              resizeMode="contain"
              source={{
                uri: item.thumbnail
              }}
            />
        </View>
        <Text style={{fontSize: 15, color: colors.primary}}>{item.title}</Text>
        <Text style={{fontSize: 15, marginTop: 10}}>{item.descrp}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
            <Text style={{marginRight: 10}}>{moment(new Date(item.time)).fromNow()}</Text>
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