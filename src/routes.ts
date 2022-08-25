import { Router } from 'express';
import CustomerController from './controllers/CustomerController';

const routes = Router();

routes.get('/customer', CustomerController.index);
routes.post('/customer', CustomerController.create);
routes.delete('/customer/:id', CustomerController.delete);
routes.post('/customer/:id', CustomerController.update);

export default routes;
/** GET - All - Customer
 * @openapi
 *"/customer":
 *  get:
 *    description: "Get All Customers in System"
 *    tags:
 *    - Customers
 *    responses:
 *      '200':
 *        description: Got Customer details
 *      '500':
 *        description: " Internal Server Error "
 */

/** POST
 * @openapi
 *"/customer":
 *  post:
 *    description: "create new cutomer"
 *    tags:
 *    - Customers
 *    requestBody:
 *      content:
 *        application/json:
 *          name: body
 *          in: body
 *          description: Send post Data
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
 *                minLength: 36
 *                maxLength: 36
 *                example: "256cfc35-8729-4097-9104-05d26843de43"
 *              name:
 *                type: string
 *                example : "Ankita"
 *              city:
 *                type: string
 *                example : "Bhavnagar"
 *               
 *    responses:
 *      '201':
 *        description: Got Vendor details
 *      '500':
 *        description: " Internal Server Error "
 */

/** POST
 * @openapi
 *"/customer/{id}":
 *  post:
 *    description: "update customer"
 *    tags:
 *    - Customers
 *    parameters:
 *    - in: path
 *      name: id
 *      description: id
 *      type: string
 *      pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
 *      minLength: 36
 *      maxLength: 36
 *    requestBody:
 *      content:
 *        application/json:
 *          name: body
 *          in: body
 *          description: Send post Data
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example : "Ankita"
 *              city:
 *                type: string
 *                example : "Bhavnagar"
 *               
 *    responses:
 *      '200':
 *        description: update customer details
 *      '500':
 *        description: " Internal Server Error "
 */

/** DELETE
 * @openapi
 *"/customer/{id}":
 *  delete:
 *    description: "delete customer by id"
 *    tags:
 *    - Customers
 *    parameters:
 *    - in: path
 *      name: id
 *      description: id
 *      type: string
 *      pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
 *      minLength: 36
 *      maxLength: 36
 *    responses:
 *      '200':
 *        description: dalete customer details
 *      '500':
 *        description: " Internal Server Error "
 */