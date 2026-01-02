const mongoose = require('mongoose')
const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    eventType:{
        type:String,
        enum:['Online', 'Offline'],
        required:true
    },
    date:String,
    startTime:{
        type: String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    isPaid:Boolean,
    price:Number,
    venue:{
        type:String,
        required:true
    },
    tags: [String],
    description:{
        overview:String,
        agenda:[String]
    },
    additionalInfo:{
        dressCode:String,
        ageRestriction:Number,
    },
    imageUrl:String,
},
{timestamps:true})

const Event = mongoose.model('Event', eventSchema)
module.exports = Event