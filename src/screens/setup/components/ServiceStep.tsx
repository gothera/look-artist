import React, { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import StepTitle from './StepTitle';
import PickerInput from '../../../components/input/PickerInput';
import TextInputWithLabel from '../../../components/input/TextInputWithLabel';
import { StoreState, AsyncDispatch } from '../../../store/store.types';
import { connect, ConnectedProps } from 'react-redux';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { color } from '../../../theme';
import PrimaryButton from '../../../components/button/PrimaryButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  makeupServicesSelection,
  lashesServicesSelection,
  eyebrowsServicesSelection,
  nailsServicesSelection,
  bodyCareServicesSelection,
  hairServicesSelection,
} from '../../../res/constants/pickerItems';
import { setup } from '../../../store/profile/profile.actions';

interface OwnProps {}

const mapStateToProps = (state: StoreState) => {
  return {
    category: state.profile.category,
  };
};

const mapDispatchToProps = (dispatch: AsyncDispatch) => ({
  setup: (
    serviceName: string,
    serviceDescription: string,
    servicePrice: string,
    serviceDuration: string,
  ) =>
    dispatch(
      setup(serviceName, serviceDescription, servicePrice, serviceDuration),
    ),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const ServiceStep: React.FC<OwnProps & PropsFromRedux> = ({
  category,
  setup,
}) => {
  const [serviceName, setServiceName] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState('');
  const [priceStr, setPriceStr] = useState('');
  const [durationStr, setDurationStr] = useState('');

  const getPickerServices = () => {
    switch (category) {
      case 'Makeup': {
        return makeupServicesSelection;
      }
      case 'Lashes': {
        return lashesServicesSelection;
      }
      case 'Eyebrows': {
        return eyebrowsServicesSelection;
      }
      case 'Nails': {
        return nailsServicesSelection;
      }
      case 'Body Care': {
        return bodyCareServicesSelection;
      }
      case 'Hair': {
        return hairServicesSelection;
      }
      default: {
        return makeupServicesSelection;
      }
    }
  };

  const onDonePress = () => {
    if (serviceName) {
      setup(serviceName, description, priceStr, durationStr);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={50}
      >
        <StepTitle
          title="A service"
          description="Choose and describe a service to get started"
        />
        <PickerInput
          label="Service Name"
          containerStyle={styles.input}
          placeholder="Select a service"
          items={getPickerServices()}
          setSelected={setServiceName}
        />
        <TextInputWithLabel
          label="Description"
          containerStyle={styles.input}
          maxLengthUndefined
          placeholder="Enter a description"
          multiline
          numOfLines={3}
          onValueChanged={setDescription}
        />

        <TextInputWithLabel
          label="Price"
          containerStyle={styles.input}
          placeholder="Enter a price"
          keyboardType="number-pad"
          onValueChanged={setPriceStr}
        />

        <TextInputWithLabel
          label="Duration"
          containerStyle={styles.input}
          placeholder="Enter duration"
          keyboardType="number-pad"
          onValueChanged={setDurationStr}
        />
      </KeyboardAwareScrollView>

      <KeyboardAccessoryView alwaysVisible style={styles.keyboardAccessory}>
        <PrimaryButton title="Done" onPress={onDonePress} />
      </KeyboardAccessoryView>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  scrollContainer: ViewStyle;
  input: ViewStyle;
  keyboardAccessory: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    marginTop: 40,
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  input: {
    marginTop: 30,
  },
  keyboardAccessory: {
    backgroundColor: color.background,
    marginBottom: 20,
    borderTopWidth: 0,
  },
});

export default connector(ServiceStep) as React.FC<OwnProps>;
