import { Document } from 'mongoose';

export interface Tool extends Document {
    _id: String,
    title: String,
    link: String,
    description: String,
    tags: [String]
}