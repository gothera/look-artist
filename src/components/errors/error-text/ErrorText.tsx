import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

interface OwnProps {
  errorMessage: string;
  show?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const ErrorText: React.FC<OwnProps> = ({
  errorMessage,
  show,
  containerStyle,
}) => {
  return (
    <>
      {show && (
        <View style={[styles.container, containerStyle]}>
          <Text style={styles.errorText} numberOfLines={2}>
            {errorMessage}
          </Text>
        </View>
      )}
    </>
  );
};

export default ErrorText;
