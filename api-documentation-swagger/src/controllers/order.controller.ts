import { Request, Response } from 'express';
import OrderModel from '../models/order.model';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { grandTotal, orderItems, status } = req.body;
    const createdBy = req.user?._id; // Pastikan user telah diinisialisasi di middleware autentikasi

    if (!createdBy) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const newOrder = new OrderModel({
      grandTotal,
      orderItems,
      createdBy,
      status,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ 
        message: 'Order created successfully', data: savedOrder 
    });
  } catch (error) {
    const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed to create order",
      });
  }
};

export const getOrderHistory = async (req: Request, res: Response) => {
  try {
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const orders = await OrderModel.find({ createdBy: userId }).populate('orderItems.productId', 'name');

    res.status(200).json({ 
        message: 'Order history retrieved successfully', data: orders 
    });
  } catch (error) {
    const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed to retrieve order history",
      });
  }
};
