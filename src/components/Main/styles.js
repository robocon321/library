import { StyleSheet, Dimensions } from "react-native";

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
  }

})
