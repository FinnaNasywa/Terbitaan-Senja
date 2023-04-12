import react from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { globalStyle } from '../../../globalStyle';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { Icon } from 'react-native-elements';

const CustomCardBox = (props) => {
  return (
    <TouchableOpacity
      style={{
        width: 132,
        height: 132,
        marginVertical: 8,
        padding: 4,
        backgroundColor: '#FE8253',
      }}
      onPress={props.onPress}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          {props.title}
        </Text>
        <View
          style={{
            marginTop: 20,
          }}>
          <Icon
            reverse
            name={props.icon}
            type="ionicon"
            color="#AAA"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCardBox;
