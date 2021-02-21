import React from 'react';
import { FlatList } from 'react-native';
import { HPageViewHoc } from 'react-native-head-tab-view';
import { useSelector } from 'react-redux';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import { showAddServiceModal } from '../../../../navigation';
import strings from '../../../../res/strings/strings';
import { selectServicesById } from '../../../../store/offeredService/offeredService.selectors';
import ProfileServiceCard from '../profile-service-card/ProfileServiceCard';
import { styles } from './styles';

const HFlatList = HPageViewHoc(FlatList);

interface Props {
  listProps: any;
}

const ArtistServices: React.FC<Props> = ({ listProps }) => {
  const servicesById = useSelector(selectServicesById);

  const renderServiceRow = ({ item }: { item: number }) => {
    return <ProfileServiceCard serviceId={item} />;
  };

  const onAddServicePress = () => {
    showAddServiceModal();
  };

  const listFooter = (
    <PrimaryButton
      containerStyle={{ marginTop: 16 }}
      title={'Add Service'}
      onPress={onAddServicePress}
    />
  );

  return (
    <HFlatList
      {...listProps}
      data={servicesById}
      renderItem={renderServiceRow}
      keyExtractor={(_: number, index: number) => index.toString()}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={listFooter}
    />
  );
};

export default ArtistServices;
