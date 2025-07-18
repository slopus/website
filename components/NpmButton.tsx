import React from 'react';

interface NpmButtonProps {
  href: string;
}

const NpmButton: React.FC<NpmButtonProps> = ({ href }) => (
  <a className="flex justify-center py-1 mr-2" href={href} target="_blank" rel="noopener noreferrer">
    <svg
      className="w-[200px] h-[70px] mt-2"
      viewBox="0 0 241 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_6146_1982)">
        <rect x="9" y="9" width="225" height="63" fill="white"/>
        <rect x="76" y="9" width="36" height="76" fill="white"/>
        <path d="M0.1875 -0.292969H240.812V79.9297H120.5V93.3016H67.0297V79.9211H0.1875V-0.292969ZM13.5594 66.5578H40.2945V26.4422H53.6578V66.5492H67.0297V13.0789H13.5594V66.5578ZM80.4016 13.0789V79.9297H107.137V66.5578H133.872V13.0789H80.4016ZM107.137 26.4508H120.5V53.1945H107.128L107.137 26.4508ZM147.244 13.0789V66.5578H173.979V26.4422H187.351V66.5492H200.723V26.4422H214.095V66.5492H227.466V13.0789H147.244Z" fill="#CB3837"/>
      </g>
      <defs>
        <clipPath id="clip0_6146_1982">
          <rect width="241" height="93" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </a>
);

export default NpmButton; 