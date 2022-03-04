import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const defaultOnPress = () => {
  return null;
}

const CustomButton = ({
  title = 'Button',
  onPress = defaultOnPress,
  leftIcon,
  leftColor = 'white',
  rightIcon,
  rightColor = 'white',
  backgroundColor = 'black',
  color = 'white',
  fontSize = 15,
  paddingHorizontal = 10,
  paddingVertical = 10,
  width,
  styles
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{
      width,
      backgroundColor, 
      paddingHorizontal,
      paddingVertical,
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center'
    }, styles]}>
      {leftIcon && <Icon name={leftIcon} size={fontSize} color={leftColor} />}
      <Text style={{color, fontSize}}>{title}</Text>
      {rightColor && <Icon name={rightIcon} size={fontSize} color={rightColor} />}
    </TouchableOpacity>
  )
}

export default CustomButton;