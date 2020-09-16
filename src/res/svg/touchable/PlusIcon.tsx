import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { SVGProps } from '../index';

export const PlusIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={18.5} height={18.5} viewBox="0 0 18.5 18.5" {...props}>
      <G
        data-name="Group 480"
        fill="none"
        stroke={props.stroke || '#34353e'}
        strokeLinecap="round"
        strokeWidth={2.5}
      >
        <Path data-name="Line 91" d="M9.25 1.25v16" />
        <Path data-name="Line 92" d="M17.25 9.25h-16" />
      </G>
    </Svg>
  );
});
