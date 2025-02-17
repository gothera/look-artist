import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const SettingsIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={20} height={18} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M10 12.454a2.454 2.454 0 100-4.908 2.454 2.454 0 000 4.908z"
        stroke={props.stroke || '#424761'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.055 12.454a1.35 1.35 0 00.27 1.49l.049.049a1.636 1.636 0 01-.531 2.67 1.637 1.637 0 01-1.785-.355l-.049-.049a1.35 1.35 0 00-1.489-.27 1.35 1.35 0 00-.818 1.235v.14a1.636 1.636 0 11-3.273 0v-.074a1.35 1.35 0 00-.884-1.235 1.35 1.35 0 00-1.489.27l-.049.049a1.635 1.635 0 01-2.315 0 1.635 1.635 0 010-2.316l.049-.049a1.35 1.35 0 00.27-1.489 1.35 1.35 0 00-1.236-.818h-.139a1.636 1.636 0 110-3.273h.074a1.35 1.35 0 001.235-.884 1.35 1.35 0 00-.27-1.489l-.049-.049a1.636 1.636 0 112.316-2.315l.049.049a1.35 1.35 0 001.489.27h.065a1.35 1.35 0 00.819-1.236v-.139a1.636 1.636 0 113.272 0v.074a1.35 1.35 0 00.819 1.235 1.35 1.35 0 001.489-.27l.049-.049a1.637 1.637 0 112.315 2.316l-.049.049a1.35 1.35 0 00-.27 1.489v.065a1.35 1.35 0 001.235.819h.14a1.636 1.636 0 010 3.272h-.074a1.35 1.35 0 00-1.235.819v0z"
        stroke={props.stroke || '#424761'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
});
