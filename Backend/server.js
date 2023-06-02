const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

var Docker = require('dockerode');
var docker = new Docker({host: 'http://192.168.1.103', port: 2375});

docker.listContainers({ all: true }, (err, containers) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
    console.log(containers.length)
    // containers.forEach((containerInfo) => {
    //   console.log('Container ID:', containerInfo.Id);
    //   console.log('Container Name:', containerInfo.Names);
    //   console.log('Container State:', containerInfo.State);
    //   console.log('Container Image:', containerInfo.Image);
    //   console.log('Container Ports:', containerInfo.Ports);
    //   console.log('Container Networks:', containerInfo.NetworkSettings.Networks);
    //   console.log('--------------');
    // });
  });
  

require('dotenv').config();

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// Connect to MongoDB
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("database connected");
})
.catch(err => {
  console.log("Could not connect", err);
});

// Define the container schema and model
const containerSchema = new mongoose.Schema({
  name: String,
  image: String,
  ip: String
});

const Container = mongoose.model('Container', containerSchema);

// Define API routes
app.get('/api/containers', async (req, res) => {
  const containers = await Container.find();
  res.json(containers);
});

// Add new container Info to DBs
app.post('/api/containers', async (req, res) => {
  try {
    const { name, image, ip } = req.body;
    const container = new Container({ name, image, ip });
    await container.save();
    res.status(201).json({ message: 'Container created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create container' });
  }
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
