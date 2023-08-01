import connectDB from "../../../utils/database";
import Order from "../../../models/orderModel";
import { NextResponse } from "next/server";


export async function POST(request) {
    const {title, desc} = await request.json()
    await connectDB();
    await Order.create({title, desc});
    return NextResponse.json({Message:"Order Done"}, {status: 201})
}

export async function GET()  {
    await connectDB();
    const order = await Order.find();
    return NextResponse.json({order})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Order.findByIdAndDelete(id);
    return NextResponse.json({Message:"Order DELEtED"}, {status: 200})

}