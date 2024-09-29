const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true, "name is required"],
        minlength: [3, "First name should be at least 3 characters"],
        lowercase : true,
        trim : 20,
        maxlength : [20," First name should not exceed 20 characters"]
    },

    email :{
        type: String,
        trim : true,
        unique : [true, "Email is already used"],
        required : [true, "Email is reqired"],
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    password : {
        type : String,
        required : [true, "Password should be required"],
        minlength : [6, "Minimum 6 characters required"]

    }
},{
    timestamps : true
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Compare input password with stored password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.model("User", userSchema); //collection

module.exports = User;