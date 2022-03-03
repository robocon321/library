import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import moment from 'moment';
import 'moment/locale/vi';  // without this line it didn't work
moment.locale('vi');

const ContentItem = ({item, category, navigation, route}) => {
  const {width} = Dimensions.get('screen');
  
  const getImgUrlFromItem = () => {
    const str = item.children[1].value;
    return str.substring(str.indexOf('src="') + 5, str.indexOf('" >'));
  }

  const getDescriptionFromItem = () => {
    const str = item.children[1].value;
    return str.substring(str.indexOf('</br>') + 5, str.indexOf('. >'));
  }

  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('NewsDetailScreen', {
        url: item.children[3].value
      });
    }}>
      <View style={{width, backgroundColor: 'white', padding: 10}}>
        <View>
          <Image 
              style={{width: '100%', height: 250}}
              resizeMode="contain"
              source={{
                uri: getImgUrlFromItem()
              }}
            />
        </View>
        <Text style={{fontSize: 15, color: colors.primary}}>{item.children[0].value}</Text>
        <Text style={{fontSize: 15, marginTop: 10}}>{getDescriptionFromItem()}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
            <Text style={{marginRight: 10}}>{moment(new Date(item.children[2].value)).fromNow()}</Text>
            <Text>{category}</Text>
          </View>
          <TouchableOpacity>
            <Icon name="bookmark-outline" size={30} color={colors.gray} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ContentItem;