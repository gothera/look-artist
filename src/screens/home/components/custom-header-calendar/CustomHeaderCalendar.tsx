import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import OwnAvatar from '../../../../components/avatar/own-avatar/OwnAvatar';
import { showEditProgramModal } from '../../../../navigation';
import strings from '../../../../res/strings/strings';

interface OwnProps {
  month: string;
}

const CustomHeaderCalendar: React.FC<OwnProps> = ({ month }) => {
  const onEditProgramPress = () => {
    showEditProgramModal();
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftRowContainer}>
          <OwnAvatar size={30} style={styles.avatar} />
          <Text style={styles.monthText}>{month}</Text>
        </View>
        <TouchableOpacity
          style={styles.addProgramIconContainer}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={onEditProgramPress}
        >
          <Text style={styles.editText}>
            {strings.screen.home.editProgramBtn}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statusBarOverlay} />
    </>
  );
};

export default CustomHeaderCalendar;
