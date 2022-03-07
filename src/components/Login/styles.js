import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {backgroundColor: 'white', height: '100%'},
  wrapButton: {alignItems: 'center', marginTop: 50},
  button: {
    marginTop: 10,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  loginEmail: {
    width: 300,
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    color: 'blue',
    textDecorationLine:'underline'
  },
  wrapFooter: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  containerComponentFooter: {
    paddingVertical: 15,
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  existAccountText: {
    marginRight: 10,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  createAccountText: {
    marginRight: 10,
    textAlign: 'center',
    fontSize: 20,
    color: 'blue',
    textDecorationLine: 'underline'
  }
})