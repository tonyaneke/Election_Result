import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getPolls() {
  try {
    const [pollsResult] = await pool.query(
      "SELECT * FROM announced_pu_results"
    );

    return pollsResult;
  } catch (error) {
    console.log(error);
  }
}

export async function getPoll(id) {
  try {
    const [polls] = await pool.query(
      `
     SELECT * FROM 
     announced_pu_results
      WHERE polling_unit_uniqueid = ?
     `,
      [id]
    );
    return polls;
  } catch (err) {
    console.log(err);
  }
}

export async function getLgaData() {
  try {
    const [lgas] = await pool.query("SELECT * FROM lga");

    return lgas;
  } catch (error) {
    console.log(error);
  }
}

export async function getLga(name) {
  try {
    const [lga] = await pool.query(
      `
     SELECT * FROM 
     lga
      WHERE polling_unit_uniqueid = ?
     `,
      [name]
    );
    return lga;
  } catch (err) {
    console.log(err);
  }
}

export async function getPollingUnits(lgaId) {
  try {
    const [lga_polling_units] = await pool.query(
      `
      SELECT * FROM polling_unit WHERE lga_id = ?
     `,
      [lgaId]
    );
    return lga_polling_units;
  } catch (err) {
    console.log(err);
  }
}
export async function getPolling() {
  try {
    const [lga_polling_units] = await pool.query(
      `
      SELECT * FROM polling_unit
     `
    );
    return lga_polling_units;
  } catch (err) {
    console.log(err);
  }
}

// async function createResult(result) {
//    const result = await pool.query(`
//    INSERT INTO `)
// }
