import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  ScrollView,
  TouchableOpacity,
  TextStyle,
  Settings,
} from 'react-native';
import { color, font, typography } from '../../../theme';
import SideMenuHeader from './SideMenuHeader';
import SideMenuOption from './SideMenuOption';
import {
  PlusIcon,
  ShopCartIcon,
  BellIcon,
  SettingsIcon,
} from '../../../res/svg';

interface OwnProps {
  componentId: string;
}

const SideMenu: React.FC<OwnProps> = ({ componentId }) => {
  const onViewProfilePress = () => {};

  return (
    <View style={styles.container}>
      <SideMenuHeader />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={onViewProfilePress}>
          <Text style={styles.viewProfileText}>View Your Profile</Text>
        </TouchableOpacity>
        <Text style={styles.optionsLabelText}>Options</Text>
        <SideMenuOption
          name="Add Post"
          icon={
            <PlusIcon
              style={styles.plusIconContainer}
              stroke={color.textSecondary}
            />
          }
          onPress={() => {}}
        />
        <SideMenuOption
          name="Your Services"
          icon={
            <ShopCartIcon
              style={styles.plusIconContainer}
              stroke={color.textSecondary}
            />
          }
          onPress={() => {}}
        />
        <SideMenuOption
          name="Notifications"
          icon={
            <BellIcon
              style={styles.bellIconContainer}
              stroke={color.textSecondary}
            />
          }
          onPress={() => {}}
        />
        <SideMenuOption
          name="Settings"
          icon={
            <SettingsIcon
              style={styles.bellIconContainer}
              stroke={color.textSecondary}
            />
          }
          onPress={() => {}}
        />
      </ScrollView>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  viewProfileText: TextStyle;
  optionsLabelText: TextStyle;
  plusIconContainer: ViewStyle;
  bellIconContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingHorizontal: 16,
  },
  viewProfileText: {
    ...font.bold,
    fontSize: 18,
    marginTop: 24,
  },
  optionsLabelText: {
    ...typography.textInputLabel,
    color: color.muted,
    marginTop: 30,
  },
  plusIconContainer: {
    marginTop: -9,
  },
  bellIconContainer: { marginTop: -7 },
});

export default SideMenu as React.FC<OwnProps>;
