import mongoose from 'mongoose'  
import User from "../models/user.model.js";
import Message from "./message.model.js";

// Define the conversation schema
const conversationSchema = new mongoose.Schema({
    members: [{
        type: mongoose.Schema.Types.ObjectId, // Assuming members are ObjectIds
        required: true,
        ref: User  // Reference to the User model
    }],
    messages: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: Message,
            default: [],
        },
      ], // Array of messages

}, {timestamps:true}); // Automatically manage createdAt and updatedAt fields


// Create a model from the schema
const Conversation = mongoose.model('conversation', conversationSchema);

// Export the model
export default  Conversation;