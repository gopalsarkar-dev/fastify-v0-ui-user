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
        <main className="mx-auto flex max-w-5xl px-6">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
