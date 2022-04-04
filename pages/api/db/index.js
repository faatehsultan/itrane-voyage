import mysql from "serverless-mysql"
const db = mysql({
  config: {
    host: "localhost",
    user: "root",
    database: "bus_app"
  }
})

export const queryDB = async (sql) => {
  try {
    let dbRes = await db.query(sql);
    await db.end();
    console.log("DB End")
    return dbRes;
  }
  catch {
    console.log("DB Error")
    return null;
  }
}