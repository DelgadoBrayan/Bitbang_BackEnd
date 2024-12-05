import express from 'express'
import { createUser, deleteUser, getUser, loginUsuario, updateUser } from '../controllers/users.js';


const router = express.Router()


// Route Create New Product
router.post('/', createUser);

// Get All Product
router.get('/', getUser);


// Route Update product
router.put('/:id', updateUser);

// Route Delete Product
router.delete('/:id', deleteUser);

router.post('/login', loginUsuario)
export default router