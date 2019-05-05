import { Schema } from 'mongoose';

export const CustomerSchema = new Schema({
    name: String,
    email: String,
    adress: String,
    document: String,
    isActive: Boolean,
    imageURL: String,
    birthDate: Date,
    createdAt: { type: Date, default: Date.now }
});

