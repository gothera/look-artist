import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface OwnProps {
  price: number;
  currency: string;
}

const AppointmentDetailsPrice: React.FC<OwnProps> = ({ price, currency }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Total to receive</Text>
      <View style={styles.priceRowContainer}>
        <Text style={styles.priceText}>{price}</Text>
        <Text style={styles.priceText}>{` ${currency}`}</Text>
      </View>
    </View>
  );
};

export default AppointmentDetailsPrice;
