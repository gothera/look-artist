import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const ChevronLeftIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={9.915} height={16} viewBox="0 0 9.915 16" {...props}>
      <Path
        d="M8.338 0l1.577 1.615L3.268 8l6.648 6.385L8.338 16 0 8z"
        fill={props.fill || 'black'}
      />
    </Svg>
  );
});
