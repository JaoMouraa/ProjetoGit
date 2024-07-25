import React from 'react';
import Svg, { Rect } from 'react-native-svg';

export const MenuIcon = ({ width = 48, height = 35, ...props }) => {
  return (
    <Svg 
      {...props} 
      width={width}
      height={height}
      viewBox="0 0 45 35" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <Rect y="6.4" width="30" height="4" fill="#FFFFFF"/>
      <Rect y="16" width="30" height="4" fill="#FFFFFF"/>
      <Rect y="25.6" width="30" height="4" fill="#FFFFFF"/>
    </Svg>
  );
}
