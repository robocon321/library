import { View, Text, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import Break from '../common/Break';
import DraggableFlatList, {useOnCellActiveAnimation} from 'react-native-draggable-flatlist';
import Animated from 'react-native-reanimated';

import colors from '../../config/colors';
import tabs from '../../config/tabContent';

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
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 10}}>
        <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
          <Icon name="arrow-back-outline" size={30} color={colors.gray} />
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>Chuyên mục</Text>
        <TouchableOpacity onPress={() => {
          setAllowDrag(!allowDrag);
        }}>
          <Icon name="hammer-outline" size={30} color={allowDrag? colors.primary : colors.gray} />
        </TouchableOpacity>
      </View>
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