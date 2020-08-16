import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Swiper from 'react-native-swiper';
import { typography, color } from '../../theme';
import StepsIndicator from './components/StepsIndicator';
import PrimaryButton from '../../components/button/PrimaryButton';
import PhotoStep from './components/PhotoStep';
import NameStep from './components/NameStep';
import PhoneNumberStep from './components/PhoneNumberStep';
import CategoryStep from './components/CategoryStep';
import ServiceStep from './components/ServiceStep';

const STATUS_BAR_HEIGHT = getStatusBarHeight();

interface OwnProps {
  componentId: string;
}

const SetupScreen: React.FC<OwnProps> = ({ componentId }) => {
  const [step, setStep] = useState(0);
  const swiperRef = useRef<Swiper>(null);

  const slideToNext = () => {
    if (step < 4) {
      setStep((old) => old + 1);
    }
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1, true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{`Step ${step + 1}`}</Text>
        <StepsIndicator
          numOfSteps={5}
          currentStep={step}
          containerStyle={styles.stepsIndicatorContainer}
        />
      </View>
      <Swiper
        ref={swiperRef}
        index={0}
        showsPagination={false}
        loop={false}
        scrollEnabled={false}
      >
        <View style={styles.swiperSlide}>
          <PhotoStep slideToNext={slideToNext} />
        </View>
        <View style={styles.swiperSlide}>
          <NameStep slideToNext={slideToNext} isFocused={step === 1} />
        </View>
        <View style={styles.swiperSlide}>
          <PhoneNumberStep slideToNext={slideToNext} isFocused={step === 2} />
        </View>
        <View style={styles.swiperSlide}>
          <CategoryStep slideToNext={slideToNext} />
        </View>
        <View style={styles.swiperSlide}>
          <ServiceStep />
        </View>
      </Swiper>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  header: ViewStyle;
  headerText: ViewStyle;
  stepsIndicatorContainer: ViewStyle;
  swiperSlide: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT,
  },
  header: {
    marginTop: 40,
  },
  headerText: {
    ...typography.screenHeader,
    color: color.textPrimary,
    marginLeft: 16,
  },
  stepsIndicatorContainer: {
    marginTop: 10,
  },
  swiperSlide: {
    flex: 1,
    alignItems: 'center',
  },
});

export default SetupScreen;
