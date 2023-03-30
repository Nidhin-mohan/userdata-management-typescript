import React, { ReactNode } from 'react';
import  Navbar  from './Navbar';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Navbar />
      <main className="">
        {children}
      </main>
    </div>
  );
}

export default Layout;
