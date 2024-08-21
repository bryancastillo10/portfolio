
interface MajorProjectProps{
    backgroundColor?:string;
    order:string;
}

const MajorProject = ({order,backgroundColor}:MajorProjectProps) => {
  return (
    <section className={`${order} ${backgroundColor} col-span-1 md:col-span-2  xl:order-none row-span-2 xl:row-span-3`}>
       <div className="p-4">
            <p className="text-2xl">Major Project</p>
       </div>
    </section>
  )
}

export default MajorProject;
