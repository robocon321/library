import { View, Image, TouchableOpacity, Animated, Dimensions, ScrollView } from 'react-native';
import React, {useRef, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../config/colors';
import styles from './styles';
import tabs from '../../config/tabContent';
import ContentList from './ContentList';
import NewsProvider from '../../contexts/NewsProvider';
import Tabs from './Tabs';
import Break from '../common/Break';

const {width} = Dimensions.get('screen');

const Main = ({navigation, route}) => {
  const contentRef = useRef();
  const tabRef = useRef();

  const onChangeTabPosition = (index) => {
    contentRef.current.scrollToOffset({ offset: index * width, animated: true });
  };

  if(route.params && route.params.tabPosition !== 'undefined') {
    onChangeTabPosition(route.params.tabPosition);
    tabRef.current.setTabPosition(route.params.tabPosition);
  }

  const onScrollEndDrag = (evt) => {
    const x = evt.nativeEvent.contentOffset.x;
    const index = Math.round(x/width);
    tabRef.current.setTabPosition(index);
    onChangeTabPosition(index);
  }

  const loadContentList = useCallback(({item, index}) => (
    <NewsProvider key={item.id}>
      <ContentList item={item} navigation={navigation} route={route}/>
    </NewsProvider>
  ), [])

  return (
    <View>
      <View style={styles.actionBar}>
        <TouchableOpacity activeOpacity={0.9}>
          <Icon name='search-outline' size={30} color={colors.gray} />
        </TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
        <TouchableOpacity onPress={() => {
          navigation.navigate('SettingScreen');
        }}>
          <Icon name='settings-outline' size={30} color={colors.gray} />
        </TouchableOpacity>
      </View>
      <Break />
      <Tabs ref={tabRef} navigation = {navigation} route={route}
        onChangeTabPosition={onChangeTabPosition} 
      />
      <Break />
      <Animated.FlatList 
          ref={contentRef}
          data={tabs}
          renderItem={loadContentList}
          keyExtractor={({index}) => index}
          horizontal
          bounces={false}
          pagingEnabled
          maxToRenderPerBatch={1}
          updateCellsBatchingPeriod={1}
          initialNumToRender={1}
          showsHorizontalScrollIndicator={false}
          renderScrollComponent={(props) => <ScrollView {...props} onScrollEndDrag={onScrollEndDrag} />}
        />
    </View>
  )
}

export default Main;