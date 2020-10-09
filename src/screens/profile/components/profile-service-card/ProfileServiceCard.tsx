import React from 'react';
import { Text, View } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import LineDivider from '../../../../components/ui/LineDivider';
import { selectServiceById } from '../../../../store/offeredService/offeredService.selectors';
import { StoreState } from '../../../../store/store.types';
import { Currency } from '../../../../types/enums';
import { styles } from './styles';

interface OwnProps {
  serviceId: number;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps) => {
  const service = selectServiceById(ownProps.serviceId)(state);
  return { service };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileServiceCard: React.FC<OwnProps & PropsFromRedux> = ({
  service,
}) => {
  const { name, description, price, currency } = service;
  return (
    <View>
      <Text style={styles.label}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{`${price} ${Currency[currency]}`}</Text>
      <LineDivider containerStyle={styles.divider} />
    </View>
  );
};

export default connector(ProfileServiceCard);
