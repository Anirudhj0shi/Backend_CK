import express from 'express'
import { Contact } from '../Models/Contact.js';
import { addContact,getContact,UpdateContact,deleteContact } from '../controllers/contact.js';
const router = express.Router();

//Home Route

router.get('/home',(req,res)=>{
    res.json({message:"converting to MVC structure"})
})

//@route - '/addcontact'
//@method - 'post' 

router.post('/addcontact', addContact);

// _______________________________________________________________________________________________________
//@route - '/getContacts'
//@method - 'post' 

router.get('/getcontacts', getContact)

// _______________________________________________________________________________________________________
//@route - '/:id'
//@method - put
router.put('/:id', UpdateContact)


// _______________________________________________________________________________________________________
//@route - '/:id'
//@method - Delete

router.delete('/:id',deleteContact)

export default router ; 