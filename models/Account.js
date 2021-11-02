const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const TicketsSchema = mongoose.Schema({
    UserId: {type: String, required: true},
    TicketID: {type: [String], required: true},
    ValidDate: {type:Date}
})

TicketsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Tickets', TicketsSchema);