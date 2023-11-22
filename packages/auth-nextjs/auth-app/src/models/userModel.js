import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    // Base user model
    username: { type: String, required: [true, "Please provide a username"], unique: true },
    email: { type: String, required: [true, "Please provide an email"], unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false},
    isAdmin: { type: Boolean, default: false },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    // Extra features for user model
    // name: { type: String, required: true },
    // street: { type: String, default: '' }, 
    // apartment: { type: String, default: '' },
    // city: { type: String, default: '' },
    // zip: { type: String, default: '' },
    // country: { type: String, default: '' },
    // phone: { type: String, default: '' },
    // avatar: { type: String, default: '' },
});

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;