import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect, ConnectedProps } from 'react-redux';
import { selectNotificationById } from '../../../../store/notification/notification.selectors';
import { StoreState } from '../../../../store/store.types';
import { color } from '../../../../theme';
import styles from './styles';

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
  return (
    <View style={styles.container}>
      <FastImage
        resizeMode="contain"
        style={styles.avatarStyle}
        source={{ uri: notification.extra.avatar }}
      />
      <View style={styles.textContainer}>
        <Text
          style={{
            fontSize: 15,
            color: color.textPrimary,
          }}
        >
          {`${notification.extra.name} reviewed you`}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: color.muted,
          }}
        >{`${notification.extra.rating} Stars`}</Text>
      </View>
    </View>
  );
};

export default connector(NotificationRow) as React.FC<OwnProps>;
