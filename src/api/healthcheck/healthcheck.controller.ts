import { Request, Response } from 'express'

export const healchecktHandler = (_: Request, res: Response) => {
  res.status(200).json({ message: 'Server is OK', uptime: process.uptime() })
}