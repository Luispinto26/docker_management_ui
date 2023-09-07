const express = require('express');
const mongoose = require('mongoose');
const Docker = require('dockerode');
const docker = new Docker({ host: 'http://192.168.1.103', port: 2375 });
const router = express.Router();
const { parseString, extractTimeFromStatus } = require('../helpers/stringParser');
const { startContainer, restartContainer, stopContainer } = require('../helpers/dockerActions');

console.clear()

// Define the container schema and model
const containerSchema = new mongoose.Schema({
  name: String,
  containerId: String,
  state: String,
  status: Object,
  containerPort: Number
}, { versionKey: false });

const Container = mongoose.model('Container', containerSchema);

// Function to get the container ID by name
async function getContainerIdByName(containerName) {
  try {
    const container = await Container.findOne({ name: containerName });
    if (container) {
      return container.containerId;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Define API routes
router.get('/containers', async (req, res) => {
  try {
    let count = await Container.countDocuments();
    let newContainersCount = 0


    // if (count === 0) {
    // Database is empty, fetch latest information
    // const containers = await docker.listContainers({ all: true });
    // const containerData = containers.map(containerInfo => ({
    //   name: parseString(containerInfo.Names),
    //   containerId: containerInfo.Id,
    //   state: containerInfo.State,
    //   status: extractTimeFromStatus(containerInfo.Status),
    //   containerPort: 0000
    // }));
    // for (const containerInfo of containers) {
    //   count++
    // }
    // console.log(count)
    // await Container.insertMany(containerData);

    // } else {
    //   // Database is not empty, update or add new containers
      const containers = await docker.listContainers({ all: true });

      for (const containerInfo of containers) {
        const containerData = {
          name: parseString(containerInfo.Names),
          containerId: containerInfo.Id,
          state: containerInfo.State,
          status: extractTimeFromStatus(containerInfo.Status)
        };

        // Find the container in the database by name
        const existingContainer = await Container.findOne({ name: containerData.name });

        if (existingContainer) {
          // Container already exists, update its state and status
          existingContainer.state = containerData.state;
          existingContainer.status = containerData.status;
          await existingContainer.save();
        } else {
          // Container does not exist, create a new document in the database
          const newContainer = new Container(containerData);
          await newContainer.save();
          newContainersCount++
        }
      }
    // }

    res.json({ message: 'Container information updated successfully', totalContainer: count, newContainersCount: newContainersCount });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to update the database' });
  }
});

// Delete a container by name
router.delete('/containers/:name', async (req, res) => {
  const containerName = req.params.name;

  try {
    const deleteResult = await Container.deleteOne({ name: containerName });

    if (deleteResult.deletedCount === 1) {
      res.json({ message: `Container '${containerName}' deleted successfully` });
    } else {
      res.status(404).json({ message: `Container '${containerName}' not found` });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to delete container' });
  }
});

router.get('/containers/:name', async (req, res) => {
  const containerName = req.params.name;

  try {
    const containerId = await getContainerIdByName(containerName);
    const containerInfo = await Container.findOne({ name: containerName });

    if (containerId) {
      // Retrieve the ID from the container object
      res.json({ name: containerName, id: containerId, status: containerInfo.status, state: containerInfo.state });
    } else {
      res.status(404).json({ error: 'Container not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/containers/updatePort/:name', async (req, res) => {
  const containerName = req.params.name;
  const newPort = req.body.port;
  
  try {
    // Find the container by name
    const container = await Container.findOne({ name: containerName });

    if (!container) {
      return res.status(404).json({ error: 'Container not found' });
    }

    // Update the containerPort field
    container.containerPort = newPort;
    
    // Save the updated document
    await container.save();

    res.status(200).json({ message: 'Container port updated successfully', container });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Start a container by name
router.post('/containers/start', (req, res) => {
  const { name } = req.body;

  // Call the startContainer function with the container name
  startContainer(name)
    .then(message => res.json({ success: true, message }))
    .catch(error => res.json({ success: false, error: error.message }));
});

// Restart a container by name
router.post('/containers/restart', (req, res) => {
  const { name } = req.body;

  // Call the restartContainer function with the container name
  restartContainer(name)
    .then(message => res.json({ success: true, message }))
    .catch(error => res.json({ success: false, error: error.message }));
});

// Stop a container by name
router.post('/containers/stop/:name', async (req, res) => {
  const containerName = req.params.name;

  try {
    const containerId = await getContainerIdByName(containerName);

    if (containerId) {
      console.log(containerId)
      // Call the stopContainer function with the container ID
      stopContainer(containerId)
        .then(message => res.json({ success: true, message }))
        .catch(error => res.json({ success: false, error: error.message }));
    } else {
      res.status(404).json({ error: 'Container not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
