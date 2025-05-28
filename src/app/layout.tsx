import Nave from "@/components/Header/Nave";
import "./globals.css";

type RootLayoutProviderProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProviderProps) => {
  return (
    <html lang="en">
      <body>
        <Nave />
        <main className="mx-auto flex max-w-5xl px-6">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
