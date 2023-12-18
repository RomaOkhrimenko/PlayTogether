import React from 'react';

const NumberBackground = ({ backgroundColor }: { backgroundColor: string }) => {
 return (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   width="37"
   height="39"
   viewBox="0 0 37 39"
   fill="none"
  >
   <g filter="url(#filter0_i_33_164)">
    <path
     d="M7.5708 2.0013C14.5707 -3.49869 27.192 3.5013 32.6314 9.0013C38.0709 14.5013 37.0708 30.0013 32.0708 35.0013C27.0708 40.0013 5.07073 41.5013 1.57065 32.5013C-1.92944 23.5013 0.570912 7.50129 7.5708 2.0013Z"
     fill={backgroundColor || 'currentColor'}
    />
   </g>
   <defs>
    <filter
     id="filter0_i_33_164"
     x="0"
     y="0"
     width="36.2876"
     height="39.008"
     filterUnits="userSpaceOnUse"
     color-interpolation-filters="sRGB"
    >
     <feFlood floodOpacity="0" result="BackgroundImageFix" />
     <feBlend
      mode="normal"
      in="SourceGraphic"
      in2="BackgroundImageFix"
      result="shape"
     />
     <feColorMatrix
      in="SourceAlpha"
      type="matrix"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      result="hardAlpha"
     />
     <feOffset />
     <feGaussianBlur stdDeviation="2" />
     <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
     <feColorMatrix
      type="matrix"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
     />
     <feBlend mode="normal" in2="shape" result="effect1_innerShadow_33_164" />
    </filter>
   </defs>
  </svg>
 );
};

export default NumberBackground;
