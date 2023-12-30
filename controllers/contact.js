import { Contact } from "../Models/Contact.js"


// addContact

    export const addContact = async(req,res)=>{
        console.log("Addcontact is running ....")
        // console.log(req.body)4
        const{name,gmail,phone,ctype} = req.body;

        let contact = await Contact.findOne({gmail});
        let phoneNumber = await Contact.findOne({phone});

        if(contact || phoneNumber) return res.json({message:"Contact is already existed....!"});

        contact = await Contact.create({
            name,
            gmail,  
            phone,
            ctype
        })

        res.json({message:"Contact Saved!...."});
    };


//getContact

    export const getContact = async(req,res)=>{
        console.log("Getcontact is running live ......")

        const contacts =  await Contact.find();
        res.json({message:"Fetched all the contacts ....! ",contacts})
    };


//UpdateContact

    export const UpdateContact = async(req,res)=>{
        // console.log(req.params.id);
        const contactID = req.params.id;
        let contact = await Contact.findById(contactID);

        if(!contact) return res.json({message:"Invalid ID ...!!!"});

        const{name, gmail, phone, ctype}  = req.body;

        contact.name = name;
        contact.gmail = gmail;
        contact.phone = phone;
        contact.ctype = ctype; 
    
        await contact.save();

        res.json({message:"contact Successfully updated",contact});
    };


//DeleteContact

    export const deleteContact = async(req,res)=>{
        // console.log("Delete ki jai ho ");
        const id  =req.params.id;
        
        let contact = await Contact.findById(id);

        if(!contact) return res.json({message:"ID not existed...!"})

        await contact.deleteOne();

        res.json({
            success:true,
            message:"Deleted contact ......"
        })
    };

