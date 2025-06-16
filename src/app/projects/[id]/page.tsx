interface MoreProjectParams {
  params: { id: string };
}

const MoreProjectDetails = async ({ params }: MoreProjectParams) => {
  const { id } = await params;
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen">
      <p>You are currently at</p>
      <h1 className="text-2xl">{id}</h1>
    </div>
  );
};

export default MoreProjectDetails;
