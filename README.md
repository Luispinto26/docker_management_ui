# Docker Management UI

![Project Logo](./logo.png)

Docker Management UI is a web-based application that allows users to create shortcuts for Docker containers. Users can easily add buttons with customizable names, IP addresses of the Docker containers, and optional images. Each button provides information about the container's uptime and current state.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
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
git clone <repository-url>
cd docker-management-ui
