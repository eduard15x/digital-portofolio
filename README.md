# digital-portofolio

This is a digital portofolio that could be used as a presentation page for a company/person to provide information regarding their work and services.
It has also an admin panel page (no authentication/authorization implemented) where you can use all of the CRUD operations to manage work-projects for the portofolio.

It was created as a test for a pre-interview, where all I was only some requirements (what should be created/what can you do).
Design is full responsive created by me.

The project can be found *[here](https://eduard-digital-portofolio.netlify.app/)*.

## Technologies used
* **Frontend**
  * React + Typescript (Created with Vite)
  * SASS
  * Packages: react-router-dom, react-icons, react-responsive-carousel

* **Backend**
  * NestJS
  * Packages: typeorm, pg, platform-express, class-transformer, class-validator, cloudinary, dotenv, multer
  
* **Database**
  * PostgreSQL
  
* **Cloud**
  * Cloudinary (to store images)

* **Hosting**
  * Netlify (Client)
  * Render (Server + DB)
 

To start project locally:

-npm install -> in both directories (fd + bd)\
-npm run start:dev -> in bd\
-npm run dev -> in fd

Before all you will need to create an .env file with the following variables:

**VITE_SERVER_API** - running in localhost you will set 'http://localhost:3000'\
**DB_TYPE=postgres**\
**DB_HOST=localhost**\
**DP_PORT=5432**\
**DB_DATABASE=your_db_name**\
**DB_USERNAME=postgres**\
**DB_PASSWORD=postgres**\
**SERVER_PORT=3000**

Create a new instance on [Cloudinary](https://cloudinary.com/) and get data from there

**CLOUD_NAME**\
**CLOUD_KEY**\
**CLOUD_SECRET**
