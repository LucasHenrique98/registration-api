import mongoose from 'mongoose';

mongoose.connect('mongobd://localhost/noderest');
mongoose.Promise = global.Promise;
