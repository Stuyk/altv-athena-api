import Database from '@stuyk/ezmongodb';
import { FastifyReply, FastifyRequest } from 'fastify';
import { Account } from '../../../../server/interface/Account';
import { Collections } from '../../../../server/interface/DatabaseCollections';
import { Character } from '../../../../shared/interfaces/Character';
import { getVersion } from '../../utility/version';

export async function getByDiscord(req: FastifyRequest, res: FastifyReply) {
    if (!req.params['discord']) {
        res.send({ version: getVersion(), data: null });
        return;
    }

    const discord = req.params['discord'];
    const account = await Database.fetchData<Account>('discord', discord, Collections.Accounts);
    if (!account) {
        res.send({ version: getVersion(), data: [] });
        return;
    }

    const characters = await Database.fetchAllByField<Character>('account_id', account._id, Collections.Characters);
    if (!characters || characters.length <= 0) {
        res.send({ version: getVersion(), data: [] });
        return;
    }

    res.send({ version: getVersion(), data: characters });
}
