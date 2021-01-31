import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { selectNotificationById } from '../../../../store/notification/notification.selectors';
import { StoreState } from '../../../../store/store.types';
import { NotificationType } from '../../../../types/globalTypes';
import NotificationAppointmentCreated from '../notification-appointment-created/NotificationAppointmentCreated';
import NotificationAppointmentCancelled from '../notification-appointment-cancelled/NotificationAppointmentCancelled';

interface OwnProps {
  id: number;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps) => {
  return {
    notification: selectNotificationById(ownProps.id)(state),
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const NotificationRow: React.FC<OwnProps & PropsFromRedux> = ({
  notification,
}) => {
  switch (notification.type) {
    case NotificationType.CreateAppointment:
      return <NotificationAppointmentCreated notification={notification} />;
    case NotificationType.CancelAppointment:
      return <NotificationAppointmentCancelled notification={notification} />;
  }

  return null;
};

export default connector(NotificationRow) as React.FC<OwnProps>;
