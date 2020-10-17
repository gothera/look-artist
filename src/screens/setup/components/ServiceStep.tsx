import React from 'react';
import { StyleSheet, View, ViewStyle, Text, TextStyle } from 'react-native';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PrimaryButton from '../../../components/button/PrimaryButton';
import PickerInput from '../../../components/input/PickerInput';
import TextInputWithLabel from '../../../components/input/TextInputWithLabel';
import {
  bodyCareServicesSelection,
  eyebrowsServicesSelection,
  hairServicesSelection,
  lashesServicesSelection,
  makeupServicesSelection,
  nailsServicesSelection,
} from '../../../res/constants/pickerItems';
import { color, typography, spacing } from '../../../theme';

import { Category } from '../../../types/enums';
import strings from '../../../res/strings/strings';

interface OwnProps {
  category?: Category;
  serviceName: string | undefined;
  setServiceName: (param: string) => void;
  description: string;
  setDescription: (param: string) => void;
  priceStr: string;
  setPriceStr: (param: string) => void;
  durationStr: string;
  setDurationStr: (param: string) => void;

  onDone: () => void;
}

const ServiceStep: React.FC<OwnProps> = ({
  category,
  onDone,
  serviceName,
  setServiceName,
  description,
  setDescription,
  priceStr,
  setPriceStr,
  durationStr,
  setDurationStr,
}) => {
  const getPickerServices = () => {
    switch (category) {
      case Category.Makeup: {
        return makeupServicesSelection;
      }
      case Category.Lashes: {
        return lashesServicesSelection;
      }
      case Category.Eyebrows: {
        return eyebrowsServicesSelection;
      }
      case Category.Nails: {
        return nailsServicesSelection;
      }
      case Category.BodyCare: {
        return bodyCareServicesSelection;
      }
      case Category.Hair: {
        return hairServicesSelection;
      }
      default: {
        return makeupServicesSelection;
      }
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={50}
      >
        <Text style={styles.title}>{strings.screen.setup.service.title}</Text>
        <Text style={styles.description}>
          {strings.screen.setup.service.description}
        </Text>
        <PickerInput
          label="Service Name"
          containerStyle={styles.input}
          value={serviceName}
          placeholder="Select a service"
          items={getPickerServices()}
          setSelected={() => {}}
          onValueChanged={setServiceName}
        />
        <TextInputWithLabel
          label="Description"
          containerStyle={styles.input}
          maxLengthUndefined
          placeholder="Enter a description"
          multiline
          numOfLines={3}
          setText={setDescription}
          text={description}
        />

        <TextInputWithLabel
          label="Price LEI"
          containerStyle={styles.input}
          placeholder="Enter a price"
          keyboardType="number-pad"
          setText={setPriceStr}
          text={priceStr}
        />

        <TextInputWithLabel
          label="Duration Minutes"
          containerStyle={styles.input}
          placeholder="Enter duration"
          keyboardType="number-pad"
          text={durationStr}
          setText={setDurationStr}
        />
      </KeyboardAwareScrollView>

      <KeyboardAccessoryView alwaysVisible style={styles.keyboardAccessory}>
        <View style={{ marginHorizontal: 16 }}>
          <PrimaryButton title="Done" onPress={onDone} />
        </View>
      </KeyboardAccessoryView>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  scrollContainer: ViewStyle;
  input: ViewStyle;
  keyboardAccessory: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    paddingHorizontal: spacing.base,
    marginTop: spacing.larger,
    width: '100%',
    height: '100%',
  },
  input: {
    marginTop: 30,
  },
  keyboardAccessory: {
    backgroundColor: color.background,
    marginBottom: 20,
    borderTopWidth: 0,
  },
  title: {
    ...typography.title3Bold,
    color: color.textSecondary,
  },
  description: {
    ...typography.subheadlineSemiBold,
    color: color.muted,
    marginTop: spacing.smallest,
  },
});

export default ServiceStep;
