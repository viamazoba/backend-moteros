import { Router } from 'express';

// import { createUserHandler, verifyUserHandler, getUserHandler, editUserHandler, editUserImageHandler, loginUserHandler} from './user.controller';
import { createUserHandler, loginUserHandler, editUserHandler } from './user.controller';


// import  { isAuthenticated }  from "../../auth/auth.controller";

const router = Router();

// /api/users -> POST
router.post('/', createUserHandler);
router.post('/login', loginUserHandler);
// router.post('/verify', verifyUserHandler);
// router.post('/get-info-user', getUserHandler);
router.put('/', editUserHandler)
// router.put('/image', editUserImageHandler)

export default router;