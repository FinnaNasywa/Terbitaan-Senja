import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Text,
  View,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { globalStyle } from '../../globalStyle';
import CustomCard from '../form/layout/card';


const List = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    // marginVertical: 20,
  },
});

export default List;
