import Headers from "../ui/Headers";
import Book from "../../ui/bookcards/Book";
import { projectDetails } from "@/constants/projectDetails";

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
                  <Book
                    title={project.title}
                    subtitle={project.subtitle}
                    frontDescription={project.frontPageDescription}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
