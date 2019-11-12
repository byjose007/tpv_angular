import { Schema } from 'mongoose';
import { bcrypt } from 'bcryptjs';

export const ManagerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    city: String,
    adress: String,
    document: String,
    isActive: { type: Boolean, default: true },
    imageURL: String,
    birthDate: Date,
    createdAt: { type: Date, default: Date.now },
    lastLogin: Date,
});


ManagerSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

ManagerSchema.methods.matchPassword = async (password) => {
    return await bcrypt.compare(password, this.password);
};