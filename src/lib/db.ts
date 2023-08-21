// db.ts
import mysql from "serverless-mysql";

type QueryProp = {
  query: string;
  values: any;
};

const db = mysql({
  config: {
    host:
      process.env.NODE_ENV === "production"
        ? process.env.MYSQL_HOST_PROD
        : process.env.MYSQL_HOST_DEV,
    port: Number(process.env.MYSQL_PORT ?? 3000),
    database: process.env.MYSQL_DATABASE,
    user:
      process.env.NODE_ENV === "production"
        ? process.env.MYSQL_USER_PROD
        : process.env.MYSQL_USER_DEV,
    password:
      process.env.NODE_ENV === "production"
        ? process.env.MYSQL_PASSWORD_PROD
        : process.env.MYSQL_PASSWORD_DEV,
    ssl: {
      rejectUnauthorized: true,
    },
  },
});

export default async function excuteQuery({ query, values }: QueryProp) {
  console.log("ENV: ", process.env.NODE_ENV);
  try {
    const results = await db.query(query, values);
    await db.end();
    console.log("managed to query DB");
    console.log("Query: ", query);
    console.log("Values: ", values);
    return results;
  } catch (error) {
    console.log("failed to query DB. error: ", error);
    return { error };
  }
}
