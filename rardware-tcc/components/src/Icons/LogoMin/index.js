import React from 'react';
import Svg, { G, Path, Rect, Circle } from 'react-native-svg';

export const AjudaIcon = ({ width = 40, height = 40, ...props }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Circle cx="50" cy="50" r="50" fill="white"/>
      <Path d="M50 15c19.3 0 35 13.7 35 35s-15.7 35-35 35-35-13.7-35-35 15.7-35 35-35zm-2.5 20c-4 0-6.5 2-7.5 6H32c1-7 6-11 15-11 8 0 14 4 14 12 0 4-2 7-5 9l-4 3c-2 2-3 3-3 7v1h-7v-2c0-5 2-8 5-10l5-3c2-1 3-4 3-6 0-3-2-6-6-6zm0 40c-3 0-7-2-7-8s4-8 7-8c4 0 8 2 8 8s-4 8-8 8z" fill="black"/>
    </Svg>
  );
}
