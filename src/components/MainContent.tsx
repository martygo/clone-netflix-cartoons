import React, { ReactNode } from 'react';

type MainContentProps = {
  children: ReactNode;
};

function MainContent({ children }: MainContentProps) {
  return <main className="App__collection">{children}</main>;
}

export default MainContent;
