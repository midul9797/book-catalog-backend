import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';

import sendResponse from '../../../shared/sendResponse';

import { OrderService } from './order.service';
const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user as any;
  const result = await OrderService.createOrder(req.body, userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});
const getAllOrder = catchAsync(async (req: Request, res: Response) => {
  const { userId, role } = req.user as any;
  const result = await OrderService.getAllOrder(userId, role);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrived successfully',
    data: result,
  });
});

const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = req.user as any;
  const result = await OrderService.getSingleOrder(id, userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrived successfully',
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getAllOrder,
  getSingleOrder,
};
