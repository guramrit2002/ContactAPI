const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel")


const getController = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    console.log(contacts)
    res.status(200).json(contacts);
});

const postController = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone} = req.body;
    console.log(name,);
    if (!name||!email||!phone) {
        res.status(400);
        throw new Error('All fields are mandatory!!');
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json({
        contact
    });
});

const putController = asyncHandler(async (req, res) => {
    console.log(req.params.id);
    const contact =await Contact.findById(req.params.id)
    if (!contact){
        res.status(404)
        throw new Error("Contact Not Found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json({
        updatedContact
    });
    
});

const getOneController = asyncHandler(async (req, res) => {
    const contact =await Contact.findById(req.params.id)
    if (!contact){
        res.status(404)
        throw new Error("Contact Not Found")
    }
    res.status(200).json({
        contact
    });
});

const deleteController = asyncHandler(async (req, res) => {
    console.log(req.params.id);
    const contact = await Contact.findById(req.params.id)
    if (!contact){
        res.status(404)
        throw new Error("Contact Not Found")
    }
    await contact.remove()
    res.status(200).json(
        contact
    );
});

module.exports = {
    getController,
    postController,
    putController,
    deleteController,
    getOneController
};
