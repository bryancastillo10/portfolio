import { TypeAnimation } from "react-type-animation";

interface TextAnimationProps{
    text1:string;
    text2:string;
    text3?:string;
    text4?:string;
}

const TextAnimation = ({text1,text2,text3,text4}:TextAnimationProps) => {
  return (
    <TypeAnimation
      sequence={[
        text1,
        1000,
        text2,
        1000,
        text3!,
        1000,
        text4!,
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
