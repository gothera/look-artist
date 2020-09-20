import { TextStyle } from 'react-native';

const font = {
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

/**
 * Only Design System Typography
 */
const designSystemTypography = {
  largeTitle: {
    ...font.medium,
    fontSize: 34,
  } as TextStyle,

  largeTitleBold: {
    ...font.bold,
    fontSize: 34,
  } as TextStyle,

  title1: {
    ...font.medium,
    fontSize: 28,
  } as TextStyle,

  title1Bold: {
    ...font.bold,
    fontSize: 28,
  } as TextStyle,

  title2: {
    ...font.medium,
    fontSize: 22,
  } as TextStyle,

  title2Bold: {
    ...font.bold,
    fontSize: 22,
  } as TextStyle,

  title3: {
    ...font.medium,
    fontSize: 20,
  } as TextStyle,

  title3Bold: {
    ...font.bold,
    fontSize: 20,
  } as TextStyle,

  title3SemiBold: {
    ...font.semiBold,
    fontSize: 20,
  } as TextStyle,

  headline: {
    ...font.medium,
    fontSize: 18,
  } as TextStyle,

  headlineSemiBold: {
    ...font.semiBold,
    fontSize: 18,
  } as TextStyle,

  headlineBold: {
    ...font.bold,
    fontSize: 18,
  } as TextStyle,

  body: {
    ...font.medium,
    fontSize: 16,
  } as TextStyle,

  bodySemiBold: {
    ...font.semiBold,
    fontSize: 16,
  } as TextStyle,

  bodyRegular: {
    ...font.regular,
    fontSize: 16,
  } as TextStyle,

  subheadline: {
    ...font.medium,
    fontSize: 14,
  } as TextStyle,

  subheadlineSemiBold: {
    ...font.semiBold,
    fontSize: 14,
  } as TextStyle,

  subheadlineRegular: {
    ...font.regular,
    fontSize: 14,
  } as TextStyle,

  footnote: {
    ...font.medium,
    fontSize: 13,
  } as TextStyle,

  footnoteSemiBold: {
    ...font.semiBold,
    fontSize: 13,
  } as TextStyle,

  footnoteRegular: {
    ...font.regular,
    fontSize: 13,
  } as TextStyle,

  caption1: {
    ...font.medium,
    fontSize: 12,
  } as TextStyle,

  caption1SemiBold: {
    ...font.semiBold,
    fontSize: 12,
  } as TextStyle,

  caption1Regular: {
    ...font.regular,
    fontSize: 12,
  } as TextStyle,

  caption1Bold: {
    ...font.bold,
    fontSize: 12,
  } as TextStyle,

  caption2: {
    ...font.medium,
    fontSize: 11,
  } as TextStyle,

  caption2SemiBold: {
    ...font.semiBold,
    fontSize: 11,
  } as TextStyle,

  caption2Regular: {
    ...font.regular,
    fontSize: 11,
  } as TextStyle,

  caption2Bold: {
    ...font.bold,
    fontSize: 11,
  } as TextStyle,
};

export default designSystemTypography;
