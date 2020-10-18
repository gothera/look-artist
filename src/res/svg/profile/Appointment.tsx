import React from 'react';
import Svg, { G, Path, Rect } from 'react-native-svg';
import { SVGProps } from '../index';

export const AppointmentIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={15.089} height={15} viewBox="0 0 15.089 15" {...props}>
      <G
        transform="translate(-2.412 -1.5)"
        fill="none"
        stroke={props.stroke || '#34353e'}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Rect
          data-name="Rectangle 206"
          width={14.089}
          height={13.088}
          rx={2}
          transform="translate(2.912 2.912)"
        />
        <Path data-name="Line 63" d="M13.114 2v2.277" />
        <Path data-name="Line 64" d="M6.89 2v2.277" />
        <Path data-name="Line 65" d="M3 8.222h14.001" />
      </G>
    </Svg>
  );
});
