const pool = require("./bd");

async function getPaquetes() {
  const query = "select * from paquetes";
  const rows = await pool.query(query);
  return rows;
}

async function insertPaquete(obj) {
  try {
    const query = "insert into paquetes set ?";
    const rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deletePaqueteById(id) {
  const query = "delete from paquetes where id = ?";
  const rows = await pool.query(query, [id]);
  return rows;
}

async function getPaqueteById(id) {
  const query = "select * from paquetes where id = ?";
  const rows = await pool.query(query, [id]);
  return rows[0];
}

async function editarNovedadById(obj, id) {
  try {
    const query = "update paquetes set ? where id=?";
    const rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getPaquetes,
  insertPaquete,
  deletePaqueteById,
  getPaqueteById,
  editarNovedadById,
};
