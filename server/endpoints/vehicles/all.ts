import * as alt from 'alt-server';
import { FastifyReply, FastifyRequest } from 'fastify';
import { IResponse } from '../../interface/IResponse';
import { getVersion } from '../../utility/version';

export function getAllVehicles(req: FastifyRequest, res: FastifyReply) {
    const vehicles = alt.Vehicle.all.map((v) => {
        return { id: v.id, ...v, pos: v.pos, rot: v.rot };
    });

    const response: IResponse<Partial<alt.Vehicle>[]> = {
        version: getVersion(),
        data: vehicles,
    };

    res.send(response);
}
