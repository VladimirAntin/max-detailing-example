// Generates a row of 80 tiny triangular teeth across 1440px
const N = 80;
const MICRO_TEETH_PATH = (() => {
  const pts = Array.from({length: N}, (_, i) => `L${i * 18 + 9},2 L${i * 18 + 18},15`).join(' ');
  return `M0,15 ${pts} L1440,80 L0,80 Z`;
})();

const WaveDivider = ({fill, inverted = false}: {fill: string; inverted?: boolean}) => (
  <div
    className={'absolute bottom-0 left-0 w-full overflow-hidden leading-none'}
    aria-hidden={'true'}>
    <svg
      viewBox={'0 0 1440 80'}
      preserveAspectRatio={'none'}
      className={'block h-14 w-full sm:h-16 lg:h-20'}
      fill={fill}
      style={inverted ? {transform: 'scaleX(-1)'} : undefined}>
      <path d={MICRO_TEETH_PATH} />
    </svg>
  </div>
);

export default WaveDivider;
