import { View, Text, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import moment from 'moment';
import 'moment/locale/vi';  // without this line it didn't work
moment.locale('vi');
import { AccountContext } from '../../contexts/AccountProvider';

const {width} = Dimensions.get('screen');

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
      <View style={{width, backgroundColor: 'white', padding: 10}}>
        <View>
          <Image 
              style={{width: '100%', height: 250}}
              resizeMode="contain"
              source={{
                uri: data.thumbnail
              }}
            />
        </View>
        <Text style={{fontSize: 15, color: colors.primary}}>{data.title}</Text>
        <Text style={{fontSize: 15, marginTop: 10}}>{data.descrp}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
            <Text style={{marginRight: 10}}>{moment(new Date(data.time)).fromNow()}</Text>
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