const Docker = require("dockerode");
const docker = new Docker({ host: "http://192.168.1.84", port: 2375 });

// Start a container
function startContainer(containerId) {
  const container = docker.getContainer(containerId);

  return new Promise((resolve, reject) => {
    container.start((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve("Container started successfully");
      }
    });
  });
}

// Restart a container
function restartContainer(containerId) {
  const container = docker.getContainer(containerId);

  return new Promise((resolve, reject) => {
    container.restart((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve("Container restarted successfully");
      }
    });
  });
}

// Stop a container
function stopContainer(containerId) {
  const container = docker.getContainer(containerId);

  return new Promise((resolve, reject) => {
    container.stop((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve("Container stopped successfully");
      }
    });
  });
}

async function isImageUpdated(containerId, imageName) {
  // Get the container object
  const container = docker.getContainer(containerId);

  try {
    // Inspect the container to get its image information
    const containerData = await container.inspect();
    const containerImageId = containerData.Image;

    // Get the latest image information
    const image = await docker.getImage(imageName).inspect();
    const latestImageId = image.Id;

    // Compare the image IDs
    return containerImageId === latestImageId;
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error:", error);
    throw new Error("Failed to check image update status");
  }
}

module.exports = {
  startContainer,
  restartContainer,
  stopContainer,
  isImageUpdated,
};
