const NotesService = {
  getAllNotes(knex) {
    return knex
      .from('noteful_notes')
      .select('*');
  },
  getById(knex, id) {
    return knex
      .select('*')
      .from('noteful_notes')
      .where('id', id)
      .first();
  },
  insertNote(knex, newNote) {
    return knex
      .insert(newNote)
      .into('noteful_notes')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  }, updateNote(knex, id, updatedNote) {
    return knex
      .from('noteful_notes')
      .where({ id })
      .update(updatedNote);
  },
  deleteNote(knex, id) {
    return knex
      .from('noteful_notes')
      .where({ id })
      .delete();
  }
 
};

module.exports = NotesService;