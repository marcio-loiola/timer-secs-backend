import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export class UsersController {
  public async list(request: Request, response: Response) {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();

    return response.status(200).json({
      users,
    });
  }

  public async create(request: Request, response: Response) {
    const prisma = new PrismaClient();
    const { name, email } = request.body;
    const users = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return response.status(200).json({
      users,
    });
  }

  public async show(request: Request, response: Response) {
    const prisma = new PrismaClient();
    const id = request.params.id;

    const users = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return response.status(200).json({
      users,
    });
  }

  /*   public assync delete (request: Request, response: Response) {
    const prisma = new PrismaClient(); 
    const { id } = request.body; 

    const users = aw


  } */
}
