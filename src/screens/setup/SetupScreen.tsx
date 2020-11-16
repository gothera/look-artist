import React, { useState, useRef } from 'react';
import { StyleSheet, View, ViewStyle, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Swiper from 'react-native-swiper';
import { typography, color } from '../../theme';
import PhotoStep from './components/PhotoStep';
import CategoryStep from './components/CategoryStep';
import ServiceStep from './components/service-step/ServiceStep';
import InformationStep from './components/information-step/InformationStep';
import { Category } from '../../types/enums';
import { setup } from '../../store/profile/profile.actions';
import { connect, ConnectedProps } from 'react-redux';
import SetupHeader from './components/setup-header/SetupHeader';

const STATUS_BAR_HEIGHT = getStatusBarHeight();

interface OwnProps {
  componentId: string;
}

const mapDispatchToProps = {
  setup,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const SetupScreen: React.FC<OwnProps & PropsFromRedux> = ({
  componentId,
  setup,
}) => {
  const [step, setStep] = useState(0);
  const swiperRef = useRef<Swiper>(null);

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [birthdayDate, setBirthdayDate] = useState<Date | undefined>(undefined);

  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >(undefined);

  const [serviceName, setServiceName] = useState<string | undefined>(undefined);

  const slideToNext = () => {
    if (step < 4) {
      setStep((old) => old + 1);
    }
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1, true);
    }
  };

  const onDoneSetup = (
    description: string,
    priceStr: string,
    durationStr: string,
  ) => {
    setup(
      firstName,
      lastName,
      selectedCategory,
      birthdayDate.toISOString(),
      serviceName,
      description,
      priceStr,
      durationStr,
    );
  };

  return (
    <View style={styles.container}>
      <SetupHeader step={step} />
      <Swiper
        ref={swiperRef}
        index={0}
        showsPagination={false}
        loop={false}
        scrollEnabled={false}
      >
        <View style={styles.swiperSlide}>
          <InformationStep
            slideToNext={slideToNext}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setBirthdayDate={setBirthdayDate}
            birthdayDate={birthdayDate}
          />
        </View>
        <View style={styles.swiperSlide}>
          <PhotoStep slideToNext={slideToNext} />
        </View>
        <View style={styles.swiperSlide}>
          <CategoryStep
            slideToNext={slideToNext}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </View>
        <View style={styles.swiperSlide}>
          <ServiceStep
            serviceName={serviceName}
            setServiceName={setServiceName}
            // setDescription={setDescription}
            // setPriceStr={setPriceStr}
            onDone={onDoneSetup}
            // setDurationStr={setDurationStr}
            category={selectedCategory}
          />
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
    backgroundColor: color.background,
  },
  header: {
    marginTop: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
  },
  headerText: {
    ...typography.title1Bold,
    color: color.textSecondary,
    marginLeft: 16,
  },
  stepsIndicatorContainer: {
    marginTop: 10,
    paddingHorizontal: 8,
  },
  swiperSlide: {
    flex: 1,
    alignItems: 'center',
  },
});

export default connector(SetupScreen);
