import Footer from "@/components/layouts/footer/footer";
import Navbar from "@/components/layouts/navbar/navbar";


function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#F4F4F0]">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
