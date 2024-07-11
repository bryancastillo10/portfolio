import { adventPro } from "@/utils/font";
import Hexagon from "@/components/ui/Hexagon";

interface CardCoverProps {
  title: string;
  subtitle: string;
  frontDescription: string;
  theme: boolean;
}

const CardCover = ({
  title,
  subtitle,
  frontDescription,
  theme,
}: CardCoverProps) => {
  return (
    <article className="max-w-[80%] mx-auto">
      <div className="flex items-center gap-4">
        <Hexagon
          fillColor={`${theme ? "#001C55" : "#4ACA9B"}`}
          width="90"
          height="100"
        />
        <div className="flex flex-col items-center text-center text-secondary">
          <h1
            className={`text-xl font-bold min-w-fit ${adventPro.className} tracking-wider`}
          >
            {title}
          </h1>
          <h1 className="text-sm font-light min-w-fit">{subtitle}</h1>
        </div>
      </div>
      <div className="text-md text-center text-balance text-secondary mt-14">
        {frontDescription}
      </div>
    </article>
  );
};

export default CardCover;
