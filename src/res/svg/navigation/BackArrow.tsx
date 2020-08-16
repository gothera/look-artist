import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

// TODO CHANGE

export const BackArrow = React.memo<SVGProps>((props) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M16 7.5a1 1 0 00-1-1H5l4.217-3.795a1 1 0 00.038-1.45L8.707.707a1 1 0 00-1.414 0L.707 7.293a1 1 0 000 1.414l6.586 6.586a1 1 0 001.414 0l.548-.548a1 1 0 00-.038-1.45L5 9.5h10a1 1 0 001-1v-1z"
        fill={props.fill || '#424761'}
      />
    </Svg>
  );
});
