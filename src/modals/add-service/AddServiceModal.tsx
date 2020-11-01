import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect, ConnectedProps } from 'react-redux';
import FooterSaveAndClear from '../../components/footer/footer-save-and-clear/FooterSaveAndClear';
import { StoreState } from '../../store/store.types';
import { styles } from './styles';
import PickerInput from '../../components/input/PickerInput';
import { getPickerServices, categoryStrToEnum } from '../../utils/global';
import TextInputWithLabel from '../../components/input/TextInputWithLabel';
import { addService } from '../../store/offeredService/offeredService.actions';

const LEFT_BUTTON_CLOSE = 'close-add-appointment-modal';

interface OwnProps {
  componentId: string;
}

const mapStateToProps = (state: StoreState) => {
  return {
    category: state.profile.category,
  };
};

const mapDispatchToProps = { addService };

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const AddAppointmentModal: React.FC<OwnProps & PropsFromRedux> = ({
  componentId,
  category,
  addService,
}) => {
  Navigation.mergeOptions(componentId, {
    topBar: {
      leftButtons: [
        {
          id: LEFT_BUTTON_CLOSE,
          icon: require('../../res/images/icons/close-icon.png'),
        },
      ],
    },
  });

  Navigation.events().registerNavigationButtonPressedListener(
    ({ buttonId }) => {
      if (buttonId === LEFT_BUTTON_CLOSE) {
        closeModal();
      }
    },
  );

  const [serviceName, setServiceName] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState('');
  const [priceStr, setPriceStr] = useState('');
  const [durationStr, setDurationStr] = useState('');

  const [isDurationDividedBy30, setIsDurationDividedBy30] = useState(true);

  const checkDurationDividedBy30 = (durationStrParam: string) => {
    setIsDurationDividedBy30(parseInt(durationStrParam) % 30 === 0);
    return parseInt(durationStrParam) % 30 === 0;
  };

  const clearAllField = () => {
    setServiceName(undefined);
    setDescription('');
    setPriceStr('');
    setDurationStr('');
  };

  const closeModal = () => {
    Navigation.dismissModal(componentId);
  };

  const isClearDisabled =
    !serviceName && description === '' && priceStr === '' && durationStr === '';

  const isSaveDisabled =
    !serviceName || description === '' || priceStr === '' || durationStr === '';

  const onSavePress = () => {
    if (!checkDurationDividedBy30(durationStr)) {
      return;
    }
    if (category && serviceName) {
      addService(
        category,
        serviceName,
        description,
        parseInt(priceStr),
        parseInt(durationStr),
        closeModal,
      );
    }
  };

  return (
    <>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
        <PickerInput
          label="Service Name"
          containerStyle={styles.input}
          value={serviceName}
          placeholder="Select a service"
          items={getPickerServices(categoryStrToEnum(category!))}
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
      </ScrollView>
      <FooterSaveAndClear
        onClear={clearAllField}
        isClearDisabled={isClearDisabled}
        isSaveDisabled={isSaveDisabled}
        onSave={onSavePress}
      />
    </>
  );
};

export default connector(AddAppointmentModal) as React.FC<OwnProps>;
