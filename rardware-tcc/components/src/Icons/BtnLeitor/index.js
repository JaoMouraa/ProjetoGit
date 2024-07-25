// src/Icons/LeitorIcon.js
import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export const LeitorIcon = ({ width = 40, height = 40, fill = 'white', ...props }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width}
      height={height}
      {...props}
    >
      <G id="__id239_sxkk0ig51s">
        <Path d="M20 40v-12h8v12h10v-16h6l-20-18-20 18h6v16z" fill={fill} />
      </G>
    </Svg>
  );
};
