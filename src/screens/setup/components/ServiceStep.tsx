import React, { useState } from 'react';
import { StyleSheet, View, ViewStyle, Text, TextStyle } from 'react-native';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PrimaryButton from '../../../components/button/PrimaryButton';
import PickerInput from '../../../components/input/PickerInput';
import TextInputWithLabel from '../../../components/input/TextInputWithLabel';
import { color, typography, spacing } from '../../../theme';

import { Category } from '../../../types/enums';
import strings from '../../../res/strings/strings';
import { getPickerServices } from '../../../utils/global';

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

  isDoneDisabled: boolean;
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
  isDoneDisabled,
}) => {
  const [isDurationDividedBy30, setIsDurationDividedBy30] = useState(true);

  const checkDurationDividedBy30 = (durationStrParam: string) => {
    setIsDurationDividedBy30(parseInt(durationStrParam) % 30 === 0);
    return parseInt(durationStrParam) % 30 === 0;
  };

  const onDonePress = () => {
    if (!checkDurationDividedBy30(durationStr)) {
      return;
    }
    onDone();
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
          items={getPickerServices(category!)}
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
          label="Duration in minutes"
          containerStyle={styles.input}
          placeholder="Enter duration"
          keyboardType="number-pad"
          text={durationStr}
          setText={setDurationStr}
          description={'Service duration is allowed every 30 minutes'}
        />
        {!isDurationDividedBy30 && (
          <Text style={styles.errorDurationText}>
            Please enter a multiple of 30. Durations are allowed at every 30
            min.
          </Text>
        )}
      </KeyboardAwareScrollView>

      <KeyboardAccessoryView alwaysVisible style={styles.keyboardAccessory}>
        <View style={{ marginHorizontal: 16 }}>
          <PrimaryButton
            title="Done"
            onPress={onDonePress}
            isDisabled={isDoneDisabled}
          />
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
  errorDurationText: TextStyle;
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
  errorDurationText: {
    ...typography.caption1,
    color: color.delete,
    marginTop: spacing.smaller,
  },
});

export default ServiceStep;
