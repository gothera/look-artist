import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { typography, color } from '../../../theme';

interface Style {
  container: ViewStyle;
  intervalContainer: ViewStyle;
  intervalText: TextStyle;
  intervalFreeSpotsLabel: TextStyle;
  rowContainer: ViewStyle;
  addAppointmentBtnContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingRight: 8,
    paddingLeft: 16,
    height: 94,
  },
  intervalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  intervalText: {
    ...typography.subheadlineRegular,
    color: color.muted,
  },
  intervalFreeSpotsLabel: {
    ...typography.smallInterval,
    color: color.muted,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  addAppointmentBtnContainer: {
    justifyContent: 'center',
    flex: 1,
  },
});
