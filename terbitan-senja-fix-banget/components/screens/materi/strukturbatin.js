import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { globalStyle } from '../../../globalStyle';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

const biografi = ({ navigation }) => {
      const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://tejoacc.my.id/api/materi') // Ambil data materi dari API
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const listHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={(globalStyle.container, { backgroundColor: '#F6F6F6' })}>
      <View>
        <ImageBackground
          source={require('../../../assets/unsur.png')}
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
            onPress={() => navigation.navigate('Materi')}
          />
        </ImageBackground>
      </View>
      <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            padding: 7,
            marginLeft: 10,

          }}>
          <View
          style={{
            width: 150,
            marginLeft: 10,
            marginTop: 5,
            borderRadius: 10,
            backgroundColor: '#FE8253',
            padding: 6,
            marginBottom: 5,
            marginRight: 5,
          }}>
          <Text style={{ textAlign: 'center',  color: 'white',fontWeight: 'bold' }}>
            { 'STRUKTUR BATIN'}
          </Text>
          </View>
          <View
          style={{
          
            marginTop: 5,
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            padding: 3,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('StrukturB')}>
          <Text style={{ marginTop: 3, textAlign: 'center',  color: 'black',fontWeight: 'bold' }}>
            { 'STRUKTUR FISIK'}
          </Text>
          </TouchableOpacity>
          </View>
      </View>

      <ScrollView style={{ padding: 10, marginTop: 10 }}>
        <View
          style={{
            marginTop: 5,
            borderRadius: 10,
            backgroundColor: '#E2E2E2',
            padding: 10,
          }}>
          {data
            .filter((item) => item.id === 6)
            .map((item) => (
              <View key={item.id}>
                <View>
                  <Text
                    style={{
                      textAlign: 'justify',
                      marginTop: 10,
                      marginBottom: 5,
                    }}>
                    {item.isi_materi}
                  </Text>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>

    </View>
  );
};

export default biografi;
