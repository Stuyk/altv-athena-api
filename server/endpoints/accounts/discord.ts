import Database from '@stuyk/ezmongodb';
import { FastifyReply, FastifyRequest } from 'fastify';
import { Account } from '../../../../../server/interface/iAccount';
import { Collections } from '../../../../../server/interface/iDatabaseCollections';
import { getVersion } from '../../utility/version';

export async function getAccountByDiscord(req: FastifyRequest, res: FastifyReply) {
    if (!req.params['discord']) {
        res.send({ version: getVersion(), data: null });
        return;
    }

    const discord = req.params['discord'];
    const account = await Database.fetchData<Account>('discord', discord, Collections.Accounts);
    if (!account) {
        res.send({ version: getVersion(), data: null });
        return;
    }

    // Remove Sensitive Data
    delete account.quickToken;
    delete account.quickTokenExpiration;
    delete account.email;
    delete account.ips;
    delete account.hardware;

    res.send({ version: getVersion(), data: account });
}
