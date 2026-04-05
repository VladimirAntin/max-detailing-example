import {FC, memo} from 'react';

// Max Detailing — car silhouette with sparkle star
const LogoIcon: FC<Icon> = ({width = 40, height = 40, className}) => (
  <svg
    width={width}
    height={height}
    viewBox={'0 0 24 24'}
    fill={'currentColor'}
    xmlns={'http://www.w3.org/2000/svg'}
    className={className}>
    {/* Sparkle star — top right, represents shine/polishing */}
    <path d={'M19.5 1.5 20.3 3.2 22 4 20.3 4.8 19.5 6.5 18.7 4.8 17 4 18.7 3.2Z'} />
    {/* Car body — side profile */}
    <path
      d={
        'M22 14V13A1.5 1.5 0 0020.5 11.5H19.8L17.6 7.2A2 2 0 0015.8 6H8.2A2 2 0 006.4 7.2L4.2 11.5H3.5A1.5 1.5 0 002 13V14A1 1 0 003 15H21A1 1 0 0022 14Z'
      }
    />
    {/* Wheels */}
    <circle
      cx={'6.5'}
      cy={'17'}
      r={'2'}
    />
    <circle
      cx={'17.5'}
      cy={'17'}
      r={'2'}
    />
  </svg>
);

export default memo(LogoIcon);
