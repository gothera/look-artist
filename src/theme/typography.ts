import { TextStyle } from 'react-native';
import designSystemTypography from './designsystem-typography';

export const font = {
  thin: {
    fontFamily: 'Gilroy-Thin',
  } as TextStyle,
  thinItalic: {
    fontFamily: 'Gilroy-ThinItalic',
  } as TextStyle,
  regular: {
    fontFamily: 'Gilroy-Regular',
  } as TextStyle,
  regularItalic: {
    fontFamily: 'Gilroy-RegularItalic',
  } as TextStyle,
  medium: {
    fontFamily: 'Gilroy-Medium',
  } as TextStyle,
  mediumItalic: {
    fontFamily: 'Gilroy-MediumItalic',
  } as TextStyle,
  semiBold: {
    fontFamily: 'Gilroy-SemiBold',
  } as TextStyle,
  semiBoldItalic: {
    fontFamily: 'Gilroy-SemiBoldItalic',
  } as TextStyle,
  bold: {
    fontFamily: 'Gilroy-Bold',
  } as TextStyle,
  boldItalic: {
    fontFamily: 'Gilroy-BoldItalic',
  } as TextStyle,
  black: {
    fontFamily: 'Gilroy-Black',
  } as TextStyle,
  blackItalic: {
    fontFamily: 'Gilroy-BlackItalic',
  } as TextStyle,
};

export const typography = {
  ...designSystemTypography,

  descriptiveHeader: {
    ...font.bold,
    fontSize: 20,
  } as TextStyle,

  headerDescription: {
    ...font.medium,
    fontSize: 16,
  } as TextStyle,

  textInputLabel: {
    ...font.medium,
    fontSize: 14,
  } as TextStyle,

  textInputLabelDescription: {
    ...font.regular,
    fontSize: 10,
  } as TextStyle,

  textInput: {
    ...font.medium,
    fontSize: 16,
  } as TextStyle,

  button: {
    ...font.semiBold,
    fontSize: 16,
  } as TextStyle,

  orDivider: {
    ...font.semiBold,
    fontSize: 12,
  } as TextStyle,

  paragraphQuestion: {
    ...font.regular,
    fontSize: 16,
  } as TextStyle,

  touchableWord: {
    ...font.bold,
    fontSize: 20,
  } as TextStyle,

  screenHeader: {
    ...font.bold,
    fontSize: 30,
  } as TextStyle,

  checkOption: {
    ...font.medium,
    fontSize: 18,
  } as TextStyle,

  sideMenuOption: {
    ...font.bold,
    fontSize: 18,
  } as TextStyle,

  bigTitle: {
    ...font.bold,
    fontSize: 28,
  } as TextStyle,

  smallTitle: {
    ...font.medium,
    fontSize: 16,
  } as TextStyle,
  subTitle: {
    ...font.medium,
    fontSize: 10,
  } as TextStyle,

  collapsedHeaderTitle: {
    ...font.bold,
    fontSize: 18,
  } as TextStyle,

  mutedDescription: {
    ...font.semiBold,
    fontSize: 8,
  },
  mutedDescriptionMedium: {
    ...font.medium,
    fontSize: 8,
  },

  smallInterval: {
    ...font.medium,
    fontSize: 13,
  },

  userName: {
    ...font.bold,
    fontSize: 16,
  },

  serviceName: {
    ...font.semiBold,
    fontSize: 11,
  },

  label: {
    ...font.semiBold,
    fontSize: 13,
  },
  boldTitle: {
    ...font.bold,
    fontSize: 16,
  },
  boldSubtitle: {
    ...font.bold,
    fontSize: 14,
  },
};
