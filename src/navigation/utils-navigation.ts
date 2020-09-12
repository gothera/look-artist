import { AnimationOptions } from 'react-native-navigation';

export interface Config {
  props?: any;
  animations?: AnimationOptions;
  options?: any;
}

export const getConfig = (config?: Config): Config => {
  return {
    props: {},
    animations: {},
    options: {},
    ...(config || {}),
  };
};
