import mongoose,  { Schema, model, models } from "mongoose"

const orderSchema = new Schema({
    
        title:String,
        desc:String,
    
},{
    timestamps:true
}
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema)

export default Order