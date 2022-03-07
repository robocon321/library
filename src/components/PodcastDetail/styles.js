import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {paddingVertical: 60, paddingHorizontal: 20},
  wrapImage: {alignItems: 'center'},
  image: {borderRadius: 5, width: 300, height: 200},
  title: {fontSize: 20, fontWeight: 'bold', color: 'black', marginVertical: 20},
  wrapTime: {flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', alignItems: 'center'},
  time: {color: 'black'},
  controll: {flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', alignItems: 'center', width: '100%'},
  header: {position: 'absolute', top: 0, left: 0, width: '100%'},
})
