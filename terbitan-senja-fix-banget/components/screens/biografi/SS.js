import React from 'react';
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { globalStyle } from '../../../globalStyle';
import { AntDesign } from '@expo/vector-icons';

const biografi = ({ navigation }) => {
  const listHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={(globalStyle.container, { backgroundColor: '#F6F6F6' })}>
      <View>
        <ImageBackground
          source={require('../../../assets/sitorsitumorang2.png')}
          style={{
              width: 314,
              height: 134,
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
            onPress={() => navigation.navigate('Biografi')}
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

          <Text style={{ textAlign: 'justify', marginTop: 10 }}>
            {
              'Sitor Situmorang adalah salah satu penyair terkenal di Indonesia yang lahir di Sumatera Utara pada 2 Oktober 1924. Selama hidup, Beliau pernah menimba ilmu di Jepang dan bekerja di kantor keuangan Jepang yang berada di Sibolga.'
               }
          </Text>
              <Text style={{ textAlign: 'justify', marginTop: 10 }}>
            {'Setelah Jepang menerima kekalahan, Sitor Situmorang langsung bekerja sebagai sebagai redaktur surat kabar bertajuk Suara Nasional yang diterbitkan oleh Komite Nasional daerah Tapanuli. Dari situlah, Beliau mengenal dunia tulis-menulis karya sastra.'
             }
          </Text>
              <Text style={{ textAlign: 'justify', marginTop: 10 }}>
            {'Karya sastra ciptaan Sitor Situmorang banyak dipengaruhi oleh Chairil Anwar. Hal tersebut karena ketika Beliau bekerja di Jakarta dan membaca sebuah majalah sastra bertajuk Siasat yang terdapat karya Chairil Anwar dan Asrul Sani.Sitor Situmorang tidak hanya menulis sajak, tetapi juga karya sastra prosa lainnya, seperti cerpen, drama, hingga karya terjemahan. Karya-karya sastra ciptaan Beliau adalah Zaman Baru (1962), Dinding Waktu (1976), Peta Perjalanan (1977), Wajah Tak Bernama, dan masih banyak lagi.'
             }
          </Text>
              <Text style={{ textAlign: 'justify', marginTop: 10 }}>
            {'Karya sastra yang paling terkenal berjudul “Malam Lebaran” yang berisikan satu kalimat puisi pendek saja.'
            }
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default biografi;
