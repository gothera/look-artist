import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import FastImage, { ImageStyle } from 'react-native-fast-image';
import { typography, font } from '../../../theme';

interface OwnProps {
  onProfilePress: () => void;
}

const FeedHeader: React.FC<OwnProps> = ({ onProfilePress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.leftRowContainer}>
          <TouchableOpacity onPress={onProfilePress}>
            <FastImage
              style={styles.profileImage}
              source={{
                uri: 'https://i.imgur.com/Cx3dwAt.png',
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.currentMonthText}>February</Text>
        </View>
        <Text>Edit</Text>
      </View>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  rowContainer: ViewStyle;
  leftRowContainer: ViewStyle;
  profileImage: ImageStyle;
  currentMonthText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    paddingHorizontal: 16,
  },
  rowContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  currentMonthText: {
    ...font.black,
    fontSize: 22,
    marginLeft: 10,
    marginTop: 5,
  },
});

export default FeedHeader as React.FC<OwnProps>;
