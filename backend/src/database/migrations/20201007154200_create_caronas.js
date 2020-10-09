
exports.up = async function(knex) {
    return knex.schema.createTable('carona', function(table){
        table.increments();
        table.string('cidade');
        table.string('origem');
        table.string('destino');
        table.text('comentario','longtext');
        table.string('data');
        table.string('user_id');
        table.foreign('user_id').references('id').inTable('users');
        table.integer('tipo');
    });
  };
  
exports.down = async function(knex) {
   return knex.schema.dropTable('carona');
};
  