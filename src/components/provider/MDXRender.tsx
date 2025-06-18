'use client';

import * as runtime from 'react/jsx-runtime';

interface MDXRenderProps {
  code: string;
}

const MDXRender = ({ code }: MDXRenderProps) => {
  const MDXContent = new Function(code)(runtime).default;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXContent />
    </div>
  );
};

export default MDXRender;
