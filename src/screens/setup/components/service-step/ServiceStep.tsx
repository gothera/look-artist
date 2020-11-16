import { Formik } from 'formik';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import PickerInput from '../../../../components/input/PickerInput';
import TextInputWithLabel from '../../../../components/input/TextInputWithLabel';
import strings from '../../../../res/strings/strings';
import { Category } from '../../../../types/enums';
import { getPickerServices } from '../../../../utils/global';
import { styles } from './styles';

interface OwnProps {
  category?: Category;
  serviceName: string | undefined;
  setServiceName: (param: string) => void;
  onDone: (description: string, priceStr: string, durationStr: string) => void;
}

const ServiceStep: React.FC<OwnProps> = ({
  category,
  onDone,
  serviceName,
  setServiceName,
}) => {
  const [isDurationDividedBy30, setIsDurationDividedBy30] = useState(true);

  const checkDurationDividedBy30 = (durationStrParam: string) => {
    setIsDurationDividedBy30(parseInt(durationStrParam) % 30 === 0);
    return parseInt(durationStrParam) % 30 === 0;
  };

  return (
    <Formik
      initialValues={{ description: '', price: '', duration: '' }}
      onSubmit={(values) => {
        if (!checkDurationDividedBy30(values.duration)) {
          return;
        }

        onDone(values.description, values.price, values.duration);
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            extraScrollHeight={50}
          >
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
              setText={handleChange('description')}
              text={values.description}
            />

            <TextInputWithLabel
              label="Price LEI"
              containerStyle={styles.input}
              placeholder="Enter a price"
              keyboardType="number-pad"
              setText={handleChange('price')}
              text={values.price}
            />

            <TextInputWithLabel
              label="Duration in minutes"
              containerStyle={styles.input}
              placeholder="Enter duration"
              keyboardType="number-pad"
              description={'Service duration is allowed every 30 minutes'}
              setText={handleChange('duration')}
              text={values.duration}
            />
            {!isDurationDividedBy30 && (
              <Text style={styles.errorDurationText}>
                Please enter a multiple of 30. Durations are allowed at every 30
                min.
              </Text>
            )}
          </KeyboardAwareScrollView>
          <View style={styles.continueBtnContainer}>
            <PrimaryButton
              onPress={handleSubmit}
              title={strings.action.continue}
              isDisabled={
                values.description === '' ||
                values.duration === '' ||
                serviceName === undefined ||
                values.price === ''
              }
            />
          </View>
        </>
      )}
    </Formik>
  );
};

export default ServiceStep;
