import { UserObjType, UserType } from "@/lib/type";
import ky, { HTTPError } from "ky";

const createNewUser = async (uInfo: UserType) => {
  console.log(uInfo);

  try {
    const req = await ky
      .get(`http://localhost:5000/users/allusers`, {
        next: { tags: ["createNewUser"] },
      })
      .json<UserObjType[]>();

    const existingUser = req.find((email) => email.email === uInfo.email);

    if (existingUser) {
      return {
        success: false,
        message: `${uInfo.email} already exists `,
      };
    } else {
      await ky.post(`http://localhost:5000/users/createuser`, {
        next: { tags: ["createNewUser"] },
        json: uInfo,
      });

      return {
        success: true,
        message: "User Successfully created",
      };
    }
  } catch (error) {
    if (error instanceof HTTPError) {
      const resMess = await error.request.json<{
        error: { message: string }[];
      }>();
      return {
        success: false,
        message: resMess.error[0].message,
      };
    } else {
      return {
        success: false,
        message: "Network Error. Please check your connection.",
      };
    }
  }
};

export default createNewUser;
