import react from 'react';
import { Image } from 'react-native';
import { globalStyle } from '../../../globalStyle';
import { Avatar, Card, IconButton } from 'react-native-paper';

const CustomCard = (props) => {
  return (
    <Card
      style={{
        height: props.height,
        width: props.width,
        marginRight: 40,
        backgroundColor: '#FE8253',
      }}
      onPress={props.onPress}>
      <Card.Title
        style={globalStyle.cardTitle}
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => (
          <Image
            style={globalStyle.cardImg}
            source={require('../../../assets/snack-icon.png')}
          />
        )}
      />
    </Card>
  );
};

export default CustomCard;
