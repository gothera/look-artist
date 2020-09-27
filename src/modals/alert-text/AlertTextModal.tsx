import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import { Navigation } from 'react-native-navigation';

interface OwnProps {
  componentId: string;
  title: string;
  description?: string;
}

const AlertTextModal: React.FC<OwnProps> = ({
  componentId,
  title,
  description,
}) => {
  const closeModal = () => {
    Navigation.dismissOverlay(componentId);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.backgroundContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.descriptionText}>{description}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default AlertTextModal;
