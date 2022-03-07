import { StyleSheet, Dimensions } from "react-native";
import colors from '../../config/colors';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  center: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  footer: {
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    height: 50, 
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    
    elevation: 6, 
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalView: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  container: {width: '100%', height: '100%', backgroundColor: 'white'},
  wrapModal: {width: '100%', height: '100%'},
  fontSize15: {color: colors.primary, fontSize: 15, marginRight: 20},
  fontSize20: {color: colors.primary, fontSize: 20, marginRight: 20},
  fontSize25: {color: colors.primary, fontSize: 25, marginRight: 20},
  fontSize30: {color: colors.primary, fontSize: 30, marginRight: 20},
  webview: {marginTop: -280, marginBottom: 50},
});

export default styles;