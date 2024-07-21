import React, { Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface PropsType {
  children: React.ReactNode;
}
const MainLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <Suspense>
      <Header />
      {children}
      <Footer />
    </Suspense>
  );
};

export default MainLayout;
