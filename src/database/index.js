import mongoose from 'mongoose';

mongoose.connect('mongobd://localhost/noderest', { useMongoClient: true });
mongoose.Promise = global.Promise;

export default mongoose;
