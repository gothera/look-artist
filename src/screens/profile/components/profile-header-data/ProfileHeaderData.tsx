import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect, ConnectedProps } from 'react-redux';
import LineDivider from '../../../../components/ui/LineDivider';
import { showEditProfileModal } from '../../../../navigation';
import { AppointmentIcon, LikesIcon, RatingStar } from '../../../../res/svg';
import { StoreState } from '../../../../store/store.types';
import { textWithZecimals } from '../../../../utils/global';
import { styles } from './styles';
import strings from '../../../../res/strings/strings';
import { color } from '../../../../theme';

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
    category,
  } = profile;

  return (
    <View style={styles.fullContainer}>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => showEditProfileModal()}
      >
        <Text style={styles.editBtnText}>{strings.action.edit}</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <FastImage
          resizeMode="contain"
          style={styles.avatarStyle}
          source={{ uri: profilePicture }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{firstName + ' ' + lastName}</Text>
          <Text style={styles.categoryText}>{category}</Text>
          <View style={styles.statsContainer}>
            <View style={styles.metricContainer}>
              <View style={styles.counterContainer}>
                <RatingStar
                  stroke={color.textSecondary}
                  style={{ marginBottom: 5 }}
                />
                <Text style={styles.counterText}>
                  {textWithZecimals(rating.toString())}
                </Text>
              </View>
              <Text style={styles.metricText}>
                {strings.screen.profile.metrics.rate}
              </Text>
            </View>

            <View style={styles.metricContainer}>
              <View style={styles.counterContainer}>
                <LikesIcon
                  stroke={color.textSecondary}
                  style={{ marginBottom: 2 }}
                />
                <Text style={styles.counterText}>{likes}</Text>
              </View>
              <Text style={styles.metricText}>
                {strings.screen.profile.metrics.likes}
              </Text>
            </View>
            <View style={styles.metricContainer}>
              <View style={styles.counterContainer}>
                <AppointmentIcon
                  stroke={color.textSecondary}
                  style={{ marginBottom: 3 }}
                />
                <Text style={styles.counterText}>{appointmentsCount}</Text>
              </View>
              <Text style={styles.metricText}>
                {strings.screen.profile.metrics.appointments}
              </Text>
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
