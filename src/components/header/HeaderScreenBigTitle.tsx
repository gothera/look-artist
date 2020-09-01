import React from 'react';
import { Text, View } from 'react-native';
import styles from './headerScreenBigTitleStyle';

interface OwnProps {
  title: string;
}

const HeaderScreenBigTitle: React.FC<OwnProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderScreenBigTitle;
