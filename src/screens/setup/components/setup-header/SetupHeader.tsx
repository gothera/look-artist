import React from 'react';
import { View, Text } from 'react-native';
import strings from '../../../../res/strings/strings';
import StepsIndicator from '../StepsIndicator';
import { styles } from './styles';

interface OwnProps {
  step: number;
}

const SetupHeader: React.FC<OwnProps> = ({ step }) => {
  const getStepName = () => {
    switch (step) {
      case 0:
        return strings.screen.setup.information.title;
      case 1:
        return strings.screen.setup.photo.title;
      case 2:
        return strings.screen.setup.category.title;
      case 3:
        return strings.screen.setup.service.title;
      default:
        return strings.screen.setup.information.title;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Step ${step + 1}`}</Text>
      <StepsIndicator
        numOfSteps={4}
        currentStep={step}
        containerStyle={styles.stepsIndicator}
      />
      <Text style={styles.stepName}>{getStepName()}</Text>
    </View>
  );
};

export default SetupHeader;
