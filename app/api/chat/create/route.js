import connectDB from "@/config/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
// this api folder serves as a backend that handles the api requests.
export async function POST(req) {   //this code is for server side execution provided by nextjs.
  try {  //this entire function runs on the server,not in the client side browser.
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({
        success: false,
        message: "User not authenticated",
      });
    }

    // Prepare the chat data to be saved in the database
    const chatData = {
      userId,
      messages: [],
      name: "New Chat",
    };

    // Connect to the database and create a new chat
    await connectDB();
    await Chat.create(chatData);

    return NextResponse.json({ success: true, message: "Chat created" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
