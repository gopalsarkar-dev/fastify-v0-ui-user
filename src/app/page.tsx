import SketetionDisplay from "@/components/skeletion/SketetionDisplay";
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
      <Suspense fallback={<SketetionDisplay />}>
        <UserCardMap />
      </Suspense>
    </>
  );
};

export default page;
