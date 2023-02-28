# RistekSocial
## Adrian's Tugas Open Recruitment Web Development RISTEK 2023 (Level 2)

### Stack :
- NodeJS
- MongoDB

### How to Use :
1. Make sure you have NodeJS and MongoDB installed on your system. If not, you can install it first with the following links :
    - [NodeJS](https://nodejs.org/en/download/)
    - MongoDB : [Windows](https://zarkom.net/blogs/how-to-install-mongodb-for-development-in-windows-3328), [macOS](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)

2. Clone this project to your system by running this command
    ```
    git clone https://github.com/AdrianUtomo/tugasristekwebdev2023.git
    ```
3. Install all dependencies by running this on your terminal
    ```
    npm install
    ```
4. Create a file called `.env` in the root folder and fill it with this variables :
    ```
    MONGO_URL = "mongodb://localhost:27017/ristek-social"
    PORT = 3000
    ```
5. Before running the app, make sure MongoDB is already running on your system.
6. Start the app by running this command on your terminal
    ```
    nodemon app.js
    ```
7. That's it, the app should be running on ``localhost:3000`` 😍