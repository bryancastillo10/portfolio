import Image from "next/image"
import TextHeader from "@/components/common/TextHeader"

const Projects = async () => {

  return (
	<section className="w-full">
		<TextHeader title="Personal Projects"/>

		<div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-4 py-3">
			<div className="w-md xl:w-lg min-h-80 border grid grid-cols-2 p-2">
				<div className="border">
				<Image
					src="/projects/WaterAnalytics.png"
					alt="proj-1-mockup"
					width={320}
					height={250}
				/>
					<p>Typescript</p>
					<p>3 stars</p>
					<p>Repo Link</p>
					<p>Live</p>
				</div>
				<div className="px-2">
					<h1 className="font-semibold text-xl font-mono uppercase">Water-Analytics</h1>
					<p className="text-sm">A Dashboard Analytics Web App for Water Quality Monitoring Built with MERN-Typescript</p>
					<p>Created: 2024-11-14</p>
				</div>
			</div>
			<div className="w-md xl:w-lg min-h-80 border">Project 2</div>
			<div className="w-md xl:w-lg min-h-80 border">Project 3</div>
			<div className="w-md xl:w-lg min-h-80 border">Project 4</div>
		</div>
	</section>
  )
}

export default Projects
