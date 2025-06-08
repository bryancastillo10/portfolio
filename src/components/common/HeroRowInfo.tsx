import type { LucideIcon } from "lucide-react";

interface HeroRowInfoProps {
	icon: LucideIcon;
	text: string;
}

const HeroRowInfo = ({icon: Icon, text}: HeroRowInfoProps) => {
  return (
		<div className="flex items-center gap-3">
			<Icon size="36" className="border shadow-md text-gray bg-accent-light rounded-full p-2" />
			<h1 className="tracking-wide text-base">{text}</h1>
		</div>
  )
}

export default HeroRowInfo;
