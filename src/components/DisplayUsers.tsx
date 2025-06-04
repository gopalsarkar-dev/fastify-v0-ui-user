import { UserObjType } from "@/lib/type";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type usersProps = {
  uInfo: UserObjType;
};

const DisplayUsers = ({ uInfo }: usersProps) => {
  return (
    <>
      <Card className="w-[320px]">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            User Profile Card
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg font-bold capitalize">
            User Name : {uInfo.first_name} {uInfo.last_name}
          </div>
          <div className="text-lg font-bold"> Email : {uInfo.email}</div>
          <div className="text-lg font-bold capitalize">
            Gender : {uInfo.gender}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default DisplayUsers;
