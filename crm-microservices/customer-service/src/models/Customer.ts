import { Schema, model } from "mongoose";

const customerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  notes: [
    {
      content: { type: String, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});

const Customer = model("Customer", customerSchema);

export default Customer;
