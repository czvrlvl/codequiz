import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const noteSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        default: uuidv4, // generuje unikalny UUID dla każdej notatki
    },
    userId: {
        type: String,
        required: true, // powiązanie notatki z użytkownikiem
    },
    title: {
        type: String,
        required: false,
        default: "",
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // data utworzenia
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware do aktualizacji updatedAt przy zapisie
noteSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

// Zapobiegamy re-rejestrowaniu modelu (ważne w Next.js)
const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;
