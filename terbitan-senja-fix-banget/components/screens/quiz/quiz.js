//pada halaman quiz kita lakukan yaitu mengimport
import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
  ImageBackground,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Quiz({ navigation, route }) {
  const [allQuizzesData, setAllQuizzesData] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState({});
  const [quizIndex, setQuizIndex] = useState(0);

 
  const [answerId, setAnswerId] = useState([]);
  const [answerChoice, setAnswerChoice] = useState([]);
  
  useEffect(() => {
    const categoryId = route.params.categoryId;
    console.log('Category ID:', categoryId);
    getAllQuizzes(categoryId);
  }, []);

  async function getAllQuizzes(categoryId) {
    try {
      const response = await axios.get(
        `https://tejoacc.my.id/api/quizzes/category/${categoryId}`
      );
      const allQuizzes = response.data.data;
      setAllQuizzesData(allQuizzes);
      setCurrentQuiz(allQuizzes[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ backgroundColor: '#fff9f2' }}>
      <View style={{ backgroundColor: '#FE8253', flexDirection: 'row' }}>
        <AntDesign
          name="left"
          size={25}
          style={{
            marginTop: 30,
            marginLeft: 20,
            color: 'white',
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate('Pengertian')}
        />
        <Text
          style={{
            marginTop: 32,
            marginLeft: 10,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 10,
          }}>
          {'Quiz'}
        </Text>
      </View>
      <View style={{ padding: 10, backgroundColor: '#FFFFFF' }}>
        <View style={{ backgroundColor: '#FFFFFF', height: 20 }}>
          <Text style={{ marginLeft: 5 }}>
          
            Pertanyaan Ke{' '}
            {quizIndex > allQuizzesData.length - 1
              ? `${quizIndex}/${allQuizzesData.length}`
              : `${quizIndex + 1}/${allQuizzesData.length}`}
          </Text>
        </View>

        <View
          style={{
            marginTop: 30,
            padding: 10,
            backgroundColor: '#FE8253',
            height: 150,
            borderRadius: 5,
          }}>
          <View
            style={{
              backgroundColor: '#FFB397',
              padding: 15,
              borderRadius: 5,
              height: 130,
              justifyContent: 'center',
            }}>
        		
            <Text style={{ textAlign: 'center' }}>
              {allQuizzesData.length > 0 && <Text>{currentQuiz.quiz}</Text>}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        style={{ padding: 10, width: '100%', backgroundColor: '#FFFFFF' }}>
        
        {allQuizzesData.length > 0 && (
          <Pressable
            style={styles.btn}
            onPress={() => {
              if (quizIndex === allQuizzesData.length - 1) {
                const answers = {
                  quizId: [...answerId, currentQuiz.id],
                  answer: [...answerChoice, 'a'],
                };

                setAllQuizzesData([]);
                setCurrentQuiz({});
                setQuizIndex(0);
                setAnswerId([]);
                setAnswerChoice([]);
                navigation.navigate('Score', { answers });
              
              } else {
                setAnswerId([...answerId, currentQuiz.id]);
                setAnswerChoice([...answerChoice, 'a']);
                setQuizIndex(quizIndex + 1);
                setCurrentQuiz(allQuizzesData[quizIndex + 1]);
              }
            }}>
            <Text style={styles.textjwb}>{currentQuiz.a}</Text>
          </Pressable>
        )}
        {allQuizzesData.length > 0 && (
          <Pressable
            style={styles.btn}
            onPress={() => {
              if (quizIndex === allQuizzesData.length - 1) {
                const answers = {
                  quizId: [...answerId, currentQuiz.id],
                  answer: [...answerChoice, 'b'],
                };

                setAllQuizzesData([]);
                setCurrentQuiz({});
                setQuizIndex(0);
                setAnswerId([]);
                setAnswerChoice([]);
                navigation.navigate('Score', { answers });
              } else {
                setAnswerId([...answerId, currentQuiz.id]);
                setAnswerChoice([...answerChoice, 'b']);
                setQuizIndex(quizIndex + 1);
                setCurrentQuiz(allQuizzesData[quizIndex + 1]);
              }
            }}>
            <Text style={styles.textjwb}>{currentQuiz.b}</Text>
          </Pressable>
        )}
        {allQuizzesData.length > 0 && (
          <Pressable
            style={styles.btn}
            onPress={() => {
              if (quizIndex === allQuizzesData.length - 1) {
                const answers = {
                  quizId: [...answerId, currentQuiz.id],
                  answer: [...answerChoice, 'c'],
                };

                setAllQuizzesData([]);
                setCurrentQuiz({});
                setQuizIndex(0);
                setAnswerId([]);
                setAnswerChoice([]);
                navigation.navigate('Score', { answers });
              } else {
                setAnswerId([...answerId, currentQuiz.id]);
                setAnswerChoice([...answerChoice, 'c']);
                setQuizIndex(quizIndex + 1);
                setCurrentQuiz(allQuizzesData[quizIndex + 1]);
              }
            }}>
            <Text style={styles.textjwb}>{currentQuiz.c}</Text>
          </Pressable>
        )}
        {allQuizzesData.length > 0 && (
          <Pressable
            style={styles.btn}
            onPress={() => {
              if (quizIndex === allQuizzesData.length - 1) {
                const answers = {
                  quizId: [...answerId, currentQuiz.id],
                  answer: [...answerChoice, 'd'],
                };

                setAllQuizzesData([]);
                setCurrentQuiz({});
                setQuizIndex(0);
                setAnswerId([]);
                setAnswerChoice([]);
                console.log(answers);
                navigation.navigate('Score', { answers });
              } else {
                setAnswerId([...answerId, currentQuiz.id]);
                setAnswerChoice([...answerChoice, 'd']);
                setQuizIndex(quizIndex + 1);
                setCurrentQuiz(allQuizzesData[quizIndex + 1]);
              }
            }}>
            <Text style={styles.textjwb}>{currentQuiz.d}</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    padding: 7,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#FE8253',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textjwb: {
    textAlign: 'center',
  },
});
