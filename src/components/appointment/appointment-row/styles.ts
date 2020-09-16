import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { typography, color } from '../../../theme';

interface Style {
  container: ViewStyle;
  intervalText: TextStyle;
  rowContainer: ViewStyle;
  addAppointmentBtnContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingRight: 8,
    paddingLeft: 16,
    // backgroundColor: 'green',
    height: 90,
  },
  intervalText: {
    ...typography.smallInterval,
    color: color.muted,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    // backgroundColor: 'red',
  },
  addAppointmentBtnContainer: {
    justifyContent: 'center',
    flex: 1,
  },
});
