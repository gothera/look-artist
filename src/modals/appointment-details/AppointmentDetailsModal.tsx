import React, { useRef, useEffect } from 'react';
import { Navigation } from 'react-native-navigation';
import { Modalize } from 'react-native-modalize';
import { styles } from './styles';
import { connect, ConnectedProps } from 'react-redux';
import { selectAppointmentById } from '../../store/appointment/appointment.selectors';
import { StoreState } from '../../store/store.types';
import { MODAL_BIG_SNAP_POINT } from '../../res/constants';
import ClientDetailsHeader from './components/client-details-header/ClientDetailsHeader';
import AppointmentDetailsService from './components/appointment-details-service/AppointmentDetailsService';
import AppointmentDetailsDate from './components/appointment-details-date/AppointmentDetailsDate';
import AppointmentDetailsPrice from './components/appointment-details-price/AppointmentDetailsPrice';
import AppointmentDetailsFooter from './components/appointment-details-footer/AppointmentDetailsFooter';

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

  return {
    clientName,
    serviceName,
    clientPhoto,
    startingTime,
    endingTime,
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
}) => {
  const modalizeRef = useRef<Modalize>(null);

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

  if (!clientName || !clientPhoto || !serviceName) {
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
          date={'2020-10-10'} // TODO send correct prop
          startingTime={startingTime}
          endingTime={endingTime}
        />
        <AppointmentDetailsPrice price={20} currency={'lei'} />
      </Modalize>
      <AppointmentDetailsFooter appointmentIdStr={appointmentIdStr} />
    </>
  );
};

export default connector(AppointmentDetailsModal);
