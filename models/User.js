const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    googleId: String,
    displayName: String,
    reservations: []
});
mongoose.model('user', userSchema);
