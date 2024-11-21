const pool = require("./bd");
const md5 = require("md5");

async function getUserByUsernameAndPassword(user, password) {
  try {
    const query =
      "select * from usuarios where usuario = ? and password = ? limit 1";
    const rows = await pool.query(query, [user, md5(password)]);
    console.log(rows);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { getUserByUsernameAndPassword };
