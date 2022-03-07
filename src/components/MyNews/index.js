import { View, FlatList, Text, Button, Alert, ScrollView } from 'react-native';
import React, {useContext, useCallback} from 'react';

import colors from '../../config/colors';
import { AccountContext } from '../../contexts/AccountProvider';
import Break from '../common/Break';
import ContentItem from './ContentItem';
import styles from './styles';


const MyNewsComponent = ({navigation, route}) => {
  const {state} = useContext(AccountContext);
  const {data} = state;

  const loadContentItem = useCallback(({item, index}) => (
    <ContentItem 
      navigation={navigation} 
      route={route} 
      key={index} 
      item={item}
    />
  ), [])

  return (
    <ScrollView style={styles.container}>
      <FlatList 
        data={data.news} 
        renderItem={loadContentItem} 
        keyExtractor={({index}) => index}
        ItemSeparatorComponent={() => (
          <Break />
        )}/>
        <Break />
        <View style={styles.wrapNotify}>
          <Text style={styles.favoriteNews}>Thêm nội dung yêu thích</Text>
          <Text style={styles.loginNews}>Đăng nhập để thiết lập danh sách chuyên mục và tác giả yêu thích</Text>
          <Button onPress={() => {
            if(Object.keys(data).length) {
              Alert.alert('Thông báo', 'Hiện tại chưa phát triển nội dung này');
            } else {
              navigation.navigate('LoginScreen');
            }
          }} title={Object.keys(data).length ? 'Lựa chọn mục yêu thích' : 'Đăng nhập ngay'} color= {colors.primary} />
        </View>
      </ScrollView>
  )
}

export default MyNewsComponent;