import { View, Text, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import DraggableFlatList, {useOnCellActiveAnimation} from 'react-native-draggable-flatlist';
import Animated from 'react-native-reanimated';

import colors from '../../config/colors';
import tabs from '../../config/tabContent';
import Break from '../common/Break';
import Header from '../common/Header';

const CategoryItem = ({item, drag, allowDrag, navigation, index}) => {
  const { isActive } = useOnCellActiveAnimation();

  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('HomeTabNav', {tabPosition: index})
    }}>
      <Animated.View style={{
        flexDirection: 'row', 
        justifyContent: allowDrag ? 'space-between' :  'flex-start', 
        paddingVertical: 10, 
        paddingHorizontal: 20,
        backgroundColor: isActive ? colors.primary : 'white'
        }}>
        <View style={{}}>
          <Text style={{fontSize: 20, color: isActive ? 'white' : 'gray'}}>{item.name}</Text>
        </View>
        {allowDrag && 
        <TouchableOpacity onLongPress={drag}>
          <Icon name="reorder-two-outline" size={30} color={isActive ? 'white' : 'gray'} />
        </TouchableOpacity>
        }
      </Animated.View>
    </TouchableOpacity>
  );
}

const CategoryComponent = ({navigation}) => {
  const [data, setData] = useState(tabs);
  const [allowDrag, setAllowDrag] = useState(false);

  useEffect(() => {
  }, [allowDrag]);
  
  return (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <Header 
        leftIcon={'arrow-back-outline'}
        onLeftPress={() => {
          navigation.goBack();
        }}
        rightIcon={'hammer-outline'}
        onRightPress={() => {
          setAllowDrag(!allowDrag);
        }}
        rightActive={allowDrag}
        title={'Chuyên mục'}
      />
      <Break />
      <DraggableFlatList
        data={data}
        onDragEnd={({ data }) => setData(data)}
        keyExtractor={(item) => item.id}
        renderItem={({item, index, drag}) => <CategoryItem navigation={navigation} index={index} item={item} drag={drag} allowDrag={allowDrag} />}
      />
    </View>
  )
}

export default CategoryComponent;