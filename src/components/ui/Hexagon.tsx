interface HexagonProps {
  fillColor: string;
  width: string;
  height: string;
}

const Hexagon = ({ fillColor, width, height }: HexagonProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 130 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M65 0L129.952 37.5V112.5L65 150L0.0480957 112.5V37.5L65 0Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default Hexagon;
