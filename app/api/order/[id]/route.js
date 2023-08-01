import connectDB from "@/utils/database";
import Order from "@/models/orderModel";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: desc} = await request.json();
  await connectDB();
  await Order.findByIdAndUpdate(id, { title, desc });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  
  console.log({id})
  await connectDB();
  const order = await Order.findById(id)
  return NextResponse.json({ order }, { status: 200 });
}