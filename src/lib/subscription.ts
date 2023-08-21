import { auth } from "@clerk/nextjs";
import excuteQuery from "./db";

const DAY_IN_MS = 86_400_000;

const selectUserApiLimit = async (user_id: string) => {
    const result:any = await excuteQuery({
      query: "SELECT * FROM user_subscription WHERE user_id=?",
      values: [user_id],
    });
    return result;
};

export const checkSubscription = async () => {
const { userId } = auth();
  if (!userId) {
    return false;
  }

  const userSubscription = await selectUserApiLimit(userId);

  if (!userSubscription.length) {
    return false;
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

  return !!isValid;
};