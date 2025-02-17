import React, { useEffect } from 'react';
import {
  BackHandler,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Navigation } from 'react-native-navigation';
import strings from '../../res/strings/strings';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
  startingTime: string;
  setHour: (param: string) => void;
}

const SelectTimeModal: React.FC<OwnProps> = ({
  componentId,
  startingTime,
  setHour,
}) => {
  const time = new Date();
  time.setHours(
    parseInt(startingTime.split(':')[0]),
    parseInt(startingTime.split(':')[1]),
    0,
    0,
  );
  const startingDate = new Date();
  const endingDate = new Date();
  startingDate.setHours(0, 0, 0, 0);
  endingDate.setHours(24, 0, 0, 0);
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

  const setTime = (date: Date) => {
    setHour(date.toTimeString().substring(0, 5));
  };

  return (
    <TouchableWithoutFeedback onPress={close}>
      <View style={styles.background}>
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <DatePicker
              date={time}
              onDateChange={setTime}
              mode="time"
              locale="ro"
              minuteInterval={30}
              minimumDate={startingDate}
              maximumDate={endingDate}
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

export default SelectTimeModal;
