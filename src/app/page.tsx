import UserCardMap from "@/components/UserCardMap";
import { Metadata } from "next";
import { Suspense } from "react";

export const generateMetadata = (): Metadata => ({
  title: "User | AllUsers",
  description: "",
});

const page = () => {
  return (
    <>
      <Suspense fallback={<div className="text-2xl font-bold">Loding...</div>}>
        <UserCardMap />
      </Suspense>
    </>
  );
};

export default page;
