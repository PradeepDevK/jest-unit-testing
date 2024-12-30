/**
 * Test getUserData
 */

const getUserData = require('../src/user');
const fetchData = require('../src/fetchData');
const axios = require('axios');

jest.mock('../src/fetchData');

test('returns user data for a given userId', async () => {
  const data = { id: 1, name: 'John Doe' };
  fetchData.mockResolvedValue(data);

  const result = await getUserData(1);
  expect(result).toEqual(data);
  expect(fetchData).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/users/1'
  );
});

test('handles errors when fetching user data', async () => {
  fetchData.mockRejectedValue(new Error('Network Error'));

  try {
    await getUserData(1);
  } catch (err) {
    expect(err.message).toBe('Unable to fetch user data.');
  }
});
