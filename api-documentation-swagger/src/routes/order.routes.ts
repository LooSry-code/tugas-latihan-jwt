import { Router } from "express";
import { createOrder, getOrderHistory } from "../controllers/order.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();
router.post('/orders', authMiddleware, createOrder);
router.get('order/history', authMiddleware, getOrderHistory);

export default router;