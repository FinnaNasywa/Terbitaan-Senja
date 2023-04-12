import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { globalStyle } from '../../../globalStyle';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Score = ({ route, navigation }) => {
  const listHandler = () => {
    navigation.navigate('Home');
  };

  const answers = route?.params?.answers;

  useEffect(() => {
    submitManyAnswers();
  });

  const [totalQuiz, setTotalQuiz] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0); 
  async function submitManyAnswers() {
    try {
      if (answers) {
        await axios
          .post('https://tejoacc.my.id/api/jobsheet/many', answers)
          .then((response) => {
            console.log(response);
            const message = response.data.message;
            setTotalQuiz(message.split(' ')[2]);
            setRightAnswer(message.split(' ')[1]);
            setWrongAnswer(message.split(' ')[3] - message.split(' ')[1]);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={(globalStyle.container, { backgroundColor: '#fff9f2' })}>
      {console.log(totalQuiz, rightAnswer)}
      <View style={{ backgroundColor: '#FE8253', flexDirection: 'row' }}>
        
        <Text
          style={{
            marginTop: 32,
            marginLeft: 20,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 10,
          }}>
          {'Final Score'}
        </Text>
      </View>

      <ScrollView style={{ padding: 10, backgroundColor: '#FFFFFF' }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../../../assets/selese.png')} />
        </View>

        <View style={{ height: 30 }}></View>

        <View>
          <View
            style={{
              marginTop: 30,
              padding: 10,
              backgroundColor: '#FE8253',
              height: 60,
              borderRadius: 5,
              flexDirection: 'row',
            }}>
            <View>
              <Text style={{ color: 'white' }}>{'Benar'}</Text>
              <Text style={{ color: 'white' }}>{rightAnswer}</Text>
            </View>

            <View style={{ width: 200 }}></View>

            <View
              style={{
                backgroundColor: '#63EC33',
                borderRadius: 40,
                height: 20,
                width: 20,
                marginTop: 10,
              }}></View>
          </View>
        </View>

        <View>
          <View
            style={{
              marginTop: 10,
              padding: 10,
              backgroundColor: '#FE8253',
              height: 60,
              borderRadius: 5,
              flexDirection: 'row',
            }}>
            <View>
              <Text style={{ color: 'white' }}>{'Salah'}</Text>
              <Text style={{ color: 'white' }}>{wrongAnswer}</Text>
            </View>

            <View style={{ width: 200 }}></View>

            <View
              style={{
                backgroundColor: '#FF1515',
                borderRadius: 40,
                height: 20,
                width: 20,
                marginTop: 10,
              }}></View>
          </View>
        </View>

        <View>
          <View
            style={{
              marginTop: 10,
              padding: 10,
              backgroundColor: '#FE8253',
              height: 60,
              borderRadius: 5,
            }}>
            <View>
              <Text style={{ color: 'white' }}>{'Nilai'}</Text>
              <Text style={{ color: 'white' }}>{rightAnswer * 10}</Text>
            
            </View>
          </View>
        </View>

        <View
          style={{
            width: 90,
            height: 30,
            marginTop: 30,
            marginLeft: 110,
            backgroundColor: '#B06D40',
            padding: 5,
            borderRadius: 5,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Materi')}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {'Kembali'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Score;
