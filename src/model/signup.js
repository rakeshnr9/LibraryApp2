//Accessing Mongoose Package
const mongoose = require('mongoose');

//Database Connection
mongoose.connect('mongodb://localhost:27017/library');

//Schema Definintion
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    name: String,
    gender:String,
    dob:String,
    phone: Number,
    email: String,
    password: String
});
//Model Creation
var Signupdata = mongoose.model('signupdata',SignupSchema);

module.exports = Signupdata;
