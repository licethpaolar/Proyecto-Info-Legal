import {connect} from "../database"

export const  getProcesos = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.execute("SELECT * FROM procesos");
    res.json(rows);
};

export const  getProceso = async (req, res) =>{
    const connection = await connect ();
    const rows = await connection.execute("SELECT * FROM proceso WHERE id = ?", [req.params.id]);
    res.json(rows[0][0])
 };

export const  getProcesosCount =  async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.execute("SELECT COUNT(*) FROM proceso");
    res.json(rows[0]["COUNT(*)"])
};

export const saveProceso = async (req, res) => {
    try{
        const connection = await connect();
        const [results] = await connection.execute("INSERT INTO proceso (proceso, partes, descripcion) VALUES (?, ?, ?)", [
            req.body.proceso,
            req.body.partes,
            req.body.descripcion
    ]);

        const newUser = {
            id: results.insertId,
            ...req.body,
      };
      res.json(newUser);
    } catch (error) {
      console.error(error);
    }
  };
  

export const deleteProceso = async (req, res) => {
    const connection = await connect ();
    const result = await connection.execute("DELETE FROM proceso WHERE id =?", [req.params.id,
    ]);
    console.log(result);
    
    res.sendStatus(204);
 };

export const updateProceso = async (req, res) => {
    const conection = await connect ();
    await conection.query("UPDATE proceso SET ? WHERE id = ?", [
        req.body,
        req.params.id
    ]);
    res.sendStatus(204);
}