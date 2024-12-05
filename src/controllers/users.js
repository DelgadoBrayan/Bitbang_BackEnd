
import User from "../models/users.js";
import { verified } from "../utils/bcrypt.handle.js";
import { generateToken } from "../utils/jwt.handle.js";

import pkg from 'bcryptjs';
const { hashSync } = pkg;
// Create new product
export const createUser = async (req, res) => {
  try {
    if (req.body.password) {
        req.body.password = hashSync(req.body.password, 6);
      }
    const product = await User.create({
      nameUser: req.body.nameUser,
      gmailUser: req.body.gmailUser,
      password: req.body.password
    });
    return res.status(201).json({ product, msg: 'Usuario creado correctamente' });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Get All Product
export const getUser = async (req, res) => {
    try {
      const products = await User.find();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  };
  
// Patch product ById
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body; 

  try {
      const usuario = await User.findByIdAndUpdate(
          id,
          { data },
          { new: true, runValidators: true }
      );

      if (!product) {
          return res.status(404).json({ msg: 'usuario no encontrado' });
      }

      return res.status(200).json({ msg: 'Usuario actualizado correctamente',  usuario});
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
};

// Delete product ById
export const deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
      }
      return res.status(200).json({ msg: 'usuario eliminado correctamente' });
    } catch (error) {
      return res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  };
  
  

  export const loginUsuario = async (req, res) => {
    try {
      const checkIs = await User.findOne({gmailUser: req.body.gmailUser });
      if (!checkIs) {
        return { success: false, message: "Correo electrónico no registrado" };
      }
  
      const contrasenaHash = checkIs.password;
      const esCorrecto = await verified(req.body.password, contrasenaHash);
  
      if (!esCorrecto) {
        return res.status(404).json( { success: false, message: "Contraseña incorrecta"});
      }
  
      const token = generateToken(checkIs.gmail);

      return res.status(200).json({ usuario: checkIs, token});
    } catch (error) {
      console.error("Error en el inicio de sesion:", error);
      return res.status(500).json({ error: 'Error al iniciar sesion usuario' });
    }
  };