import { StyleSheet, Dimensions } from "react-native";
import colors from "../../config/colors";

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  actionBar: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'stretch',
    backgroundColor: 'white'
  },
  subjectNav: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50
  },
  subjects: {
    flexDirection: 'row',
  },
  subject: {
    padding: 10
  },
  content: {
    padding: 10,
    width,
    height: height - 150
  },
  listIndicator: {marginTop: 20},
  itemContainer: {width, backgroundColor: 'white', padding: 10},
  itemImage: {width: '100%', height: 250},
  itemTitle: {fontSize: 15, color: colors.primary},
  itemDescrp: {fontSize: 15, marginTop: 10},
  itemWrapInfo: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  itemContainerComponentInfo: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10},
  itemTime: {marginRight: 10},
})
