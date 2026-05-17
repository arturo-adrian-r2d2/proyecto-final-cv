import { pool } from '../database/database.js';

export const getCv = async (_req, res, next) => {
  try {
    const [personas] = await pool.query(
      'SELECT id, nombre, apellido, ciudad, foto FROM persona ORDER BY id LIMIT 1',
    );

    if (personas.length === 0) {
      return res.status(404).json({ message: 'No existe informacion del CV.' });
    }

    const persona = personas[0];
    const [formacion] = await pool.query(
      `SELECT id, titulo, institucion, anio
       FROM formacion
       WHERE persona_id = ?
       ORDER BY anio DESC, id DESC`,
      [persona.id],
    );

    return res.json({
      persona,
      formacion,
    });
  } catch (error) {
    return next(error);
  }
};
