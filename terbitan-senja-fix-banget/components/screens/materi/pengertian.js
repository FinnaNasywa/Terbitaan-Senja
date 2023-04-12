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
import axios from 'axios'; //Import Axios 

const pengertian = ({ navigation }) => {
  const [data, setData] = useState([]); //Membuat state 
 // Mengambil data dari API
  useEffect(() => {
    axios
      .get('https://tejoacc.my.id/api/materi') // alamat api aplikasi terbitan senja
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
          source={require('../../../assets/Pengertian.jpg')}
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
          
          {data  //Menampilkan data dari API berdasarkan id materi 
            .filter((item) => item.id === 1)
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

      <View
        style={{
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: '#FE8253',
          padding: 5,
          marginLeft: 10,
          marginBottom: 15,
          marginRight: 10,
        }}>
        
        <TouchableOpacity //Menampilkan QUIZ, yang pertama kita atur button terlebih dahulu pada page materi
          onPress={() => navigation.navigate('Quiz', { categoryId: 1 })}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 2,
              color: 'white',
              fontWeight: 'bold',
            }}>
            {'QUIZ 1'}
          </Text>
        </TouchableOpacity> 
      
      </View>
    </View>
    
  );
};

export default pengertian;
