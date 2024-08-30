import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the incoming JSON body
    const body = await req.json();

    // Validate required fields
    const { full_name, phone_number, country, email, social_media } = body;
    if (!full_name || !phone_number || !country || !email || !social_media) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Send the request to the external API
    const externalResponse = await fetch(
      "http://test.kindlegatefoundation.org/api/v1/waiting-list/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name,
          phone_number,
          country,
          email,
          social_media,
        }),
      }
    );

    const externalData = await externalResponse.text(); // Read the response as text

    // Log the status and body for debugging
    console.log("External API Status:", externalResponse.status);
    console.log("External API Response Body:", externalData);

    if (!externalResponse.ok) {
      return NextResponse.json(
        { message: externalData },
        { status: externalResponse.status }
      );
    }

    return NextResponse.json(JSON.parse(externalData), { status: 200 });
  } catch (error) {
    console.error("Error during API request:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function OPTIONS(req) {
  return NextResponse.json({}, { status: 204 });
}
