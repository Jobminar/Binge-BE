import { Schema,model } from "mongoose";

const contactSchema=new Schema({
  name:{type:String,required:true},
  mailID:{type:String,required:true},
  phone:{type:Number,required:true},
  message:{type:String,required:true}
})
const Contact=model("Contact",contactSchema)

export default Contact

