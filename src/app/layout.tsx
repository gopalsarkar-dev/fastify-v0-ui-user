import Nave from "@/components/Header/Nave";
import "./globals.css";
import ReactToastify from "@/components/ReactToastify";

type RootLayoutProviderProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProviderProps) => {
  return (
    <html lang="en">
      <body>
        <Nave />
        <ReactToastify />
        <main className="container mx-auto max-w-6xl px-6 py-4">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
