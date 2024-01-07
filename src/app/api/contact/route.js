import { Contact } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

// export async function GET(request) {
//   return NextResponse.json(
//     { message: "Hello from GET method" },
//     { status: 201 }
//   );
// }

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        message: "Name, Email and message are required fields!",
        status: "error",
      },
      { status: 400 }
    );
  }

  if (name.length < 3) {
    return NextResponse.json(
      { message: "Name must be at least 3 characters", status: "error" },
      { status: 400 }
    );
  }

  const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!email.match(validRegex)) {
    return NextResponse.json(
      { message: "Invalid email format", status: "error" },
      { status: 400 }
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { message: "Message must be at least 10 characters", status: "error" },
      { status: 400 }
    );
  }

  try {
    // Post to database
    connectToDb();

    const newContact = new Contact({
      name,
      email,
      phone,
      message,
    });

    await newContact.save();

    return NextResponse.json(
      {
        message:
          "Email sent successfully, We will reply to you as soon as we can!",
        status: "success",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong when saving to DB", status: "error" },
      { status: 400 }
    );
  }
}
