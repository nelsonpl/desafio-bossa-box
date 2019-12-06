import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema<User>({
    username: String,
    password: String
});

export interface User extends Document {
    id: string;
    username: String,
    password: String
};