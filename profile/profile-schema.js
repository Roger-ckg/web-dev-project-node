const mongoose = require('mongoose');
const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    handle: String,
    profilePicture : {type: String, defaultValue: "../../../images/profile-pic1.jpg"},
    bannerPicture : {type: String, defaultValue: "../../../images/banner1.jpg"},
    bio : {type:String, defaultValue:""},
    website : {type: String, defaultValue: ""},
    location: {type: String, defaultValue: ""},
    dateOfBirth: {type: String, defaultValue: Date.now},
    followingCount: {type: Number, defaultValue: 0},
    followersCount: {type: Number, defaultValue: 0},
}, {collection: "persons"});

module.exports = schema;