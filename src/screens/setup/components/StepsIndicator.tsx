import React from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  Dimensions,
  StyleProp,
} from 'react-native';
import { color } from '../../../theme';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const getStepLineWidth = (numOfSteps: number) =>
  (SCREEN_WIDTH - numOfSteps - 20) / numOfSteps;

interface OwnProps {
  numOfSteps: number;
  currentStep: number;
  containerStyle?: StyleProp<ViewStyle>;
}

const StepsIndicator: React.FC<OwnProps> = ({
  numOfSteps,
  currentStep,
  containerStyle,
}) => {
  const lineWidth = getStepLineWidth(numOfSteps);

  const renderLines = () => {
    const lines = [];
    for (let i = 0; i < numOfSteps; i++) {
      lines.push(
        <View
          style={[
            styles.lineNeutral,
            { width: lineWidth },
            i === currentStep && styles.lineCurrent,
          ]}
          key={`step-line-${i}`}
        />,
      );
    }
    return lines;
  };

  return (
    <View style={[styles.container, containerStyle]}>{renderLines()}</View>
  );
};

interface Style {
  container: ViewStyle;
  lineNeutral: ViewStyle;
  lineCurrent: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lineNeutral: {
    height: 2,
    backgroundColor: color.unchosen,
  },
  lineCurrent: {
    height: 4,
    backgroundColor: color.textPrimary,
  },
});

export default StepsIndicator;
