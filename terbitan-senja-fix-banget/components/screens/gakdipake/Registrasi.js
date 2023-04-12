import React from 'react';
import {Text, View, Button, TextInput, Image} from 'react-native';
import {globalStyle} from '../../../globalStyle';
import CustomInput from '../../form/input';
import CustomButton from '../../form/button';

const Registrasi = ({ navigation }) => {

  const backHandler = () => {
    navigation.goBack()
    alert('registrasi berhasil')
  }

  return (
    <View style={globalStyle.container, { backgroundColor: 'white' }}>
     <Text style={globalStyle.pageTitle}>Daftar</Text>
      <View style={globalStyle.pemisah}></View>
      <Text style={globalStyle.pageTitle1}>
      Masukan Data Yang Benar
      </Text>
      <View style={globalStyle.pemisahBtn1}></View>
      <CustomInput
        placeholder="Email"
        holdercolor="#AAAA"
        type='email'
      />
      <View style={globalStyle.pemisah}></View>
      <CustomInput
        placeholder="Username"
        holdercolor="#AAAA"
      />
      <View style={globalStyle.pemisah}></View>
      <CustomInput
        placeholder="Password"
        holdercolor="#AAAA"
        hiden={true}
      />
      <View style={globalStyle.pemisah}></View>
      <CustomInput
        placeholder="Confirm password"
        holdercolor="#AAAA"
        hiden={true}
      />
      <Text style={{marginVertical: 10}} />
       <View style={{ marginLeft: 20, marginRight: 20 }}>
      <CustomButton title={"Daftar"} press={backHandler} />
      </View>
      <View
        style={{marginBottom: 80,
        }}></View>
    </View>
  )
};

export default Registrasi;