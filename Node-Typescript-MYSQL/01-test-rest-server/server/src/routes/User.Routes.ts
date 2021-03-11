import { Router } from 'express';
import { deleteUser, getUser, getUsers, postUser, putUser } from '../Controllers/User.Controller';
const router = Router();

router.get('/', getUsers);
router.get('/:userId', getUser);
router.post('/', postUser);
router.put('/:userId', putUser);
router.delete('/:userId', deleteUser);

export default router;