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
          source={require('../../../assets/gugur.png')}
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
            onPress={() => navigation.navigate('Senja')}
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
            {'Gugur Bunga'}
          </Text>
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Bunga gugur \ndi atas nyawa yang gugur \ngugurlah semua yang bersamany.'
               }
          </Text> 
           <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Kekasihku.\nBunga gugur \ndi atas tempatmu terkubur \ngugurlah segala hal ikhwal antara kita.'

                   }
          </Text>  
           <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Baiklah kita ikhlaskan saja\ntiada janji ‘kan jumpa di sorga\nkarena di sorga tiada kita ‘kan perlu asmara. '

                   }
          </Text> 
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Asmara cuma lahir di bumi \n(di mana segala berujung di tanah mati) \nia mengikuti hidup manusia\ndan kalau hidup sendiri telah gugur'

                   }
          </Text>  
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'gugur pula ia bersama sama.\nAda tertinggal sedikit kenangan \ntapi semata tiada lebih dari penipuan\natau semacam pencegah bunuh diri'


                   }
          </Text>  
          <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              'Mungkin ada pula kesedihan\nitu baginya semacam harga atau kehormatan \nyang sebentar akan pula berantakan..'

                   }
          </Text> 
           <Text style={{ textAlign: 'auto', marginTop: 10 }}>
            {
              ' Kekasihku. \nGugur, ya, gugur \nsemua gugur\nhidup asmara, embun di bunga \nyang kita ambil cuma yang berguna'

                   }
          </Text>   
            <Text style={{ textAlign: 'left', marginTop: 10 }}>
            {
              '(1954)'

                   }
          </Text>   
            <Text style={{ textAlign: 'right', marginTop: 10 }}>
            {
              ' — W.S. Rendra'

                   }
          </Text>       
        </View>
      </ScrollView>
    </View>
  );
};

export default Dasboard;
