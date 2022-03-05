import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Option = ({
  style={},
  title = '',
  color = 'black',
  justifyContent = 'center',
  RightComponent = () => <View></View>,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 15, justifyContent}}>
        <Text style={{color}}>{title}</Text>
        <RightComponent />
      </View>
    </TouchableOpacity>
  )
}

export default Option