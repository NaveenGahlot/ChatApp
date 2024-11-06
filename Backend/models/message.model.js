import mongoose from "mongoose";

// Define the message schema
const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId, // Assuming senderId is an ObjectId
        required: true,
        ref: 'User ' // Reference to the User model (if applicable)
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId, // Assuming receiverId is an ObjectId
        required: true,
        ref: 'User ' // Reference to the User model (if applicable)
    },
    message: {
        type: String,
        required: true
    }
}, {timestamps:true});

// Create a model from the schema
const Message = mongoose.model('message', messageSchema);

// Export the model
export default Message;