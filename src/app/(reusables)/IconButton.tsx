import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface IconButtonProps {
  icon: LucideIcon;
  link: string | (() => void);
  tooltip:string;
}

const buttonVariants = {
  initial: { scale: 1, y: 0 },
  hover: { scale: 1.2, y: "10%" },
};

const buttonTransition = {
  type: "spring",
  stiffness: 500,
  damping: 15,
};

const IconButton = ({ icon: Icon, link,tooltip}: IconButtonProps) => {
  const isExternalLink = typeof link === "string";

  const handleClick = () => {
    if (typeof link === "function") {
      link();
    }
  };

  const ButtonContent = (
    <motion.p
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      transition={buttonTransition}
      className="relative inline-block group"
    >
      <Icon />
      <p className="tooltip group-hover:scale-100">
        {tooltip}
      </p>
    </motion.p>
  );

  return isExternalLink ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {ButtonContent}
    </a>
  ) : (
    <button onClick={handleClick}>{ButtonContent}</button>
  );
};

export default IconButton;