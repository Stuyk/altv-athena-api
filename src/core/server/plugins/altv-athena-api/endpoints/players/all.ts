import * as alt from 'alt-server';
import { FastifyReply, FastifyRequest } from 'fastify';
import { IResponse } from '../../interface/IResponse';
import { getVersion } from '../../utility/version';

export function getAllPlayers(req: FastifyRequest, res: FastifyReply) {
    const players = alt.Player.all.map((p) => {
        return { id: p.id, pos: p.pos, rot: p.rot, ...p };
    });

    const response: IResponse<Partial<alt.Player>[]> = {
        version: getVersion(),
        data: players,
    };

    res.send(response);
}
