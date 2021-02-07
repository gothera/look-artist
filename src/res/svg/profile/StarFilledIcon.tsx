import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const StarFilledIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M19.947 7.179a1.001 1.001 0 00-.868-.676l-5.701-.453L10.911.589A.998.998 0 009.089.588L6.622 6.05l-5.701.453a1 1 0 00-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 001.53 1.057L10 16.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
});
