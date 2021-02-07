import React, { ReactChild, ReactChildren, useRef } from 'react';
import { Animated, Pressable } from 'react-native';

interface OwnProps {
  children: ReactChildren | ReactChild;
  onPress: () => void;
}

const PressableCard: React.FC<OwnProps> = ({ children, onPress }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.timing(scale, {
      toValue: 0.95,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scale }] }}>
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
};

export default PressableCard;
