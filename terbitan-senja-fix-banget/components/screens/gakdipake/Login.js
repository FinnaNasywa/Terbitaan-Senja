import React from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { globalStyle } from '../../../globalStyle';
import CustomInput from '../../form/input';
import CustomButton from '../../form/button';

const Login = ({ navigation }) => {
  const regHandler = () => {
    
    navigation.navigate('Registrasi');
  };

  const logHandler = () => {
    navigation.navigate('Dasboard');
  };

  return (
    <View style={(globalStyle.container, { backgroundColor: 'white' })}>
      <Text style={globalStyle.pageTitle}>Selamat Datang</Text>
      <View style={globalStyle.pemisah}></View>
      <Text style={globalStyle.pageTitle1}>
        Masuk dengan akun yang sudah terdaftar
      </Text>
      <View style={globalStyle.pemisahBtn}></View>
      <CustomInput placeholder="Username" holdercolor="#AAAA" hiden={false} />
      <CustomInput placeholder="Password" holdercolor="#AAAA" hiden={true} />
      <Text style={{ marginVertical: 24 }}></Text>
      <View style={{ marginLeft: 25, marginRight: 25 }}>
        <CustomButton title={'Masuk'} press={logHandler} color="#FE8253" />
      </View>
      <Text
        style={{
          marginVertical: 8,
          textAlign: 'center',
        }}></Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 2,
          marginBottom: 20,
        }}></View>
      <View style={{flexDirection: 'row', justifyContent:'center'}}>
      <Text style={{ color: '#2D033B', fontSize: 13,}}>
        Belum Punya Akun?
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Registrasi');
        }}>
        <Text
          style={{
            color: '#7BADDE',
            fontSize: 13,
            paddingBottom: 50,
            textAlign:'center',
            marginLeft: 4
          }}>
        Daftar
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
