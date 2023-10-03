import { Router } from 'express';


import { createUserHandler, loginUserHandler, editUserHandler } from './user.controller';

const router = Router();

// /api/users -> POST
router.post('/', createUserHandler);
router.post('/login', loginUserHandler);
router.put('/', editUserHandler)


export default router;