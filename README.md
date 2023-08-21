# SpaceBook

This project is a website that allows users to view and post NASA images of the day. It utilizes a MySQL database for storing image data and Handlebars.js for rendering web pages.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Database Structure](#database-structure)
- [Usage](#usage)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js: [Node.js Installation Guide](https://nodejs.org/)
- MySQL: [MySQL Installation Guide](https://dev.mysql.com/doc/mysql-installation-excerpt/en/)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:IkonicRes/SpaceBook.git

## Database Structure

The MySQL database for this project consists of the following tables:


* user: Stores user information (The user's ID, username, password, and a profile picture URL).
* topic: Stores the post topic names and assigns an ID to each.
* post: Stores the posts the users make. (An ID for each, amount of likes, the poster's user ID, a title, optional media source, text content, a date, and a topic and apod id)
* comment: Stores the posts comments.(The poster's ID, the ID of the post, amount of likes, the comment text, timestamp etc.)
* like: Stores the user information for a like on a post or comment(Whodunit).
* apod: Stores NASA images of the day. (Assigns each new unique APOD posted an ID and adds it to the table.)

You can find the database schema in the ./db/schema.sql file.

## Usage

1. Access the website by opening a web browser and navigating to https://spacebook-5e89d6d6f153.herokuapp.com/.

![Alt text](./public/images/mainpage.png)

2. Users can sign up and log in to post and view NASA images of the day.

![Alt text](./public/images/login.png)

3. To post an image of the day, users can provide the image title, description, and image URL.

![Alt text](./public/images/makepost.png)

4. Users can browse and view previously posted images.

## License
