import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const BellIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={19} height={18} viewBox="0 0 19 21" fill="none" {...props}>
      <Path
        d="M14.712 7.284a5.128 5.128 0 00-4.727-5.519 5.17 5.17 0 00-5.632 4.632c-.528 5.922-3.266 7.393-3.266 7.393l15.54 1.33s-2.442-1.914-1.915-7.836zM11.035 18.154a1.868 1.868 0 01-3.231 0"
        stroke="#34353E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
});
