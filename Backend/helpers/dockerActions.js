const Docker = require('dockerode');
const docker = new Docker();

// Start a container
function startContainer(containerId) {
  const container = docker.getContainer(containerId);

  return new Promise((resolve, reject) => {
    container.start((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve('Container started successfully');
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
        resolve('Container restarted successfully');
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
        resolve('Container stopped successfully');
      }
    });
  });
}

module.exports = {
  startContainer,
  restartContainer,
  stopContainer
};
