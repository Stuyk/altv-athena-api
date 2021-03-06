import Database from '@stuyk/ezmongodb';
import { FastifyReply, FastifyRequest } from 'fastify';
import { Collections } from '../../../../../server/interface/iDatabaseCollections';
import { IVehicle } from '../../../../../shared/interfaces/iVehicle';
import { getVersion } from '../../utility/version';

export async function getByCharacter(req: FastifyRequest, res: FastifyReply) {
    if (!req.params['id']) {
        res.send({ version: getVersion(), data: [] });
        return;
    }

    const character = req.params['id'];
    const vehicles = await Database.fetchAllByField<IVehicle>('owner', character, Collections.Vehicles);
    if (!vehicles || vehicles.length <= 0) {
        res.send({ version: getVersion(), data: [] });
        return;
    }

    res.send({ version: getVersion(), data: vehicles });
}
