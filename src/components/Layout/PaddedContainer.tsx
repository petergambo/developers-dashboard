import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PaddedContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-2 md:px-16 flex flex-col gap-5 py-4">
      {children}
    </div>
  );
};

export default PaddedContainer;
