import { UserObjType } from "@/lib/type";
import ky, { HTTPError } from "ky";

const allUsers = async () => {
  try {
    const data = await ky
      .get(`http://localhost:5000/users/allusers`, {
        next: { tags: ["allUsers"] },
      })
      .json<UserObjType[]>();

    // console.log(data);

    return {
      data: data,
      isError: false,
      error: null,
    };
  } catch (error) {
    if (error instanceof HTTPError) {
      const resMess = await error.request.json<{
        error: { message: string }[];
      }>();

      return {
        data: null,
        isError: true,
        error: resMess.error[0].message,
      };
    } else {
      return {
        data: null,
        isError: true,
        error: "Network Error. Please check your connection.",
      };
    }
  }
};

export default allUsers;
