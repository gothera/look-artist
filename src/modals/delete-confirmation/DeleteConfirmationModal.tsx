import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { Navigation } from 'react-native-navigation';

interface OwnProps {
  componentId: string;
  title: string;
  description: string;
  onDelete: () => void;
  onCancel?: () => void;
}

/**
 * Generic Modal for all delete confirmations
 */
const DeleteConfirmationModal: React.FC<OwnProps> = ({
  componentId,
  title,
  description,
  onDelete,
  onCancel,
}) => {
  const closeModal = () => {
    Navigation.dismissOverlay(componentId);
  };

  const onDismissPress = () => {
    onCancel && onCancel();
    closeModal();
  };

  const onDeletePress = () => {
    onDelete();
    closeModal();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.backgroundContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.descriptionText}>{description}</Text>
              <View style={styles.buttonsRowContainer}>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={onDismissPress}
                >
                  <Text style={styles.dismissText}>Dismiss</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={onDeletePress}
                >
                  <Text style={styles.yesText}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default DeleteConfirmationModal;
