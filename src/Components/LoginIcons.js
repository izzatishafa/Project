// import React from 'react';
// import { FaCircle } from 'react-icons/fa';
// import { css } from '@emotion/react';

// function LoginIcons({ currentSlide }) {
//   const activeCircle = css`
//     color: #5E81FF;
//   `;

//   const inactiveCircle = css`
//     color: #C1C1C1;
//   `;

//   return (
//     <div className="flex flex-row mt-10">
//       <FaCircle css={currentSlide === 1 ? activeCircle : inactiveCircle} className="text-2xl mx-2" />
//       <FaCircle css={currentSlide === 2 ? activeCircle : inactiveCircle} className="text-2xl mx-2" />
//       <FaCircle css={currentSlide === 3 ? activeCircle : inactiveCircle} className="text-2xl mx-2" />
//     </div>
//   );
// }

// export default LoginIcons;

import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { css } from '@emotion/react';

function LoginIcons({ currentSlide }) {
  const activeColor = '#5E81FF';
  const inactiveColor = '#C1C1C1';

  const circleStyle = (isActive) => css`
    color: ${isActive ? activeColor : inactiveColor};
  `;

  return (
    <div className="flex flex-row mt-10">
      <FaCircle css={circleStyle(currentSlide === 1)} className="text-md mx-2" />
      <FaCircle css={circleStyle(currentSlide === 2)} className="text-md mx-2" />
      <FaCircle css={circleStyle(currentSlide === 3)} className="text-md mx-2" />
    </div>
  );
}

export default LoginIcons;



