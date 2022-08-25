import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'CURD CUSTOMER-API',
    },
    servers: [
      {
        url: '',
        description: 'Current',
      },
    ],
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  apis: ['./src/**/*.ts', './build/**/*.js'],
};

const swaggerDocument = swaggerJsdoc(options);

export default swaggerDocument;