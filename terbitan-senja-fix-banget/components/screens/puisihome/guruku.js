import React from 'react';
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { globalStyle } from '../../../globalStyle';
import { AntDesign } from '@expo/vector-icons';

const Dasboard = ({ navigation }) => {
  const listHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={(globalStyle.container, { backgroundColor: '#F6F6F6' })}>
      <View>
        <ImageBackground
          source={require('../../../assets/GURU.jpg')}
          style={{
             width: 317,
              height: 220,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
          <AntDesign
            name="left"
            size={25}
            style={{
              backgroundColor: 'white',
              width: 30,
              height: 30,
              marginTop: 20,
              marginLeft: 20,
              color: 'black',
              marginBottom: 10,
              borderRadius: 50,
              padding: 2,
            }}
            onPress={() => navigation.navigate('Dasboard')}
          />
        </ImageBackground>
      </View>

      <ScrollView style={{ padding: 10, marginTop: 10 }}>
        <View
          style={{
            marginTop: 5,
            borderRadius: 10,
            backgroundColor: '#E2E2E2',
            padding: 10,
          }}>
          <Text style={{marginTop: 10, marginBottom: 10, textAlign: 'center', fontWeight: 'bold' }}>
            {'Guruku'}
          </Text>
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Wahai teladanku\nEngkau bagai pelita dalam kegelapan\nEngkau bagai mentari dalam menyinari hidupku\nEngkau bagai pelangi dalam diriku\nMemberikan secercah warna\nUntuk sebuah arti kehidupan'
               }
          </Text> 
           <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Segala ilmu yang engkau berikan\nSikap, perbuatan dan tutur katamu\nKeramahan , kelembutan dan kasih sayangmu\nMewarnai perjalanan hidupku\nUntuk menggapai impian dan cita-citaku'

                   }
          </Text>  
           <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Pena menari di atas kertasku\nMenuliskan setiap kata yang kau ucapakan\nMemberikan secercah cahaya dalam hidupku\nMenuntunku menuju jalan kebaikan dan kesuksesan\nMengajariku hal-hal yang baru\nWalau letih terlihat diwajahmu\nTak menghapus semangatmu'

                   }
          </Text>  
        </View>
      </ScrollView>
    </View>
  );
};

export default Dasboard;
