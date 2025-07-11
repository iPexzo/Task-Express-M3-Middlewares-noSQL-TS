import { NextFunction, Request, Response } from "express";

export const NotFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({ message: `404 - ${req.path} Not Found`, data: [] });
};
