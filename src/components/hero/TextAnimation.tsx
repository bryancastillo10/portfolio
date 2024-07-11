import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Software Developer",
        1000,
        "Biological Engineer",
        1000,
        "Envi. Engineer",
        1000,
        "Chemist",
        3000,
      ]}
      wrapper="span"
      speed={70}
      style={{
        textAlign: "center",
        fontWeight: "500",
        fontFamily: "monospace",
      }}
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
