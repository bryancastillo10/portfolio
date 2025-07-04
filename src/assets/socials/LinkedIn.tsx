import { SvgIconProps } from '@/interfaces/svgIcon';

const LinkedIn = ({ fill = '#fff8f1', size = 50 }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      xmlSpace="preserve"
    >
      <g
        style={{
          stroke: 'none',
          strokeWidth: 0,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'none',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 c 24.853 0 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 31.187 69.956 H 20.822 V 36.617 h 10.365 V 69.956 z M 26.005 32.062 c -3.32 0 -6.005 -2.692 -6.005 -6.007 c 0 -3.318 2.685 -6.011 6.005 -6.011 c 3.313 0 6.005 2.692 6.005 6.011 C 32.01 29.37 29.317 32.062 26.005 32.062 z M 70 69.956 H 59.643 V 53.743 c 0 -3.867 -0.067 -8.84 -5.385 -8.84 c -5.392 0 -6.215 4.215 -6.215 8.562 v 16.491 H 37.686 V 36.617 h 9.939 v 4.559 h 0.141 c 1.383 -2.622 4.764 -5.385 9.804 -5.385 C 68.063 35.791 70 42.694 70 51.671 V 69.956 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: fill,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default LinkedIn;
