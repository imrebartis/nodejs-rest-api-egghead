'use strict';
const Promise = require('bluebird')

module.exports = function(app, cb) {
  /*
   * The `app` object provides access to a variety of LoopBack resources such as
   * models (e.g. `app.models.YourModelName`) or data sources (e.g.
   * `app.datasources.YourDataSource`). See
   * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
   * for more info.
   */

  const AccessToken = app.models.AccessToken
  const User = app.models.User
  const email = 'admin@example.com'
  const password = "zk3t9l"
  const accessToken = "zk3t9l"

  return Promise.resolve()
  .then(() => User.findOne({ where: { email } })) // try to find the user by its email address
  .then(res => (res ? res : User.create({ email, password}))) // return the user if it got found, otherwise create it using user.create
  .then(user => AccessToken.upsert({ id: accessToken, userId: user.id })) // create an access token using the variable accessToken that was set above + the ID of the user that got passed in as the user ID
  .then(token => console.log('Access token:', token.id ))
  .asCallback(cb) // using Bluebird's ask callback CB method to return CB

  // process.nextTick(cb); // Remove if you pass `cb` to an async function yourself
};

// Filtering with params keys in Postman http://localhost:3000/api/products/
// filter[include]:category
// filter[order]:price DESC
// filter[where][price][gt]:200
// //filter[where][name][like]:cake
// filter[fields][price]:true
// filter[fields][name]:true
// filter[fields][categoryId]:true
// filter[limit]:1
// filter[offset]:1