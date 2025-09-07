import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  @keyframes square-animation {
   0% {
    left: 0;
    top: 0;
   }

   10.5% {
    left: 0;
    top: 0;
   }

   12.5% {
    left: 53px;
    top: 0;
   }

   23% {
    left: 53px;
    top: 0;
   }

   25% {
    left: 106px;
    top: 0;
   }

   35.5% {
    left: 106px;
    top: 0;
   }

   37.5% {
    left: 106px;
    top: 53px;
   }

   48% {
    left: 106px;
    top: 53px;
   }

   50% {
    left: 53px;
    top: 53px;
   }

   60.5% {
    left: 53px;
    top: 53px;
   }

   62.5% {
    left: 53px;
    top: 106px;
   }

   73% {
    left: 53px;
    top: 106px;
   }

   75% {
    left: 0;
    top: 106px;
   }

   85.5% {
    left: 0;
    top: 106px;
   }

   87.5% {
    left: 0;
    top: 53px;
   }

   98% {
    left: 0;
    top: 53px;
   }

   100% {
    left: 0;
    top: 0;
   }
  }

  .loader {
   position: relative;
   width: 160px;
   height: 160px;
   transform: rotate(45deg);
  }

  .loader-square {
   position: absolute;
   top: 0;
   left: 0;
   width: 45px;
   height: 45px;
   margin: 4px;
   border-radius: 0px;
   background: white;
   background-size: cover;
   background-position: center;
   background-attachment: fixed;
   animation: square-animation 10s ease-in-out infinite both;
  }

  .loader-square:nth-of-type(0) {
   animation-delay: 0s;
  }

  .loader-square:nth-of-type(1) {
   animation-delay: -1.4285714286s;
  }

  .loader-square:nth-of-type(2) {
   animation-delay: -2.8571428571s;
  }

  .loader-square:nth-of-type(3) {
   animation-delay: -4.2857142857s;
  }

  .loader-square:nth-of-type(4) {
   animation-delay: -5.7142857143s;
  }

  .loader-square:nth-of-type(5) {
   animation-delay: -7.1428571429s;
  }

  .loader-square:nth-of-type(6) {
   animation-delay: -8.5714285714s;
  }

  .loader-square:nth-of-type(7) {
   animation-delay: -10s;
  }
`;

export default Loader;
