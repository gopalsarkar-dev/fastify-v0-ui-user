import allUsers from "./controllers/hooks/allUsers";
import DisplayUsers from "./DisplayUsers";

const UserCardMap = async () => {
  const { data } = await allUsers();
  console.log(data);

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
      <div className="grid grid-cols-1 place-items-center gap-5 pt-24 pb-6 sm:grid-cols-3">
        {data.map((item) => {
          return <DisplayUsers key={item.uId} uInfo={item} />;
        })}
      </div>
    </>
  );
};

export default UserCardMap;
