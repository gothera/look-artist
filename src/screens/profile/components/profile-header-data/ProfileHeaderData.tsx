import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect, ConnectedProps } from 'react-redux';
import LineDivider from '../../../../components/ui/LineDivider';
import { AppointmentIcon, LikesIcon, RatingStar } from '../../../../res/svg';
import { StoreState } from '../../../../store/store.types';
import { textWithZecimals } from '../../../../utils/global';
import { styles } from './styles';

const mapStateToProps = (state: StoreState) => {
  return {
    profile: state.profile,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileHeaderData: React.FC<PropsFromRedux> = ({ profile }) => {
  const {
    profilePicture,
    firstName,
    lastName,
    likes,
    appointmentsCount,
    rating,
    bio,
  } = profile;
  return (
    <View style={styles.fullContainer}>
      <View style={styles.container}>
        <FastImage
          resizeMode="contain"
          style={styles.avatarStyle}
          source={{ uri: profilePicture }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{firstName + ' ' + lastName}</Text>
          <Text>{'Makeup Artist'}</Text>
          <View style={styles.statsContainer}>
            <View style={styles.metricContainer}>
              <View style={styles.counterContainer}>
                <RatingStar />
                <Text style={styles.counterText}>
                  {textWithZecimals(rating.toString())}
                </Text>
              </View>
              <Text style={styles.metricText}>Rate</Text>
            </View>

            <View style={styles.metricContainer}>
              <View style={styles.counterContainer}>
                <LikesIcon />
                <Text style={styles.counterText}>{likes}</Text>
              </View>
              <Text style={styles.metricText}>Likes</Text>
            </View>
            <View style={styles.metricContainer}>
              <View style={styles.counterContainer}>
                <AppointmentIcon />
                <Text style={styles.counterText}>{appointmentsCount}</Text>
              </View>
              <Text style={styles.metricText}>Appointments</Text>
            </View>
          </View>
        </View>
      </View>
      <LineDivider containerStyle={styles.divider} />
      <Text style={styles.bioText}>{bio || ''}</Text>
    </View>
  );
};

export default connector(ProfileHeaderData);
