import Express from "express";

export class TeacherController {
    
    /**
     * Create a new Teacher
     * 
     * `POST /api/teachers/`
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    create(req: Express.Request, res: Express.Response);
    
    /**
     * Retrieve all Teacher
     * 
     * `GET /api/teachers/`
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    findAll(req: Express.Request, res: Express.Response);
    
    /**
     * Retrieve all published Teacher
     * 
     * `GET /api/teachers/finalized`
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    findAllFinalized(req: Express.Request, res: Express.Response);
    
    /**
     * Retrieve a single Teacher with id
     * 
     * `GET /api/teachers/:id`
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    findOne(req: Express.Request, res: Express.Response);
    
    /**
     * Update a Teachers with id
     * 
     * `PUT /api/teachers/:id`
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    update(req: Express.Request, res: Express.Response);
    
    /**
     * Delete a Teachers with id
     * 
     * `DELETE /api/teachers/:id`
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    deleteOne(req: Express.Request, res: Express.Response);
    
    /**
     * Delete all Teachers
     * 
     * `DELETE /api/teachers/`
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    deleteAll(req: Express.Request, res: Express.Response);
}