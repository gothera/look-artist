import React, { useEffect, useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import { Navigation } from 'react-native-navigation';
import { connect, ConnectedProps } from 'react-redux';
import { MODAL_BIG_SNAP_POINT } from '../../res/constants';
import { selectAppointmentById } from '../../store/appointment/appointment.selectors';
import { StoreState } from '../../store/store.types';
import { Currency } from '../../types/enums';
import AppointmentDetailsDate from './components/appointment-details-date/AppointmentDetailsDate';
import AppointmentDetailsFooter from './components/appointment-details-footer/AppointmentDetailsFooter';
import AppointmentDetailsPrice from './components/appointment-details-price/AppointmentDetailsPrice';
import AppointmentDetailsService from './components/appointment-details-service/AppointmentDetailsService';
import ClientDetailsHeader from './components/client-details-header/ClientDetailsHeader';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
  appointmentIdStr: string;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps) => {
  const appointment = selectAppointmentById(ownProps.appointmentIdStr)(state);
  const clientName = appointment.clientName;
  const serviceName = appointment.serviceName;
  const clientPhoto = appointment.photo;
  const startingTime = appointment.startingTime;
  const endingTime = appointment.endingTime;
  const date = appointment.date;
  const currency = appointment.currency;
  const cost = appointment.cost;

  return {
    clientName,
    serviceName,
    clientPhoto,
    startingTime,
    endingTime,
    date,
    currency,
    cost,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const AppointmentDetailsModal: React.FC<OwnProps & PropsFromRedux> = ({
  componentId,
  clientName,
  serviceName,
  clientPhoto,
  startingTime,
  endingTime,
  appointmentIdStr,
  date,
  currency,
  cost,
}) => {
  const modalizeRef = useRef<Modalize>(null);

  const dateObj = new Date(date);
  const todayDate = new Date();

  const isPreviousDate = dateObj.getTime() < todayDate.getTime();

  useEffect(() => {
    openBottomSheet();
  }, []);

  const openBottomSheet = () => {
    if (modalizeRef && modalizeRef.current) {
      modalizeRef.current.open();
    }
  };

  const closeModal = () => {
    Navigation.dismissOverlay(componentId);
  };

  if (!clientName || !serviceName) {
    /**
     * Pay attention, can do bugs
     */
    return null;
  }

  return (
    <>
      <Modalize
        ref={modalizeRef}
        onClosed={closeModal}
        modalStyle={styles.modal}
        childrenStyle={styles.modalContainer}
        snapPoint={MODAL_BIG_SNAP_POINT}
        handlePosition="inside"
      >
        <ClientDetailsHeader
          clientName={clientName}
          clientPhoto={clientPhoto}
        />
        <AppointmentDetailsService serviceName={serviceName} />
        <AppointmentDetailsDate
          date={date} // TODO send correct prop
          startingTime={startingTime}
          endingTime={endingTime}
        />
        <AppointmentDetailsPrice
          price={cost || 0}
          currency={Currency[currency]}
        />
      </Modalize>
      {!isPreviousDate && (
        <AppointmentDetailsFooter
          appointmentIdStr={appointmentIdStr}
          date={date}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default connector(AppointmentDetailsModal);
