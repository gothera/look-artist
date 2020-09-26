import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect, ConnectedProps } from 'react-redux';
import LineDivider from '../../../../components/ui/LineDivider';
import { selectNotificationById } from '../../../../store/notification/notification.selectors';
import { StoreState } from '../../../../store/store.types';
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
    <View>
      <View style={styles.container}>
        <FastImage
          resizeMode="contain"
          style={styles.avatarStyle}
          source={{ uri: notification.extra.avatar }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.reviewTitle}>
            {`${notification.extra.name} reviewed you`}
          </Text>
          <Text
            style={styles.reviewDescription}
          >{`${notification.extra.rating} Stars`}</Text>
        </View>
      </View>
      <LineDivider containerStyle={styles.dividerStyle} />
    </View>
  );
};

export default connector(NotificationRow) as React.FC<OwnProps>;
