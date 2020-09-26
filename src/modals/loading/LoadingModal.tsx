import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';
import { Navigation } from 'react-native-navigation';
import { connect, ConnectedProps } from 'react-redux';
import { StoreState } from '../../store/store.types';
import { color } from '../../theme';

const WIDTH = Dimensions.get('screen').width - 100;

interface OwnProps {
  componentId: string;
}

const mapStateToProps = (state: StoreState, _: OwnProps) => {
  return {
    isLogging: state.profile.isLogging,
  };
};

const connector = connect(mapStateToProps, null);
type PropsFromRedux = ConnectedProps<typeof connector>;

const LoadingModal: React.FC<OwnProps & PropsFromRedux> = ({
  componentId,
  isLogging,
}) => {
  const fadeVal = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn();
  }, []);

  useEffect(() => {
    if (!isLogging) {
      close();
    }
  }, [isLogging]);

  const fadeIn = () => {
    Animated.timing(fadeVal, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const close = () => {
    Animated.timing(fadeVal, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      Navigation.dismissOverlay(componentId);
    });
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeVal }]}>
      <View style={styles.background}>
        <TouchableWithoutFeedback>
          <View style={styles.contentContainer}>
            <MaterialIndicator color={color.textPrimary} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Animated.View>
  );
};

interface Style {
  container: ViewStyle;
  background: ViewStyle;
  contentContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.modalBackground,
  },
  contentContainer: {
    backgroundColor: color.background,
    width: WIDTH,
    paddingVertical: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connector(LoadingModal);
