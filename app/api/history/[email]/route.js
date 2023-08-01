import connectDB from "@/utils/database";
import Order from "@/models/orderModel";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectDB();
  await Order.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const  {email}  = params;
  
  await connectDB()
  const order = await Order.find({ title: email});
  return NextResponse.json({ order }, { status: 200 })
}