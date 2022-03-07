import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../config/colors';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {backgroundColor: 'white'},
  wrapNotify: {paddingHorizontal:40, marginVertical: 20},
  favoriteNews: {textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 'bold'},
  loginNews: {textAlign: 'center', fontSize: 20, fontWeight: '200', color: 'black', marginVertical: 20},
  itemContainer: {width, backgroundColor: 'white', padding: 10},
  itemImage: {width: '100%', height: 250},
  itemTitle: {fontSize: 15, color: colors.primary},
  itemDescrp: {fontSize: 15, marginTop: 10},
  itemWrapFooter: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  itemWrapFooterComponent: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10},
  itemTime: {marginRight: 10}
})