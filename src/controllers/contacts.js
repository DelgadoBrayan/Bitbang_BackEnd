import Contact from "../models/contacts.js";

// Create new product
export const createContact = async (req, res) => {
  try {
    const product = await Contact.create({
      name: req.body.name,
      number: req.body.number,
      gmail: req.body.gmail
    });
    return res.status(201).json({ product, msg: 'Contacto creado correctamente' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear el Contacto' });
  }
};

// Get All Product
export const getContact = async (req, res) => {
    try {
      const products = await Contact.find();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener los Contactos' });
    }
  };
  
// Patch product ById
export const updateContact = async (req, res) => {
  const { id } = req.params;
  const data= req.body; 

  try {
      const contact = await Contact.findByIdAndUpdate(
          id,
          { name: data.name,
            number: data.number,
            gmail: data.gmail
           },
          { new: true, runValidators: true }
      );

      if (!contact) {
          return res.status(404).json({ msg: 'Contacto no encontrado' });
      }

      return res.status(200).json({ msg: 'Contacto actualizado correctamente', contact });
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
};

// Delete product ById
export const deleteContact = async (req, res) => {
    try {
      const product = await Contact.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ msg: 'Contacto no encontrado' });
      }
      return res.status(200).json({ msg: 'Contacto eliminado correctamente' });
    } catch (error) {
      return res.status(500).json({ error: 'Error al eliminar el Contacto' });
    }
  };
  
  