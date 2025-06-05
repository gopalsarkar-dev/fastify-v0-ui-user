import UserProfileFrom from "@/components/user/UserProfileFrom";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "User | CreateAccount",
  description: "",
});

const page = () => {
  return (
    <>
      <div className="grid h-[95dvh] place-items-center">
        <UserProfileFrom />
      </div>
    </>
  );
};

export default page;
