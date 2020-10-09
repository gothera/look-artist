import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const RatingStar = React.memo<SVGProps>((props) => {
  return (
    <Svg
      width={props.width || 14}
      height={props.height || 14}
      viewBox="0 0 8 12"
    >
      <Path
        d="M4.032,7.545l-.671,2.9a.45.45,0,0,0,.688.476L6.5,9.291l2.45,1.634a.45.45,0,0,0,.683-.5L8.81,7.547,10.851,5.71a.45.45,0,0,0-.266-.783l-2.566-.2L6.91,2.265a.45.45,0,0,0-.82,0L4.98,4.723l-2.566.2a.45.45,0,0,0-.279.771ZM5.316,5.6a.449.449,0,0,0,.374-.264L6.5,3.544l.81,1.791a.449.449,0,0,0,.374.264l1.787.142L8,7.065a.451.451,0,0,0-.132.458L8.432,9.5,6.75,8.376a.448.448,0,0,0-.5,0L4.495,9.547,4.967,7.5a.45.45,0,0,0-.124-.423L3.476,5.745Z"
        transform="translate(-2 -2)"
        fill={props.fill || '#34353e'}
      />
    </Svg>
  );
});
