import React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';
import { SVGProps } from '../index';

export const BigAvatarPlaceholder = React.memo<SVGProps>((props) => {
  return (
    <Svg width={200} height={200} viewBox="0 0 200 200" {...props}>
      <G data-name="Group 490" transform="translate(5194 -842)">
        <Circle
          data-name="Ellipse 37"
          cx={100}
          cy={100}
          r={100}
          transform="translate(-5194 842)"
          fill="#e3e3e3"
        />
        <Path
          data-name="Intersection 1"
          d="M-5184.156 987.294C-5168.72 964.713-5134.381 949-5094.5 949s74.22 15.713 89.656 38.294c-15.437 32.259-49.775 54.706-89.656 54.706s-74.22-22.447-89.656-54.706z"
          fill="#797979"
        />
        <Circle
          data-name="Ellipse 35"
          cx={33.5}
          cy={33.5}
          r={33.5}
          transform="translate(-5128 866)"
          fill="#797979"
        />
      </G>
    </Svg>
  );
});
