import { FastifyReply, FastifyRequest } from 'fastify';

export function pathRoot(req: FastifyRequest, res: FastifyReply) {
    res.send({ version: 1, data: null });
}
