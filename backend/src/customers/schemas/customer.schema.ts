import { Schema } from 'mongoose';

export const CustomerSchema = new Schema({
    name: String,
    email: String,
    city: String,
    adress: String,
    document: String,
    isActive: { type: Boolean, default: true },
    imageURL: String,
    birthDate: Date,
    createdAt: { type: Date, default: Date.now }
});

