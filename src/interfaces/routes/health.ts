import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { checkDbConnection } from '../../infrastructure/database.js';

export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get('/health', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const isConnected = await checkDbConnection();
      if (isConnected) {
        reply.status(200).send({ status: 'ok', db: 'connected' });
      } else {
        reply.status(500).send({ status: 'error', db: 'disconnected' });
      }
    } catch (error) {
      fastify.log.error(error);
      reply.status(500).send({ status: 'error', message: 'Internal Server Error' });
    }
  });
}
