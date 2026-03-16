import Fastify from 'fastify';
import fastifyJwt from '@fastify/jwt';
import dotenv from 'dotenv';
import { checkDbConnection } from './infrastructure/database.js';
import healthRoute from './interfaces/routes/health.js';
import authRoutes from './interfaces/routes/auth.routes.js';
import fastifyJwt from '@fastify/jwt';


dotenv.config();

const server = Fastify({
  logger: true,
});

// Register JWT
server.register(fastifyJwt, {
  secret: process.env.JWT_SECRET || 'fallback_secret_not_safe'
});

// Registro del plugin de seguridad
server.register(fastifyJwt, {
  secret: process.env.JWT_SECRET || 'clave-de-emergencia-por-si-falla-el-env'
});

// Register routes
server.register(healthRoute);
server.register(authRoutes, { prefix: '/auth' });

const start = async () => {
  try {
    const dbConnected = await checkDbConnection();
    if (!dbConnected) {
      server.log.error('Database connection failed. Server not starting.');
      process.exit(1);
    }
    
    server.log.info('Database connection successful.');
    await server.listen({ port: 3000 });
    
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
