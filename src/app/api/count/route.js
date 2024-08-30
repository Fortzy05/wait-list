import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  try {
    const response = await fetch(
      "http://test.kindlegatefoundation.org/api/v1/waiting-list/count"
    );

    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to fetch the registration count" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ count: data.count }, { status: 200 }); // Assuming { count: number }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
