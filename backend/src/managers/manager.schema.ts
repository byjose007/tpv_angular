import { Schema } from 'mongoose';

export const ManagerSchema = new Schema({
    name: String,
    email: String,
    password: String,
    city: String,
    adress: String,
    document: String,
    isActive: { type: Boolean, default: true },
    imageURL: String,
    birthDate: Date,
    createdAt: { type: Date, default: Date.now },
    lastLogin: Date,
});

