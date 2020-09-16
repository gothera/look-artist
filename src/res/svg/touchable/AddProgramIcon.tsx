import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { SVGProps } from '../index';

export const AddProgramIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={26.763} height={26.482} viewBox="0 0 26.763 26.482" {...props}>
      <G
        data-name="Component (Add)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <Path
          data-name="Path 606"
          d="M10.957 5.318h-6.5A3.712 3.712 0 00.745 9.03v12.988a3.712 3.712 0 003.719 3.714h12.988a3.712 3.712 0 003.712-3.714v-6.5"
        />
        <Path data-name="Path 607" d="M21.305.75v9.3" />
        <Path data-name="Path 608" d="M26.013 5.402h-9.416" />
      </G>
    </Svg>
  );
});
