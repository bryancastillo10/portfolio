"use client";

import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
	<section className="grid grid-cols-1 lg:grid-cols-2  w-full">
	  <div className="w-full h-100 bg-accent-light">Hero Image</div>
	  <div className="flex flex-col items-center  justify-center">
		<div className="p-4 h-[50vh] w-md xl:w-lg bg-[url('/images/emptymac.png')] bg-cover border  
			flex flex-col rounded-md shadow-lg">
		    <p className="mt-6 text-lg">Hello, I'm Bryan</p>
			<h1 className="font-mono text-2xl">
				<Typewriter
				words={["Full Stack Developer", "Environmental Engineer", "Chemist"]}
				loop={0}
				cursor
				cursorStyle="|"
				typeSpeed={70}
				deleteSpeed={50}
				delaySpeed={1500}
				/>

			</h1>
		</div>
	  </div>
	</section>
  )
}

export default Hero;
