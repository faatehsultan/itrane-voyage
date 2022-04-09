import mysql from "serverless-mysql"
const db = mysql({
  config: {
    host: process.env.DB_HOST,
    port: "3306",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "bus_app"
  }
})

export const queryDB = async (sql) => {
  try {
    let dbRes = await db.query(sql);
    await db.end();
    return dbRes;
  }
  catch (error){
    console.log(error)
    return null;
  }
}