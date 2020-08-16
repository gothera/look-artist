import React from 'react';
import { StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';
import FastImage, { ImageStyle } from 'react-native-fast-image';
import { STATUS_BAR_HEIGHT } from '../../../res/constants';
import { typography, font, color } from '../../../theme';
import LineDivider from '../../../components/ui/LineDivider';

const SideMenuHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <FastImage
          style={styles.profileImage}
          source={{
            uri: 'https://i.imgur.com/Cx3dwAt.png',
          }}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>Bugy</Text>
          <Text style={styles.descriptionText}>5 stelute Doctor</Text>
        </View>
      </View>
      <LineDivider containerStyle={styles.divider} />
    </View>
  );
};

interface Style {
  container: ViewStyle;
  rowContainer: ViewStyle;
  textContainer: ViewStyle;
  profileImage: ImageStyle;
  nameText: TextStyle;
  descriptionText: TextStyle;
  divider: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    marginTop: STATUS_BAR_HEIGHT + 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 14,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  nameText: {
    ...font.black,
    fontSize: 20,
    color: color.textPrimary,
  },
  descriptionText: {
    ...font.medium,
    color: color.muted,
  },
  divider: {
    marginTop: 10,
  },
});

export default SideMenuHeader;
