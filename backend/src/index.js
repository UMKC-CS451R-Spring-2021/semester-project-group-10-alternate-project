const isDevMode = process.env.DEV == "true";
if (isDevMode) {
  console.log('Running in development mode.');
}
const config = require(isDevMode ? './config/dev.config' : './config/prod.config');
const {server} = require("./server.js")(config);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
