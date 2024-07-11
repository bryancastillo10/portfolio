import Headers from "../ui/Headers";
import ProjectCard from "@/ui/bookcards/ProjectCard";
import { projectDetails } from "@/constants/projectDetails";
import Button from "../ui/Button";

const Project = () => {
  return (
    <section className="max-w-[80%] mx-auto ">
      <div className="mt-40 md:mt-10">
        <div className="py-4">
          <div className="flex flex-col md:my-28">
            <Headers>Top Projects</Headers>

            <div className="my-20 grid grid-cols-1 lg:grid-cols-2 gap-20 mx-auto lg:mx-0 lg:place-content-between">
              {projectDetails.map((project) => (
                <div key={project.id}>
                  <ProjectCard
                    title={project.title}
                    subtitle={project.subtitle}
                    frontDescription={project.frontPageDescription}
                    backDescription={project.backPageDescription}
                    image={project.image}
                    language={project.language}
                    techStack={project.techStack}
                    repository={project.repository}
                  />
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                type="button"
                variant="primary"
                action={() => {}}
                actionLabel="More Project Info"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
