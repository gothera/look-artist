import React from 'react';
import Svg, { Path, G, Circle, Defs } from 'react-native-svg';
import { SVGProps } from '../index';

export const ShopCartIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none" {...props}>
      <Path
        d="M1 1h1.849a.439.439 0 01.44.354l1.483 8.732A1.755 1.755 0 006.535 11.5h7.751a1.764 1.764 0 001.741-1.316l1.232-5.222a.854.854 0 00-.871-1.022H3.979M7.272 17.5a1 1 0 100-2 1 1 0 000 2zM13.422 17.5a1 1 0 100-2 1 1 0 000 2z"
        stroke="#34353e"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
});
