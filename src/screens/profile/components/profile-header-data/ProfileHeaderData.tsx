import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect, ConnectedProps } from 'react-redux';
import LineDivider from '../../../../components/ui/LineDivider';
import { showEditProfileModal } from '../../../../navigation';
import { AppointmentIcon, LikesIcon, RatingStar } from '../../../../res/svg';
import { StoreState } from '../../../../store/store.types';
import { categoryEnumToStr, textWithZecimals } from '../../../../utils/global';
import { styles } from './styles';
import strings from '../../../../res/strings/strings';
import { color } from '../../../../theme';
import OwnAvatar from '../../../../components/avatar/own-avatar/OwnAvatar';

const mapStateToProps = (state: StoreState) => {
  return {
    profile: state.profile,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileHeaderData: React.FC<PropsFromRedux> = ({ profile }) => {
  const {
    firstName,
    lastName,
    saves,
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
        <OwnAvatar size={80} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{firstName + ' ' + lastName}</Text>
          <Text style={styles.categoryText}>
            {categoryEnumToStr(category!)}
          </Text>
          <View style={styles.statsContainer}>
            <View style={styles.metricContainer}>
              <View style={styles.counterContainer}>
                <RatingStar
                  stroke={color.textPrimary}
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
                  stroke={color.textPrimary}
                  style={{ marginBottom: 2 }}
                />
                <Text style={styles.counterText}>{saves}</Text>
              </View>
              <Text style={styles.metricText}>
                {strings.screen.profile.metrics.saves}
              </Text>
            </View>
            <View style={styles.metricContainer}>
              <View style={styles.counterContainer}>
                <AppointmentIcon
                  stroke={color.textPrimary}
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
      <Text style={styles.bioText} numberOfLines={3}>
        {bio || ''}
      </Text>
    </View>
  );
};

export default connector(ProfileHeaderData);
