# Docker Management UI

<div align="center" style="margin: 20px;">
  <img src="./logo.png" alt="Project Logo">
</div>

Docker Management UI is a web-based application that allows users to create shortcuts for Docker containers. Users can easily add buttons with customizable names, IP addresses of the Docker containers, and optional images. Each button provides information about the container's uptime and current state.

## Table of Contents

- [Docker Management UI](#docker-management-ui)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Enable TCP port 2375 for external connection to Docker](#enable-tcp-port-2375-for-external-connection-to-docker)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

Docker Management UI provides a user-friendly interface for managing Docker containers. It simplifies the process of accessing and monitoring containers by creating buttons that represent specific containers. Users can add, edit, and remove these buttons easily, providing a convenient way to interact with Docker containers.

## Features

- Create buttons with custom names, IP addresses, and optional images.
- Display container uptime and current state on the buttons.
- Edit existing buttons to update container information.
- Remove buttons when they are no longer needed.

## Technologies Used

- HTML and CSS for the frontend user interface.
- Node.js and Express for the backend server.
- MongoDB for storing container information.
- Dockerode library for interacting with Docker from Node.js.

## Installation

1. Clone the repository:

```bash
git clone [<repository-url>](https://github.com/Luispinto26/docker_management_ui.git)
cd docker-management-ui
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

- Create a `.env` file in the root directory.
- Define the following variables in the `.env` file:

  ```bash
  MONGODB_URI=your-mongodb-connection-string
  ```

  Replace `your-mongodb-connection-string` with the connection string for your MongoDB database.

4. Start the backend server:

```bash
npm start
```

5. Open the frontend in a web browser:

- Navigate to `http://localhost:3000` to access the Docker Management UI.

## Usage

1. Open the Docker Management UI in a web browser.

2. To add a new button:

- Click on the "Add Button" option.
- Enter the button name, IP address of the Docker container, and optionally provide an image URL.
- Click "Save" to add the button.

3. The new button will appear on the UI, displaying the container's uptime and current state.

4. To edit a button:

- Click on the button you want to edit.
- Update the container information.
- Click "Save" to apply the changes.

5. To remove a button:

- Click on the button you want to remove.
- Click "Remove" to delete the button.

Enable TCP port 2375 for external connection to Docker
------------------------------------------------------

See this [issue](https://github.com/moby/moby/issues/25471).  
Docker best practise to [Control and configure Docker with systemd](https://docs.docker.com/engine/admin/systemd/#/custom-docker-daemon-options).  

1. Create `daemon.json` file in `/etc/docker`:

        {"hosts": ["tcp://0.0.0.0:2375", "unix:///var/run/docker.sock"]}

2. Add `/etc/systemd/system/docker.service.d/override.conf`

        [Service]
        ExecStart=
        ExecStart=/usr/bin/dockerd


3. Reload the systemd daemon:

        systemctl daemon-reload

4. Restart docker:

        systemctl restart docker.service

## Contributing

Contributions to Docker Management UI are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
