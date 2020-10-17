import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { styles } from './styles';
import strings from '../../../../res/strings/strings';
import TextInputWithLabel from '../../../../components/input/TextInputWithLabel';
import PlaceholderInput from '../../../../components/input/placeholder-input/PlaceholderInput';
import { showSelectDateModal } from '../../../../navigation';
import { formatDateToDDMMYYY } from '../../../../utils/date.utils';
import PrimaryButton from '../../../../components/button/PrimaryButton';

interface OwnProps {
  slideToNext: () => void;
  firstName: string;
  setFirstName: (param: string) => void;
  lastName: string;
  setLastName: (param: string) => void;
  birthdayDate: Date | undefined;
  setBirthdayDate: (param: Date) => void;
}

const InformationStep: React.FC<OwnProps> = ({
  slideToNext,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  birthdayDate,
  setBirthdayDate,
}) => {
  const onBirthdaySelect = () => {
    showSelectDateModal({
      props: {
        onDateChange: setBirthdayDate,
      },
    });
  };

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="always"
      >
        <Text style={styles.title}>
          {strings.screen.setup.information.title}
        </Text>
        <Text style={styles.description}>
          {strings.screen.setup.information.description}
        </Text>
        <TextInputWithLabel
          label={strings.screen.setup.information.firstNameLabel}
          text={firstName}
          setText={setFirstName}
          placeholder={strings.screen.setup.information.firstNamePlaceholder}
          containerStyle={styles.fNameContainer}
          keyboardType="default"
        />
        <TextInputWithLabel
          label={strings.screen.setup.information.lastNameLabel}
          text={lastName}
          setText={setLastName}
          placeholder={strings.screen.setup.information.lastNamePlaceholder}
          containerStyle={styles.fNameContainer}
          keyboardType="default"
        />
        <PlaceholderInput
          label={strings.screen.setup.information.birthdayLabel}
          placeholder={strings.screen.setup.information.birthdayPlaceholder}
          containerStyle={styles.birthdayContainer}
          text={birthdayDate && formatDateToDDMMYYY(birthdayDate)}
          onPress={onBirthdaySelect}
        />
      </ScrollView>
      <KeyboardAccessoryView alwaysVisible style={styles.keyboardAccessory}>
        <View style={{ marginHorizontal: 16 }}>
          <PrimaryButton
            title="Continue"
            onPress={slideToNext}
            isDisabled={
              firstName === '' || lastName === '' || birthdayDate === undefined
            }
          />
        </View>
      </KeyboardAccessoryView>
    </View>
  );
};

export default InformationStep;
