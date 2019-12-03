import { Document } from 'mongoose';

export interface Tool extends Document {
    title: String,
    link: String,
    description: String,
    tags: [String]
}