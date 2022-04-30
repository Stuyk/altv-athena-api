import Database from '@stuyk/ezmongodb';
import { FastifyReply, FastifyRequest } from 'fastify';
import { Collections } from '../../../../../server/interface/iDatabaseCollections';
import { Character } from '../../../../../shared/interfaces/character';
import { getVersion } from '../../utility/version';

export async function getByName(req: FastifyRequest, res: FastifyReply) {
    if (!req.params['name']) {
        res.send({ version: getVersion(), data: null });
        return;
    }

    const name = req.params['name'];
    const character = await Database.fetchData<Character>('name', name, Collections.Characters);
    res.send({ version: getVersion(), data: character });
}
