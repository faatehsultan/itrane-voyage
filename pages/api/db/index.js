import mysql from "serverless-mysql"
const db = mysql({
  config: {
    host: "busapp.ceejwqscaujr.eu-west-3.rds.amazonaws.com",
    port: "3306",
    user: "",
    password: "",
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