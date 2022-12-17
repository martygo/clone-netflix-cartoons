import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="App">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
