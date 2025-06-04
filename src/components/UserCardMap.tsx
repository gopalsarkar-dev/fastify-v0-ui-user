import allUsers from "./controllers/hooks/allUsers";
import DisplayUsers from "./DisplayUsers";

const UserCardMap = async () => {
  const { data } = await allUsers();

  if (data === null) {
    return;
  }

  if (data.length === 0) {
    return (
      <div className="grid h-screen w-full place-items-center">
        <div className="text-center text-3xl font-bold">
          No User Card Avableble.
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-3 gap-6 pt-24 pb-8">
        {data?.map((item, index) => {
          return <DisplayUsers key={index} uInfo={item} />;
        })}
      </div>
    </>
  );
};

export default UserCardMap;
