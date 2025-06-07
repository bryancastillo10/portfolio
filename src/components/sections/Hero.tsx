"use client";

import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

// interface GitHubProfile {
//   name: string;
//   login: string;
//   avatar_url: string;
//   bio: string;
//   location?: string;
//   public_repos: number;
//   followers: number;
//   following: number;
// }

const Hero = () => {

  return (
	<section className="grid grid-cols-1 lg:grid-cols-2  w-full">
	  <div className="w-full ">
		<Image
			src=""
			alt="avatar"
			width={200}
			height={200}
			className="rounded-full  shadow-lg m-4"
			loading="lazy"
		/>
	 </div>
	  <div className="flex flex-col items-center  justify-center">
		<div className="p-4 h-[50vh] w-md xl:w-lg bg-[url('/images/emptymac.png')] bg-cover border  
			flex flex-col rounded-md shadow-lg">
		    <p className="mt-6 text-lg">Hello, I'm Bryan</p>
			<h1 className="font-mono text-2xl">
				<Typewriter
				words={["Full Stack Developer", "Environmental Engineer", "Biological Engineer","Chemist"]}
				loop={0}
				cursor
				cursorStyle="|"
				typeSpeed={70}
				deleteSpeed={50}
				delaySpeed={1500}
				/>
			</h1>
			<p className="text-gray text-base">Software developer integrating my knowledge in natural sciences...</p>
		</div>
	  </div>
	</section>
  )
}

export default Hero;
