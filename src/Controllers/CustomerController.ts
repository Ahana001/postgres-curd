import { Request, Response } from 'express';
import knex from '../database/connection';

export default {
    async index(req: Request, res: Response) {
        const users = await knex('customer').orderBy("id");
        const [{ count }] = await knex('customer').count();
        return res.status(200).json({ data: users, total: Number(count) });
    },
    async create(req: Request, res: Response) {
        const { name, id, city } = req.body;
        const data = {name,id,city};
        await knex('customer').insert(data);
        return res.status(201).json(data);
    },
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        await knex('customer').delete().where({id});
        return res.status(200).json({ message: 'Deleted' });
    },
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, city } = req.body;
        const data = {name, city};
        await knex('customer').update(data).where({ id });
        const updatedUser = await knex('customer').where({ id });
        return res.status(200).json(...updatedUser);
    },
};
