const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1, tipo = 0 } = request.query;

        const [count] = await connection('carona').count();

        console.log(count);

        let caronas = null;

        if(tipo == 0){
            caronas = await connection('carona')
            .join('users', 'users.id','=','carona.user_id')
            .limit(5)
            .offset((page-1)*5)
            .select(['carona.*', 'users.name', 'users.email', 'users.wpp']);

            response.header('X-Total-Count', count['count(*)']);
        }
        else if(tipo == 1){
            caronas = await connection('carona')
            .join('users', 'users.id','=','carona.user_id')
            .where('carona.tipo', '=' , '1')
            .limit(5)
            .offset((page-1)*5)
            .select(['carona.*', 'users.name', 'users.email', 'users.wpp']);

            response.header('X-Total-Count', count['count(*)']);
        }
        else if(tipo == 2){
            caronas = await connection('carona')
            .join('users', 'users.id','=','carona.user_id')
            .where('carona.tipo', '=' , '2')
            .limit(5)
            .offset((page-1)*5)
            .select(['carona.*', 'users.name', 'users.email', 'users.wpp']);

            response.header('X-Total-Count', count['count(*)']);
        }
        return response.json(caronas);
    },

    async create(request, response){
        const {cidade, origem, destino, comentario, data, tipo} = request.body;
        const user_id = request.headers.authorization;

        const [id] = await connection('carona').insert({
            cidade,
            origem,
            destino,
            comentario,
            data,
            user_id,
            tipo
        });

        return response.json({id});
    },

    async delete(request, response){
        const {id} = request.params;
        const user_id = request.headers.authorization;

        const carona = await connection('carona').where('id',id).select('user_id').first();

        if(carona.user_id != user_id){
            return response.status(401).json({error:"Operation not permited!"});
        }

        await connection('carona').where('id', id).delete();

        return response.status(204).send();
    }
}