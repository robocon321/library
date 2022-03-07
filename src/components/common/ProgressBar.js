import { View, Text, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

const defaultRefresh = () => {
  return null;
}

const ProgressBar = ({
  height = 10,
  backgroundColor = 'gray',
  indicatorColor = 'yellow',
  progress = 50,
  max=100,
  onRefresh = defaultRefresh
}) => {
  const [widtProgressBar, setWidthProgressBar] = useState(0);

  const onLayout = evt => {
    setWidthProgressBar(evt.nativeEvent.layout.width);
  }

  return (
    <TouchableOpacity 
      onPress={(evt) => {
        onRefresh(evt.nativeEvent.locationX / widtProgressBar);
      }} 
      onLayout={onLayout}
      style={{height, backgroundColor, position: 'relative'}}>
      <View style={{
        position: 'absolute', 
        backgroundColor: indicatorColor,
        top: 0, 
        left: 0, 
        width: `${progress * 100 / max}%`, 
        height: '100%'
      }}></View>
    </TouchableOpacity>
  )
}

export default ProgressBar;