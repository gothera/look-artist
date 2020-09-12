import React from 'react';
import { Animated, Text } from 'react-native';
import { COLLAPSED_HEADER_HEIGHT } from '../../../res/constants';
import styles from './styles';

interface OwnProps {
  title: string;
  scrollY: Animated.Value;
}

const HeaderScreenCollapsed: React.FC<OwnProps> = ({ title, scrollY }) => {
  const translateYContainer = scrollY.interpolate({
    inputRange: [0, 60],
    outputRange: [-COLLAPSED_HEADER_HEIGHT / 4, 0],
    extrapolate: 'clamp',
  });

  const opacityContainer = scrollY.interpolate({
    inputRange: [20, 60],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const translateText = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [16, 0],
    extrapolate: 'clamp',
  });

  const opacityText = scrollY.interpolate({
    inputRange: [25, 50],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <>
      <Animated.View
        style={[
          styles.titleContainer,
          {
            opacity: opacityText,
            transform: [{ translateY: translateText }],
          },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacityContainer,
            transform: [{ translateY: translateYContainer }],
          },
        ]}
      />
    </>
  );
};

export default HeaderScreenCollapsed;
