"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const UserPost = () => {
  const { push } = useRouter();
  return (
    <>
      <Button className="cursor-pointer" onClick={() => push("/createaccount")}>
        Create User
      </Button>
    </>
  );
};

export default UserPost;
