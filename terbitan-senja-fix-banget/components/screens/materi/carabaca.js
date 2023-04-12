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
import axios from 'axios'; //import axios

const CBP = ({ navigation }) => {
  const [data, setData] = useState([]); //membuat state
  //mengambil data dari api
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
          source={require('../../../assets/membaca.png')}
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

      <ScrollView style={{ padding: 10, marginTop: 10 }}>
        <View
          style={{
            marginTop: 5,
            borderRadius: 10,
            backgroundColor: '#E2E2E2',
            padding: 10,
          }}>
          {data
          //Menampilkan data dari API berdasarkan id materi 9
            .filter((item) => item.id === 9)
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

export default CBP;

