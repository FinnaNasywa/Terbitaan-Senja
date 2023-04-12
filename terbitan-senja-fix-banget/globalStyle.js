import { StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 8,
    marginBottom: 8,
    padding: 10,
    fontSize: 14,
    marginRight: 25,
    marginLeft: 25,
    color: '#00000',
    borderColor: '#FE8253',
  },
  pageTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
   pageTitle1: {
    textAlign: 'center',
    fontSize: 12,
    color: '#A0A3AB',
  },
  logo: {
    display: 'flex',
    height: 175,
    width: 175,
    alignSelf: 'center',
    marginVertical: 28,
  },
  card: {
    height: 100,
    width: 280,
    marginRight: 40,
  },
  cardBox: {
    height: 100,
    width: 280,
    marginRight: 40,
  },
  cardTitle: {
    width: 280,
    height: 100,
    borderRadius: 10,
    marginLeft: 40,
  },
  cardImg: {
    width: 40,
    height: 40,
  },
  scrollView: {
    height: 100,
    marginHorizontal: 20,
    marginTop: 20,
    flexGrow: 0,
  },
  root: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pemisah:{
    height: 10,
  },
  pemisahBtn:{
    height: 100,
  },
  btnLgn:{
    marginLeft: 25,
    marginRight: 25,
  },
  pemisahBtn1:{
    height: 75,
  },
  
});
