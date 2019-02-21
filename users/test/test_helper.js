//testing helper function

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
.once('open', () => {
  console.log('connection success')
})
.on('error', (error) => {
  console.warn('Warning', error);
});
//EOL
