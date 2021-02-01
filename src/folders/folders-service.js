const FoldersService = {
  getAllFolders(knex) {
    return knex.from('folders').select('*');
  },
  getById(knex, id) {
    return knex.select('*').from('folders').where('id', id).first();
  },
  insertFolder(knex, newFolder) {
    return knex.insert(newFolder).into('folders').returning('*').then(rows => rows[0]);
  },
  updateFolder(knex, id, updatedFolder) {
    return knex.from('folders').where({ id }).update(updatedFolder);
  },
  deleteFolder(knex, id) {
    return knex.from('folders').where({ id }).delete();
  }
};

module.exports = FoldersService;