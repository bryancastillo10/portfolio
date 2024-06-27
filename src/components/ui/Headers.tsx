import { ReactNode } from "react";
import { adventPro } from "../../utils/font";

interface HeadersProps{
    children: ReactNode;
}

const Headers = ({children}:HeadersProps) => {
  return (
    <h1 className={`font-bold text-4xl lg:text-5xl tracking-wider
    text-center md:text-left ${adventPro.className}`}>
        {children}
    </h1>
  )
}

export default Headers;
