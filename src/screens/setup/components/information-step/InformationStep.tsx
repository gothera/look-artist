import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import strings from '../../../../res/strings/strings';
import TextInputWithLabel from '../../../../components/input/TextInputWithLabel';
import PlaceholderInput from '../../../../components/input/placeholder-input/PlaceholderInput';
import { showSelectDateModal } from '../../../../navigation';
import { formatDateToDDMMYYY } from '../../../../utils/date.utils';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import { Formik } from 'formik';

interface OwnProps {
  slideToNext: () => void;
  setFirstName: (param: string) => void;
  setLastName: (param: string) => void;
  birthdayDate: Date | undefined;
  setBirthdayDate: (param: Date) => void;
  setAddress: (param: string) => void;
}

const InformationStep: React.FC<OwnProps> = ({
  slideToNext,
  setFirstName,
  setLastName,
  setBirthdayDate,
  birthdayDate,
  setAddress,
}) => {
  const onBirthdaySelect = () => {
    showSelectDateModal({
      props: {
        onDateChange: setBirthdayDate,
      },
    });
  };

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', address: '' }}
      onSubmit={(values) => {
        setFirstName(values.firstName);
        setLastName(values.lastName);
        setAddress(values.address);
        slideToNext();
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <>
          <ScrollView style={styles.container}>
            <TextInputWithLabel
              setText={handleChange('firstName')}
              text={values.firstName}
              label={strings.screen.setup.information.firstNameLabel}
              placeholder={
                strings.screen.setup.information.firstNamePlaceholder
              }
            />
            <TextInputWithLabel
              setText={handleChange('lastName')}
              text={values.lastName}
              label={strings.screen.setup.information.lastNameLabel}
              placeholder={strings.screen.setup.information.lastNamePlaceholder}
              containerStyle={styles.elementMarginTop}
            />
            <PlaceholderInput
              label={strings.screen.setup.information.birthdayLabel}
              placeholder={strings.screen.setup.information.birthdayPlaceholder}
              containerStyle={styles.elementMarginTop}
              text={birthdayDate && formatDateToDDMMYYY(birthdayDate)}
              onPress={onBirthdaySelect}
            />

            <TextInputWithLabel
              setText={handleChange('address')}
              text={values.address}
              label={strings.screen.setup.information.addressLabel}
              placeholder={strings.screen.setup.information.addressPlaceholder}
              containerStyle={styles.elementMarginTop}
            />
          </ScrollView>
          <View style={styles.continueBtnContainer}>
            <PrimaryButton
              onPress={handleSubmit}
              title={strings.action.continue}
              isDisabled={
                values.firstName === '' ||
                values.lastName === '' ||
                birthdayDate === undefined
              }
            />
          </View>
        </>
      )}
    </Formik>
  );
};

export default InformationStep;
