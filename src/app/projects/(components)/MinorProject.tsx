interface MinorProjectProps{
  backgroundColor?:string;
  order:string;
}

const MinorProject = ({order,backgroundColor}:MinorProjectProps) => {
  return (
    <section className={`${order} ${backgroundColor} col-span-1 lg:order-none row-span-2`}>
        <h1 className="p-4 text-2xl">Minor Project Here</h1>
    </section>
  )
}

export default MinorProject;
