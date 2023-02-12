import { FC } from 'react';
import { Footer } from '../../shared/components/footer/components/footer';
import { Header } from '../../shared/components/header/components/header';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Topbar } from '../../shared/components/topbar/topbar';
import { MainLayoutProps } from '../layout.types';

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Topbar />
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
