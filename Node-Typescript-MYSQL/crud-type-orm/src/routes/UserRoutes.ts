import { Router } from 'express';
const router = Router();
import { addUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/UserController';

router.get('/' , getUsers);
router.post('/' , addUser);
router.get('/:id' , getUser);
router.put('/:userId' , updateUser);
router.delete('/:userId' , deleteUser);

export default router;