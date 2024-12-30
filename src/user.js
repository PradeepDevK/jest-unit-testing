/**
 * fetch user data
 */

const fetchData = require('./fetchData');

async function getUserData(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const data = await fetchData(url);
  return data;
}

module.exports = getUserData;
