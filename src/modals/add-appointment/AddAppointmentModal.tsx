import React, { useState } from 'react';
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect, ConnectedProps } from 'react-redux';
import FooterSaveAndClear from '../../components/footer/footer-save-and-clear/FooterSaveAndClear';
import PickerInput from '../../components/input/PickerInput';
import TextInputWithLabel from '../../components/input/TextInputWithLabel';
import LineDivider from '../../components/ui/LineDivider';
import { showSelectTimeModal } from '../../navigation';
import { addAppointment } from '../../store/appointment/appointment.actions';
import { selectServices } from '../../store/offeredService/offeredService.selectors';
import { AsyncDispatch, StoreState } from '../../store/store.types';
import { Currency } from '../../types/enums';
import { Appointment, AppointmentType } from '../../types/globalTypes';
import { styles } from './styles';

const LEFT_BUTTON_CLOSE = 'close-add-appointment-modal';

interface OwnProps {
  componentId: string;
  startingTime: string;
  endingTime: string;
  date: string;
}

const mapStateToProps = (state: StoreState, _: OwnProps) => {
  return {
    servicesItems: selectServices(state).map((service) => {
      return {
        label: service.name,
        value: service.id.toString(),
      };
    }),
    artistId: state.profile.artistId,
  };
};

const mapDispatchToProps = (dispatch: AsyncDispatch) => {
  return {
    addAppointment: (appointment: Appointment, closeModal: () => void) =>
      dispatch(addAppointment(appointment, closeModal)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const AddAppointmentModal: React.FC<OwnProps & PropsFromRedux> = ({
  componentId,
  servicesItems,
  startingTime,
  endingTime,
  date,
  addAppointment,
  artistId,
}) => {
  const [startingHour, setStartingHour] = useState<string | undefined>(
    startingTime,
  );

  const [clientName, setClientName] = useState('');

  const [serviceId, setServiceId] = useState('default');

  const clearAllField = () => {
    setClientName('');
    setServiceId('default');
    setStartingHour(undefined);
  };

  Navigation.events().registerNavigationButtonPressedListener(
    ({ buttonId }) => {
      if (buttonId === LEFT_BUTTON_CLOSE) {
        closeModal();
      }
    },
  );

  const closeModal = () => {
    Navigation.dismissModal(componentId);
  };

  const saveAppointment = () => {
    if (!startingHour || !clientName || serviceId === 'default') return;
    const appointment: Appointment = {
      startingTime: startingHour,
      endingTime: startingHour,
      currency: Currency.RON,
      type: AppointmentType.Reserved,
      date: date,
      artistId: artistId,
      serviceId: parseInt(serviceId),
      clientName: clientName,
    };
    addAppointment(appointment, closeModal);
  };
  const saveBtnDisabled = !clientName || serviceId === 'default';

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

  const isClearDisabled = clientName === '' && serviceId === 'default';

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.subheadline}>
          Add an appointment to your program
        </Text>
        <TextInputWithLabel
          containerStyle={styles.clientContainer}
          labelStyle={styles.clientLabel}
          label="Client Name"
          placeholder="Enter client name"
          text={clientName}
          setText={setClientName}
          dividerStyle={styles.divider}
        />
        <Text style={styles.labelTitle}>Starting Hour</Text>
        <TouchableWithoutFeedback
          onPress={() =>
            showSelectTimeModal({
              props: { setHour: setStartingHour, startingTime, endingTime },
            })
          }
        >
          <Text style={styles.textHour}>{startingHour}</Text>
        </TouchableWithoutFeedback>
        <LineDivider containerStyle={styles.divider} />
        <PickerInput
          label="Service"
          onValueChanged={setServiceId}
          containerStyle={styles.clientContainer}
          labelStyle={styles.clientLabel}
          dividerStyle={styles.divider}
          placeholder="Select a service"
          setSelected={() => {}}
          value={serviceId}
          items={servicesItems}
        />
      </ScrollView>
      <FooterSaveAndClear
        onClear={clearAllField}
        isClearDisabled={isClearDisabled}
        isSaveDisabled={saveBtnDisabled}
        onSave={saveAppointment}
      />
    </View>
  );
};

export default connector(AddAppointmentModal) as React.FC<OwnProps>;
