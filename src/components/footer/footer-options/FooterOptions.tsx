import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

interface OwnProps {
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const FooterOptions: React.FC<OwnProps> = ({
  children,
  contentContainerStyle,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        {children}
      </View>
    </View>
  );
};

export default FooterOptions;
