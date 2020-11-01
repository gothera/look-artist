import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ViewStyle, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Swiper from 'react-native-swiper';
import { typography, color } from '../../theme';
import StepsIndicator from './components/StepsIndicator';
import PhotoStep from './components/PhotoStep';
import CategoryStep from './components/CategoryStep';
import ServiceStep from './components/ServiceStep';
import InformationStep from './components/information-step/InformationStep';
import { Category } from '../../types/enums';
import { setup } from '../../store/profile/profile.actions';
import { connect, ConnectedProps } from 'react-redux';
import { categoryEnumToStr } from '../../utils/global';

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
  const [description, setDescription] = useState('');
  const [priceStr, setPriceStr] = useState('');
  const [durationStr, setDurationStr] = useState('');

  const isDoneFinalDisabled =
    !serviceName || priceStr === '' || durationStr === '';

  const slideToNext = () => {
    if (step < 4) {
      setStep((old) => old + 1);
    }
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1, true);
    }
  };

  const onDoneSetup = () => {
    // if (selectedCategory && birthdayDate && serviceName) {
    setup(
      firstName,
      lastName,
      categoryEnumToStr(selectedCategory),
      birthdayDate.toISOString(),
      serviceName,
      description,
      priceStr,
      durationStr,
    );
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{`Step ${step + 1}`}</Text>
        <StepsIndicator
          numOfSteps={4}
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
          <InformationStep
            slideToNext={slideToNext}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            birthdayDate={birthdayDate}
            setBirthdayDate={setBirthdayDate}
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
            description={description}
            setDescription={setDescription}
            priceStr={priceStr}
            setPriceStr={setPriceStr}
            onDone={onDoneSetup}
            durationStr={durationStr}
            setDurationStr={setDurationStr}
            category={selectedCategory}
            isDoneDisabled={isDoneFinalDisabled}
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
  },
  header: {
    marginTop: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
  },
  headerText: {
    ...typography.largeTitleBold,
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

export default connector(SetupScreen);
