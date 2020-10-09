const connection = require('../database/connection');
const { create } = require('./caronaController');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const user = await connection('users').where('id',id).select('name').first();

        if(!user){
            return response.status(400).json({error:"No User Found Whit this ID!"});
        }

        return response.json(user);
    }
}