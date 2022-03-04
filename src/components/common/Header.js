import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';

const defaultEvent = () => {
  return null;
}
const Header = ({
  leftIcon,
  leftActive = false,
  onLeftPress = defaultEvent,
  rightIcon,
  rightActive = false,
  onRightPress = defaultEvent,
  title = 'Header'
}) => {
  return (
    <View style={{
      flexDirection: 'row', 
      width: '100%', 
      justifyContent: 'space-between', 
      padding: 10, 
      backgroundColor: 'white',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
    }}>
    <TouchableOpacity onPress={onLeftPress}>
      {leftIcon && <Icon name={leftIcon} size={30} color={leftActive ? colors.primary : 'black'} />}
    </TouchableOpacity>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>{title}</Text>
    <TouchableOpacity onPress={onRightPress}>
      {rightIcon && <Icon name={rightIcon} size={30} color={rightActive ? colors.primary : 'black'} />}
    </TouchableOpacity>
  </View>
  )
}

export default Header