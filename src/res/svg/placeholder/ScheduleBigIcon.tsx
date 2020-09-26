import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { SVGProps } from '../index';

export const ScheduleBigIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={209} height={120} viewBox="0 0 209 151" {...props}>
      <G data-name="Group 527" fill="#e6e6e6">
        <Path
          data-name="Subtraction 8"
          d="M150.249 143H27a26.978 26.978 0 01-27-27V27A26.978 26.978 0 0127 0h146a26.977 26.977 0 0127 27v66.248a35.5 35.5 0 00-49.753 49.75zM113 97a3 3 0 100 6h18a3 3 0 100-6zm-44 0a3 3 0 000 6h18a3 3 0 100-6zm-44 0a3 3 0 000 6h18a3 3 0 100-6zm132-29a3 3 0 100 6h18a3 3 0 100-6zm-44 0a3 3 0 100 6h18a3 3 0 100-6zm-44 0a3 3 0 000 6h18a3 3 0 100-6zm-44 0a3 3 0 000 6h18a3 3 0 100-6zm132-29a3 3 0 100 6h18a3 3 0 000-6zm-44 0a3 3 0 100 6h18a3 3 0 000-6zm-44 0a3 3 0 000 6h18a3 3 0 100-6zm-44 0a3 3 0 000 6h18a3 3 0 100-6z"
        />
        <Path
          data-name="Subtraction 6"
          d="M179.5 151a29.406 29.406 0 1111.483-2.318A29.323 29.323 0 01179.5 151zm0-49a1.5 1.5 0 00-1.5 1.5v17a1.5 1.5 0 001.292 1.486 1.458 1.458 0 00.2.153l8.48 5.3a1.5 1.5 0 101.59-2.544l-8.48-5.3a1.227 1.227 0 00-.086-.051V103.5a1.5 1.5 0 00-1.496-1.5z"
        />
      </G>
    </Svg>
  );
});
