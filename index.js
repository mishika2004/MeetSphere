const express = require("express")
const app=express()

app.use(express.json())

const initializeDatabase = require("./db/db.connect")
const Event = require("./models/event.models")
const Speaker = require("./models/speaker.models")

initializeDatabase()


const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.post("/api/events", async(req,res) => {
    try{
        const event = new Event(req.body)
        const saveEvent = await event.save()
        res.status(200).json(saveEvent)
    }
    catch(error){
        res.status(500).json({message: "Error in creating event", error})
    }
})

app.post("/api/speakers", async (req, res) => {
  try {
    const speaker = new Speaker(req.body);
    const savedSpeaker = await speaker.save();
    res.status(201).json(savedSpeaker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



app.get("/api/events/:id", async (req, res) => {
  try { 
    const event = await Event.findById(req.params.id)

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching event by ID",
    });
  }
});

app.get("/api/events", async (req, res) => {
  try {
    const events = await Event.find()
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events" });
  }
});


// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })
module.exports = app;