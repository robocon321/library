import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  programs: {
    marginTop: 60, 
    fontSize: 25, 
    color: colors.primary, 
  },
  list: {marginVertical: 10},
  itemSubject: {marginHorizontal: 5},
  itemImageSubject: {width: 200, height: 200, borderRadius: 5},
  header: {position: 'absolute', top: 0, left: 0, width: '100%'},
  itemContainer: {backgroundColor: 'white', padding: 10, marginVertical: 10},
  itemTag: {color: colors.primary, fontSize: 20},
  itemTitle: {fontSize: 30, fontWeight: 'bold', color: 'black'},
  itemControl: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  itemControlLeft: {flexDirection: 'row', alignItems: 'center'},
  itemTime: {marginLeft: 20},
  itemControlRight: {flexDirection: 'row', alignItems: 'center'},
  itemDescrp: {fontSize: 20},
  itemDownload: {marginRight: 20},
})