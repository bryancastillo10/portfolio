
import TextHeader from "@/components/common/TextHeader"
import ProjectCard from "@/components/ui/ProjectCard"

const Projects = async () => {

  return (
	<section className="w-full">
		<TextHeader title="Personal Projects"/>

		<div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:place-items-start  gap-2 xl:gap-4 py-3">
			<ProjectCard/>
			<div className="w-md xl:w-lg min-h-80 border">Project 2</div>
			<div className="w-md xl:w-lg min-h-80 border">Project 3</div>
			<div className="w-md xl:w-lg min-h-80 border">Project 4</div>
		</div>
	</section>
  )
}

export default Projects
