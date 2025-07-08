import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Note from "@/models/Note";

export async function POST(request) {
    try {
        await connectToDatabase();

        const { userId, title, content } = await request.json();

        if (!userId || !content) {
            return NextResponse.json(
                { message: "userId i content są wymagane" },
                { status: 400 }
            );
        }

        const newNote = new Note({ userId, title, content });
        await newNote.save();

        return NextResponse.json(newNote, { status: 201 });
    } catch (error) {
        console.error("Błąd tworzenia notatki:", error);
        return NextResponse.json({ message: "Błąd serwera" }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        await connectToDatabase();

        const { searchParams } = new URL(request.url);
        const userId = searchParams.get("userId");

        if (!userId) {
            return NextResponse.json(
                { message: "Brak userId w zapytaniu" },
                { status: 400 }
            );
        }

        const notes = await Note.find({ userId }).sort({ updatedAt: -1 });

        return NextResponse.json(notes, { status: 200 });
    } catch (error) {
        console.error("Błąd pobierania notatek:", error);
        return NextResponse.json({ message: "Błąd serwera" }, { status: 500 });
    }
}
