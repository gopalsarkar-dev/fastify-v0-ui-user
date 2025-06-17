import { UserObjType } from "@/lib/type";
import ky from "ky";

const singleUser = async (id: string) => {
  try {
    const data = await ky
      .get(`http://localhost:5000/users/singleuser/${id}`, {
        next: { tags: ["singleUser"] },
      })
      .json<UserObjType>();

    console.log(data);

    return {
      data: data,
      isError: false,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      isError: true,
    };
  }
};

export default singleUser;
