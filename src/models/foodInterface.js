'use strict';

const pool = require('./pool');

class Interface {
  read(id) {
    if (id) {
      return pool.query('SELECT * FROM food WHERE id=$1;', [id]);
    }
    return pool.query('SELECT * FROM food;');
  }

  create(obj) {
    const sql = 'INSERT INTO food (name,quantity) VALUES ($1,$2) RETURNING *;';
    const safeValues = [obj.name, obj.quantity];
    return pool.query(sql, safeValues);
  }
  update(id, obj) {
    const sql = 'UPDATE food SET name=$2,quantity=$3 WHERE id=$4 RETURNING *;';
    const safeValues = [obj.name, obj.quantity, id];
    return pool.query(sql, safeValues);
  }
  delete(id){
    return pool.query('DELETE FROM food WHERE id=$1 RETURNING *;',[id]);
  }
}
module.exports = Interface; 