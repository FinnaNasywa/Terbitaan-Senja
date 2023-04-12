import react from 'react';
import { globalStyle } from '../../globalStyle';
import { Button } from '@rneui/themed';
import {View} from 'react-native';

const CustomButton = (props) => {
  return (
    <View style={{alignItems: 'center', marginTop: 4}}>
      <Button
        title={props.title}    
        onPress={props.press}      
        buttonStyle={{ backgroundColor: 'rgba(254, 130, 83, 1)'}}
        containerStyle={{
          width: '98%',
          borderRadius: 7
        }}
        titleStyle={{ color: 'white', marginHorizontal: 20 }}
      />
    </View>
  );
};

export default CustomButton;
