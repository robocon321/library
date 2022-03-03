import { View, Text, TouchableOpacity, findNodeHandle, ScrollView } from 'react-native'
import React, {useState, useEffect, useRef, useImperativeHandle, memo, forwardRef} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../config/colors';
import tabs from '../../config/tabContent';
import styles from './styles';

const Tab = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => props.onChangeTabPosition(props.index)}>
      <View style={styles.subject} ref={props.item.ref}>
        <Text style={props.active && {color: colors.primary}}>{props.item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Tabs = forwardRef((props, ref) => {
  const tabsClone = [...tabs];
  const [tabPosition, setTabPosition] = useState(0);
  const [measure, setMeasure] = useState([]);

  const tabRef = useRef();

  tabsClone.forEach((item) => {
    item.ref = useRef();
  });

  useImperativeHandle(ref, () => ({
    setTabPosition(index) {
      setTabPosition(index);
    }
  }));

  useEffect(() => {
    getMeasure();
  }, []);

  const getMeasure = () => {
    let m = [];
    tabsClone.forEach((item) => {
      if(item.ref.current && tabRef) {
        item.ref.current.measureLayout(
          findNodeHandle(tabRef.current),
          (x, y, width, height) => {
            m.push({
              x, y, width, height
            });

            if(m.length === tabsClone.length) {
              setMeasure(m);
            }
          }
        )
      }
    });
  }
  
  const onChangeTabPosition = (index) => {
    if(index !== tabPosition) {
      tabRef.current.scrollTo({ x: measure[index].x, animated: true });
      setTabPosition(index);  
      props.onChangeTabPosition(index);
    }
  } 

  return (
    <View style={styles.subjectNav}>
    <TouchableOpacity onPress={() => {
      props.navigation.navigate('CategoryScreen');
    }}>
      <Icon name='menu-outline' size={30} color={colors.gray} />
    </TouchableOpacity>
    <ScrollView 
      ref={tabRef} 
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {tabsClone.map((item, index) => (
        <Tab item={item} key={item.id} active={index === tabPosition} index={index} onChangeTabPosition={onChangeTabPosition} />
      ))}
    </ScrollView>
  </View>

  )
});

export default Tabs;