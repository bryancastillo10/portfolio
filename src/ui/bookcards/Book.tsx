"use client";
import "./book.modules.css";
import { adventPro } from "@/utils/font";
import Hexagon from "@/components/ui/Hexagon";
import { useThemeContext } from "@/context/useContext";

interface BookProps {
  theme?: boolean;
  title: string;
  subtitle: string;
  frontDescription: string;
}

const BookCover = ({ title, subtitle, frontDescription, theme }: BookProps) => {
  return (
    <article className="max-w-[80%] mx-auto">
      <div className="flex flex-wrap justify-evenly items-center space-x-4">
        <Hexagon
          fillColor={`${theme ? "#001C55" : "#4ACA9B"}`}
          width="90"
          height="100"
        />
        <div className="flex flex-col items-center text-center">
          <h1 className={`book-title ${adventPro.className} tracking-wider`}>
            {title}
          </h1>
          <h1 className="book-subtitle">{subtitle}</h1>
        </div>
      </div>
      <div className="book-front-description pt-10">{frontDescription}</div>
    </article>
  );
};

// Parent Component
const Book = ({ title, subtitle, frontDescription }: BookProps) => {
  const { theme } = useThemeContext();
  return (
    <div className="book">
      <p>Project Info</p>

      <div
        className={`cover duration-500 ease-in-out ${
          theme ? "bg-accent text-primary" : "bg-primary "
        }`}
      >
        <BookCover
          theme={theme}
          title={title}
          subtitle={subtitle}
          frontDescription={frontDescription}
        />
      </div>
    </div>
  );
};

export default Book;
