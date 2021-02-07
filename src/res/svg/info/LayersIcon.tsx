import React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import { SVGProps } from '../index';

export const LayersIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg
      width={props.width || 16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)" fill={props.fill || '#000'}>
        <Path d="M3 2a2 2 0 012-2h9a2 2 0 012 2v9a2 2 0 01-2 2V4a2 2 0 00-2-2H3z" />
        <Path d="M13 14V5a2 2 0 00-2-2H2a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
});
