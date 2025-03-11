import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <Header />
      <main className="col-span-12">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
