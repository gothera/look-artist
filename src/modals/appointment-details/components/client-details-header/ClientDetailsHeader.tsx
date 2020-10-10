import React from 'react';
import { Text, View } from 'react-native';
import UserAvatar from '../../../../components/avatar/user-avatar/UserAvatar';
import LineDivider from '../../../../components/ui/LineDivider';
import { styles } from './styles';

interface OwnProps {
  clientName: string;
  clientPhoto: string | undefined;
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
