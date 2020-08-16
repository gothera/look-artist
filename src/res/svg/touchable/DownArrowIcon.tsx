import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const DownArrowIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={14} height={7.739} viewBox="0 0 14 7.739" {...props}>
      <Path
        data-name="Path 485"
        d="M0 1.231L1.413 0 7 5.189 12.587 0 14 1.231 7 7.739z"
        fill={props.fill || '#181818'}
      />
    </Svg>
  );
});
