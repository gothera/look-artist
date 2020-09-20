import React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';
import { SVGProps } from '../index';

export const TimeIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={17} height={17} viewBox="0 0 17 17" {...props}>
      <G transform="translate(-79.5 -532.5)" fill="none" stroke="#34353e">
        <Circle
          data-name="Ellipse 49"
          cx={8}
          cy={8}
          r={8}
          transform="translate(80 533)"
        />
        <Path data-name="Line 101" d="M88 541.41V535" />
        <Path
          data-name="Line 102"
          d="M87.797 541l3.789 2.7"
          strokeWidth={1.00025}
        />
      </G>
    </Svg>
  );
});
