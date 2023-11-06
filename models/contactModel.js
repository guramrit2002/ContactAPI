const mongoose = require('mongoose')

const contactScheme = mongoose.Schema({
    name: {
        type: String,
        required:[true,"Please add the Contact Name"]
    },
    email: {
        type: String,
        required:[true,"Please add the Contact Name"]
    },
    name: {
        type: String,
        required:[true,"Please add the Contact Name"]
    },

},{
    timestamps: true,
})

module.exports = mongoose.model("COntact",contactScheme)

