import { Request, Response } from "express";
import Customer from "../models/Customer";

// ...existing code...

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching customers", error });
  }
};

export const getCustomerById = async (req: Request, res: Response) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: "Error fetching customer", error });
  }
};

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: "Error creating customer", error });
  }
};

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: "Error updating customer", error });
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting customer", error });
  }
};

export const addCustomerNote = async (req: Request, res: Response) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    customer.notes.push(req.body.note);
    await customer.save();
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: "Error adding note to customer", error });
  }
};

export const updateCustomerNote = async (req: Request, res: Response) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    const noteIndex = customer.notes.findIndex(
      (note: any) => note._id.toString() === req.params.noteId
    );
    if (noteIndex === -1) {
      return res.status(404).json({ message: "Note not found" });
    }
    customer.notes[noteIndex] = req.body.note;
    await customer.save();
    res.status(200).json(customer);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating note for customer", error });
  }
};
