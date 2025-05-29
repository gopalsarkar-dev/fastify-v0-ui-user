import UserProfileFrom from "@/components/user/UserProfileFrom";

const page = () => {
  return (
    <>
      <div className="grid h-screen w-full place-items-center">
        <UserProfileFrom />
        {/* <div className="text-xl font-bold">UserAccount</div> */}
      </div>
    </>
  );
};

export default page;
