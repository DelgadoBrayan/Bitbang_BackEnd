import express from 'express';
import { createContact, deleteContact, getContact, updateContact } from '../controllers/contacts.js';
import { checkJwt } from '../middleware/session.js';


const router = express.Router();

// Route Create New Product
router.post('/', createContact);

// Get All Product
router.get('/', checkJwt, getContact);

// Route Update product
router.put('/:id', updateContact);

// Route Delete Product
router.delete('/:id', deleteContact);

export default router;
