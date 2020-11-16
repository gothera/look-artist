import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  BackHandler,
  Text,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { styles } from './styles';
import { Navigation } from 'react-native-navigation';
import strings from '../../res/strings/strings';

interface OwnProps {
  componentId: string;
  onDateChange: (newDate: Date) => void;
}

const SelectDateModal: React.FC<OwnProps> = ({ componentId, onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const onDateChangeHandler = (date: Date) => {
    setDate(date);
    onDateChange(date);
  };

  const close = () => {
    Navigation.dismissOverlay(componentId);
  };

  useEffect(() => {
    const backAction = () => {
      close();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={close}>
      <View style={styles.background}>
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <DatePicker
              date={date}
              onDateChange={onDateChangeHandler}
              mode="date"
              locale="ro"
              is24hourSource="locale"
            />
            <TouchableOpacity style={styles.doneBtnContainer} onPress={close}>
              <Text style={styles.doneBtnText}>{strings.action.done}</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SelectDateModal;
