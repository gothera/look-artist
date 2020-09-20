import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import UserAvatar from '../../../../components/avatar/user-avatar/UserAvatar';
import LineDivider from '../../../../components/ui/LineDivider';

interface OwnProps {
  clientName: string;
  clientPhoto: string;
}

const ClientDetailsHeader: React.FC<OwnProps> = ({
  clientName,
  clientPhoto,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <UserAvatar photoUrl={clientPhoto} size={40} />
        <Text style={styles.clientName}>{clientName}</Text>
      </View>
      <LineDivider containerStyle={styles.lineDivider} />
    </View>
  );
};

export default ClientDetailsHeader;
