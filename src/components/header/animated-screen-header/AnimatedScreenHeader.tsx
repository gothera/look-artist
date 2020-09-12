import React from 'react';
import { View, Animated } from 'react-native';
import HeaderScreenBigTitle from '../header-screen-big-title/HeaderScreenBigTitle';
import HeaderScreenCollapsed from '../header-screen-collapsed/HeaderScreenCollapsed';

interface OwnProps {
  title: string;
  scrollY: Animated.Value;
}

const AnimatedScreenHeader: React.FC<OwnProps> = ({ title, scrollY }) => {
  return (
    <View style={{ position: 'absolute', zIndex: 1, width: '100%' }}>
      <HeaderScreenBigTitle title={title} scrollY={scrollY} />
      <HeaderScreenCollapsed title={title} scrollY={scrollY} />
    </View>
  );
};

export default AnimatedScreenHeader;
