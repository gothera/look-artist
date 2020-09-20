import React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';
import { SVGProps } from '../index';

export const CalendarDaysIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg height={21} viewBox="0 0 21 21" width={21} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path
          d="M4.5 2.5h12a2 2 0 012 2v12a2 2 0 01-2 2h-12a2 2 0 01-2-2v-12a2 2 0 012-2zM2.5 6.5h16"
          stroke="#2a2e3b"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <G fill="#2a2e3b" transform="translate(2 2)">
          <Circle cx={8.5} cy={8.5} r={1} />
          <Circle cx={4.5} cy={8.5} r={1} />
          <Circle cx={4.5} cy={12.5} r={1} />
        </G>
      </G>
    </Svg>
  );
});
