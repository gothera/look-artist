import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const LikesIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg
      width={props.width || '14'}
      height={props.height || '12'}
      viewBox="0 0 12 11"
    >
      <G transform="translate(-327 -57)">
        <Path
          d="M10.667,3.76a2.6,2.6,0,0,0-3.677,0l-.5.5-.5-.5A2.6,2.6,0,0,0,2.31,7.437l.5.5,3.677,3.677,3.677-3.677.5-.5a2.6,2.6,0,0,0,0-3.677Z"
          transform="translate(325.951 54.502)"
          fill={props.fill || 'none'}
          stroke={props.stroke || '#34353e'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </G>
    </Svg>
  );
});
