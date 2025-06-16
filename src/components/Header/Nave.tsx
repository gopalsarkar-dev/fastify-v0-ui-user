import Link from "next/link";
import UserPost from "../UserPost";

const Nave = () => {
  return (
    <>
      <nav className="fixed top-0 w-full border-b backdrop-blur-sm">
        <section className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/">
            <div className="cursor-pointer text-xl font-bold">👤</div>
          </Link>
          <div className="flex items-center justify-center gap-2.5">
            <div className="text-xl font-bold">☀️</div>
            <UserPost />
          </div>
        </section>
      </nav>
    </>
  );
};

export default Nave;
