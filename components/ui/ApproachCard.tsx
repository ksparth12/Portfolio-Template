import React from 'react';
import styled from 'styled-components';

interface ApproachCardProps {
  title: string;
  description: string;
  phase: string;
  cardType: number;
}

const ApproachCard: React.FC<ApproachCardProps> = ({ title, description, phase, cardType }) => {
  const getIcon = () => {
    switch(cardType) {
      case 1:
        return (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#bf72ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="#bf72ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#bf72ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 2:
        return (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7 6.3C15.3 5.7 15.3 4.8 14.7 4.2C14.1 3.6 13.2 3.6 12.6 4.2L8 8.8L5.4 6.2C4.8 5.6 3.9 5.6 3.3 6.2C2.7 6.8 2.7 7.7 3.3 8.3L7.2 12.2C7.8 12.8 8.7 12.8 9.3 12.2L14.7 6.3Z" fill="#bf72ff"/>
            <path d="M19 14V20H5V14" stroke="#bf72ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12V20" stroke="#bf72ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 3:
        return (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3V21L12 18L21 21V3L12 6L3 3Z" stroke="#bf72ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="3" fill="#bf72ff"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <StyledWrapper cardType={cardType}>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              {getIcon()}
              <strong>{phase}</strong>
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle primary"></div>
              <div className="circle secondary"></div>
              <div className="circle accent"></div>
            </div>
            <div className="front-content">
              <small className="badge">{phase}</small>
              <div className="description">
                <div className="title">
                  <p className="title">
                    <strong>{title}</strong>
                  </p>
                  <div className="phase-icon">
                    {getIcon()}
                  </div>
                </div>
                <p className="card-footer">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{cardType: number}>`
  .card {
    overflow: visible;
    width: 320px;
    height: 420px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 400ms ease-in-out;
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }

  .front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 20px;
    overflow: hidden;
  }

  /* Card Type 1 - Planning & Strategy */
  ${props => props.cardType === 1 && `
    .front, .back {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(4,7,29,1) 50%, rgba(16, 185, 129, 0.1) 100%);
    }
    
    .back::before {
      background: linear-gradient(90deg, transparent, #10b981, #10b981, #10b981, #10b981, transparent);
    }
    
    .badge {
      background-color: rgba(16, 185, 129, 0.2) !important;
      color: #10b981 !important;
      border: 1px solid rgba(16, 185, 129, 0.3);
    }
    
    .circle.primary {
      background-color: rgba(16, 185, 129, 0.6);
    }
    
    .circle.secondary {
      background-color: rgba(16, 185, 129, 0.8);
    }
    
    .circle.accent {
      background-color: #10b981;
    }
  `}

  /* Card Type 2 - Development & Progress */
  ${props => props.cardType === 2 && `
    .front, .back {
      background: linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(4,7,29,1) 50%, rgba(236, 72, 153, 0.1) 100%);
    }
    
    .back::before {
      background: linear-gradient(90deg, transparent, #ec4899, #ec4899, #ec4899, #ec4899, transparent);
    }
    
    .badge {
      background-color: rgba(236, 72, 153, 0.2) !important;
      color: #ec4899 !important;
      border: 1px solid rgba(236, 72, 153, 0.3);
    }
    
    .circle.primary {
      background-color: rgba(236, 72, 153, 0.6);
    }
    
    .circle.secondary {
      background-color: rgba(236, 72, 153, 0.8);
    }
    
    .circle.accent {
      background-color: #ec4899;
    }
  `}

  /* Card Type 3 - Launch */
  ${props => props.cardType === 3 && `
    .front, .back {
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(4,7,29,1) 50%, rgba(59, 130, 246, 0.1) 100%);
    }
    
    .back::before {
      background: linear-gradient(90deg, transparent, #3b82f6, #3b82f6, #3b82f6, #3b82f6, transparent);
    }
    
    .badge {
      background-color: rgba(59, 130, 246, 0.2) !important;
      color: #3b82f6 !important;
      border: 1px solid rgba(59, 130, 246, 0.3);
    }
    
    .circle.primary {
      background-color: rgba(59, 130, 246, 0.6);
    }
    
    .circle.secondary {
      background-color: rgba(59, 130, 246, 0.8);
    }
    
    .circle.accent {
      background-color: #3b82f6;
    }
  `}

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 200px;
    height: 160%;
    animation: rotation_spin 6000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 98%;
    height: 98%;
    background: linear-gradient(135deg, rgba(4,7,29,0.95) 0%, rgba(12,14,35,0.95) 100%);
    border-radius: 18px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    backdrop-filter: blur(10px);
  }

  .back-content strong {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_spin {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front-content .badge {
    background-color: rgba(191, 114, 255, 0.2);
    color: #bf72ff;
    padding: 10px 18px;
    border-radius: 25px;
    backdrop-filter: blur(10px);
    width: fit-content;
    font-weight: bold;
    font-size: 14px;
    border: 1px solid rgba(191, 114, 255, 0.3);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .description {
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.4);
    width: 100%;
    padding: 25px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(15px);
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .title {
    font-size: 18px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .title p {
    width: 75%;
    margin: 0;
    font-weight: 700;
  }

  .phase-icon {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .phase-icon svg {
    width: 24px;
    height: 24px;
  }

  .card-footer {
    color: #E4ECFF;
    margin-top: 15px;
    font-size: 14px;
    line-height: 1.6;
    opacity: 0.9;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    border-radius: 50%;
    position: absolute;
    filter: blur(20px);
    animation: floating 3000ms infinite ease-in-out;
  }

  .circle.primary {
    width: 120px;
    height: 120px;
    top: 10%;
    left: 10%;
  }

  .circle.secondary {
    width: 80px;
    height: 80px;
    top: 60%;
    right: 15%;
    animation-delay: -1000ms;
  }

  .circle.accent {
    width: 60px;
    height: 60px;
    top: 35%;
    right: 45%;
    animation-delay: -2000ms;
  }

  @keyframes floating {
    0%, 100% {
      transform: translateY(0px) scale(1);
    }
    50% {
      transform: translateY(-20px) scale(1.1);
    }
  }
`;

export default ApproachCard;
