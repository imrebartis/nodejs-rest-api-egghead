const mongodbUrl = process.env.MONGODB_URL;

// if the variable is set, print the URL
if (mongodbUrl) {
    console.log('Using MongoDB url:', mongodbUrl)

    const dataSources = {
        db: {
            name: 'db',
            connector: 'mongodb',
            url: mongodbUrl,
        }
    }

    module.exports = dataSources
}

// Connecting to the local MongoDB server (terminal):
// mongod
// use nodejs-rest-api-egghead // creating the DB
// MONGODB_URL=mongodb://localhost/nodejs-rest-api-egghead npm run dev