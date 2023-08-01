"use server"
// getUsers.js
import connectDB from "@/utils/database";
import User from "@/models/userModel";

// Connect to the database
connectDB();

// Function to get all users
const getAllUsers = async () => {
  try {
    // Fetch all users from the User collection
    const users = await User.find();

    // Return the array of users
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export default getAllUsers;
