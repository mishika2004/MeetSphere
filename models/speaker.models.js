
const mongoose = require('mongoose')

const speakerSchema = new mongoose.Schema({
    eventId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Event",
        required:true,
    },
  name: {
    type: String,
    required:true
},
  designation: String,
  bio: String
});

const Speaker = mongoose.model("Speaker", speakerSchema);
module.exports = Speaker;
