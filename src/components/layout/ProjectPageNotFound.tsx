'use client';

import Link from 'next/link';

const ProjectPageNotFound = () => (
  <div className="max-w-5xl shadow-md mx-auto flex flex-col bg-background">
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl">🚧 Project Repository Not Found...</h1>
      <Link className="hover:underline" href="/">
        Go Back To Home to Reload
      </Link>
    </div>
  </div>
);

export default ProjectPageNotFound;
