import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const FacebookBtnIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" {...props}>
      <Path
        data-name="Path 592"
        d="M15 7.5a7.5 7.5 0 10-8.672 7.408V9.667h-1.9V7.5h1.9V5.847a2.647 2.647 0 012.833-2.918 11.531 11.531 0 011.679.147v1.845h-.946a1.084 1.084 0 00-1.222 1.171V7.5h2.08l-.332 2.168H8.672v5.24A7.5 7.5 0 0015 7.5z"
        fill="#1977f3"
      />
      <Path
        data-name="Path 593"
        d="M10.469 9.569l.339-2.209H8.689V5.926a1.1 1.1 0 011.246-1.194h.963v-1.88a11.738 11.738 0 00-1.71-.149 2.7 2.7 0 00-2.886 2.973V7.36H4.361v2.209h1.94v5.339a7.662 7.662 0 001.193.093 7.785 7.785 0 001.194-.093V9.569z"
        fill="#fefefe"
      />
    </Svg>
  );
});
