import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect, ConnectedProps } from 'react-redux';
import PrimaryButton from '../../components/button/PrimaryButton';
import FooterOptions from '../../components/footer/footer-options/FooterOptions';
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
  const startingDate = new Date();
  startingDate.setHours(
    parseInt(startingTime.split(':')[0]),
    parseInt(startingTime.split(':')[1]),
    0,
    0,
  );
  const [clientName, setClientName] = useState('');
  const [time, setTime] = useState<Date | undefined>(startingDate);
  const [serviceId, setServiceId] = useState('default');

  const clearAllField = () => {
    setClientName('');
    setTime(startingDate);
    setServiceId('default');
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
    if (!time || !clientName || serviceId === 'default') return;
    const appointment: Appointment = {
      startingTime: time?.toTimeString().substring(0, 5),
      endingTime: time?.toTimeString().substring(0, 5),
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

  return (
    <View style={styles.container}>
      <Text style={styles.subheadline}>Add an appointment to your program</Text>
      <TextInputWithLabel
        containerStyle={styles.clientContainer}
        labelStyle={styles.clientLabel}
        label="Client Name"
        placeholder="Client name"
        text={clientName}
        setText={setClientName}
      />
      <Text style={styles.labelTitle}>Starting Hour</Text>
      <TouchableWithoutFeedback
        onPress={() =>
          showSelectTimeModal({
            props: { setTime: setTime, time: time, startingTime, endingTime },
          })
        }
      >
        <Text style={styles.textHour}>
          {time?.toTimeString().substring(0, 5)}
        </Text>
      </TouchableWithoutFeedback>
      <LineDivider containerStyle={styles.divider} />

      <PickerInput
        label="Service"
        onValueChanged={setServiceId}
        containerStyle={styles.clientContainer}
        labelStyle={styles.clientLabel}
        placeholder="Select a service"
        setSelected={() => {}}
        value={serviceId}
        items={servicesItems}
      />
      <FooterOptions>
        <PrimaryButton
          containerStyle={styles.clearBtn}
          textStyles={styles.clearBtnText}
          title="Clear all"
          onPress={clearAllField}
        ></PrimaryButton>
        <PrimaryButton
          containerStyle={styles.saveBtn}
          title="Save"
          isDisabled={saveBtnDisabled}
          onPress={saveAppointment}
        ></PrimaryButton>
      </FooterOptions>
    </View>
  );
};

export default connector(AddAppointmentModal) as React.FC<OwnProps>;
