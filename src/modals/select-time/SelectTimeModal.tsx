import React, { useEffect } from 'react';
import { BackHandler, TouchableWithoutFeedback, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Navigation } from 'react-native-navigation';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
  setTime: (_: Date) => void;
  time: Date;
  startingTime: string;
  endingTime: string;
}

const SelectTimeModal: React.FC<OwnProps> = ({
  componentId,
  setTime,
  time,
  startingTime,
  endingTime,
}) => {
  //   const [time, _] = useState<Date | undefined>(new Date());
  const startingDate = new Date();
  const endingDate = new Date();
  startingDate.setHours(
    parseInt(startingTime.split(':')[0]),
    parseInt(startingTime.split(':')[1]),
    0,
    0,
  );
  endingDate.setHours(
    parseInt(endingTime.split(':')[0]),
    parseInt(endingTime.split(':')[1]),
    0,
    0,
  );
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
        <View style={styles.container}>
          <DatePicker
            date={time}
            onDateChange={setTime}
            mode="time"
            locale="ro"
            minuteInterval={5}
            minimumDate={startingDate}
            maximumDate={endingDate}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SelectTimeModal;
