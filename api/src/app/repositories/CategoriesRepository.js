const db = require('../../database');

class CategoriesRepository {
  async findAll() {
    const rows = db.query('SELECT * FROM categories ORDER BY name');
    return rows;
  }

  async create({ name }) {
    const [row] = await db.query(
      `
      INSERT INTO categories(name)
      VALUES ($1)
      RETURNING *
      `,
      [name],
    );

    return row;
  }

  async update(id, { name }) {
    const [row] = await db.query(
      `
        UPDATE categories
        SET name = $2
        WHERE id = $1
        RETURNING *
      `,
      [id, name],
    );
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM categories WHERE id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new CategoriesRepository();
