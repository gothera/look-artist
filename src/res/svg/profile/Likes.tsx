import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const LikesIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={17.051} height={15} viewBox="0 0 17.051 15" {...props}>
      <Path
        data-name="heart-full"
        d="M15.313 1.738a4.223 4.223 0 00-5.974 0l-.814.814-.814-.814a4.224 4.224 0 00-5.974 5.974l.814.814 5.974 5.976 5.974-5.974.814-.814a4.223 4.223 0 000-5.974z"
        fill="none"
        stroke={props.stroke || '#34353e'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
});
