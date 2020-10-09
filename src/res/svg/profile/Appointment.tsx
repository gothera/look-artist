import React from 'react';
import Svg, { G, Line, Rect } from 'react-native-svg';
import { SVGProps } from '../index';

export const AppointmentIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg
      width={props.width || '12'}
      height={props.height || '12'}
      viewBox="0 0 12 12"
    >
      <G transform="translate(-2.5 -1.5)">
        <Rect
          width="9"
          height="8"
          rx="1"
          transform="translate(3 3)"
          fill="none"
          stroke="#34353e"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Line
          y2="1.8"
          transform="translate(9.501 2)"
          fill="none"
          stroke="#34353e"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Line
          y2="1.8"
          transform="translate(5.5 2)"
          fill="none"
          stroke="#34353e"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Line
          x2="9"
          transform="translate(3 6)"
          fill="none"
          stroke="#34353e"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
      </G>
    </Svg>
  );
});
