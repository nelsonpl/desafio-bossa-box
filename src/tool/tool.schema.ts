import * as mongoose from 'mongoose';
import { Tool } from './tool.interface';

export const ToolSchema  = new mongoose.Schema<Tool>();