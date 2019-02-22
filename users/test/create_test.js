//This is to write some test on the user model. Testing the schema.
//First, describe how you will test the data to Mocha.
//Assertion library
const assert = require('assert');

const User = require ('../src/user');

describe('Creating records', () => {
  it('saves a user', () => {
    //run an assertion: validate data
    const joe = new User({ name: 'Joe' });

    joe.save();


  });


});




//EOL
