import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const GoogleBtnIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={14.889} height={15.189} viewBox="0 0 14.889 15.189" {...props}>
      <Path
        data-name="Path 594"
        d="M14.888 7.769a8.929 8.929 0 00-.131-1.543H7.594V9.15h4.1a3.515 3.515 0 01-1.518 2.308v1.9h2.447a7.417 7.417 0 002.265-5.589z"
        fill="#4285f4"
      />
      <Path
        data-name="Path 595"
        d="M7.594 15.189a7.27 7.27 0 005.034-1.833l-2.447-1.9a4.606 4.606 0 01-6.848-2.408H.808v1.956a7.6 7.6 0 006.786 4.185z"
        fill="#34a853"
      />
      <Path
        data-name="Path 596"
        d="M3.33 9.05a4.549 4.549 0 010-2.908V4.186H.808a7.6 7.6 0 000 6.82z"
        fill="#fbbc04"
      />
      <Path
        data-name="Path 597"
        d="M7.594 3.006a4.127 4.127 0 012.914 1.138l2.168-2.168A7.3 7.3 0 007.594 0 7.593 7.593 0 00.808 4.186l2.523 1.956a4.542 4.542 0 014.264-3.136z"
        fill="#ea4335"
      />
    </Svg>
  );
});
