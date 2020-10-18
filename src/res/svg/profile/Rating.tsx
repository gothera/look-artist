import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const RatingStar = React.memo<SVGProps>((props) => {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" {...props}>
      <Path
        data-name="Star (1)"
        d="M7.5 11.5l-5 3 2-5.131L.5 5.5h5l2-5 2 5h5l-4 4 2 5z"
        fill="none"
        stroke={props.stroke || '#2a2e3b'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
});
