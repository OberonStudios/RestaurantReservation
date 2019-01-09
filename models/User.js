const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    googleId: String,
    reservations: []
});
mongoose.model('user', userSchema);
