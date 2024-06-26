import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        1000,
        "Biological Engineer",
        1000,
        "Environmental Engineer",
        1000,
        "Chemist",
        3000,
      ]}
      wrapper="span"
      speed={50}
      style={{
        textAlign: "center",
        fontWeight: "500",
        fontFamily: "monospace",
        fontSize: "20px",
      }}
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
