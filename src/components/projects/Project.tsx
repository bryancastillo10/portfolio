import Headers from "../ui/Headers";
import Book from "../../ui/bookcards/Book";

const Project = () => {
  return (
    <section className="">
      <div className="max-w-[80%] mx-auto">
        <div className="py-4">
          <div className="flex flex-col gap-x-24 md:my-28">
            <Headers>Top Projects</Headers>

            <div className="my-20 grid grid-cols-2 gap-20">
              <Book />
              <Book />
              <Book />
              <Book/>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;
