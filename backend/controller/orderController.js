const orderModel = require("../models/orderModel");

exports.createOrder = async (req, res) => {
    try {
        const { items, total, status } = req.body;
        const newOrder = new orderModel({
            user: req.user._id,
            items,
            total,
            status: status || 'pending'
        });
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await orderModel.find().populate('user', 'name');
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    const { orderId, status } = req.body;
    try {
        const order = await orderModel.findByIdAndUpdate(orderId, { status }, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order status updated', order });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getYourOrders = async (req, res) => {
    try {
        const userId = req.user._id;
        const orderInfo = await orderModel.find({ user: userId }).populate({ path: 'user', select: '-password' });
        res.status(200).json({ success: true, message: 'Order information retrieved successfully', orderInfo });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// New function to get the count of orders for the current user
exports.getOrderCount = async (req, res) => {
    try {
        const userId = req.user._id;
        const orderCount = await orderModel.countDocuments({ user: userId });
        res.status(200).json({ success: true, orderCount });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    } 
};
