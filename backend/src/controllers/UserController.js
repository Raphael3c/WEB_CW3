const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response){
        const users = await connection('users').select('*');
        return response.json(users);
    },

    async create(request, response){
        const {name, wpp} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
     
         await connection('users').insert({
            id,
            name,
            wpp
        })
     
        return response.json({id});
    }
};