import React from 'react';
import { Text, Animated } from 'react-native';
import styles from './styles';
import { HEADER_SCREEN_HEIGHT } from '../../../res/constants';

interface OwnProps {
  title: string;
  scrollY: Animated.Value;
}

const HeaderScreenBigTitle: React.FC<OwnProps> = ({ title, scrollY }) => {
  const translateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCREEN_HEIGHT],
    outputRange: [0, -HEADER_SCREEN_HEIGHT],
    extrapolate: 'clamp',
  });

  const opacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCREEN_HEIGHT / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: translateY }] }]}
    >
      <Animated.View style={{ opacity: opacity }}>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </Animated.View>
  );
};

export default HeaderScreenBigTitle;
