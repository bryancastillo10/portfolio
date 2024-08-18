

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <div className="flex justify-center pt-4">
        <h1 className="">Portfolio Version 2</h1>
      </div>
      <div className="mt-8 max-w-[80%] mx-auto space-y-10">

        <div className="mb-8">
          <h1 className="font-semibold">Home Page:</h1>
          <div className="text-center text-2xl tracking-wide">Hero Section</div>
          <div className="text-center text-2xl tracking-wide">Projects Section</div>
        </div>

        <div className="mb-8">
          <h1 className="font-semibold">About Page:</h1>
          <div className="text-center text-2xl tracking-wide">About Section</div>
          <div className="text-center text-2xl tracking-wide">Tech Stack Section</div>
          <div className="text-center text-2xl tracking-wide">Work Experience & Education</div>
        </div>

        <div className="mb-8">
          <h1 className="font-semibold">Projects Page:</h1>
          <div className="text-center text-2xl tracking-wide">Projects Info</div>
        </div>

        <div className="pb-10">
          <h1 className="font-semibold">Contact Page:</h1>
          <div className="text-center text-2xl tracking-wide">Contact Form</div>
        </div>
      
      </div>
    </main>
  );
}
