import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const userSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    default: uuidv4, // automatycznie generuje UUID gdy tworzysz nowego usera
  },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
});

// Zabezpieczenie przed re-rejestrowaniem modelu
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
