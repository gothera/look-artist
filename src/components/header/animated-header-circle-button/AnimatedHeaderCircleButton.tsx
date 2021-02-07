import React, { ReactChild, ReactChildren } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

interface OwnProps {
  onPress: () => void;
  children: ReactChildren | ReactChild;
}

const AnimatedHeaderCircleButton: React.FC<OwnProps> = ({
  onPress,
  children,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default AnimatedHeaderCircleButton;
