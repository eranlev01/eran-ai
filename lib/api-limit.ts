import { auth } from "@clerk/nextjs";
import { MAX_FREE_COUNTS } from "@/constants/page";
import excuteQuery from "@/lib/db";

interface User {
  id: number,
  user_id: string,
  count: number,
  updated_at?: Date,
  created_at: Date
}

const selectUserApiLimit = async (user_id: string) => {
   const queryRes:unknown = await excuteQuery({
     query: "SELECT * FROM user_api_limit WHERE user_id=?",
     values: [user_id],
   });
    const result = queryRes as User[];
   return result[0];
};

export const updateApiLimit = async (action: string) => {
  const { userId } = auth();
  if (!userId) return;
  const userApiLimit: any = await selectUserApiLimit(userId);

  if (userApiLimit) {
      let res = await excuteQuery({
        query: "UPDATE user_api_limit SET count = ? WHERE user_id = ?;",
        values: [userApiLimit.count + 1, userApiLimit.user_id],
      });
  } else {
      await excuteQuery({
        query: "INSERT INTO user_api_limit(user_id, count) VALUES(?,?);",
        values: [userId, 1],
      });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();
  if (!userId) {
    return false;
  }

  const userApiLimit = await selectUserApiLimit(userId);

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  const userApiLimit = await selectUserApiLimit(userId);

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.count;
};
