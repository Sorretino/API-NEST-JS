import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { SubmenuDTO } from './submenu.dto';

@Injectable()
export class SubmenuService {
  constructor(private prisma: PrismaService) {}

  async create(data: SubmenuDTO) {
    const subExists = await this.prisma.submenu.findFirst({
      where: {
        title: data.title,
      },
    });

    if (subExists) {
      throw new Error('Book alert exists');
    }
    const submenu = await this.prisma.submenu.create({
      data,
    });
    return submenu;
  }
  async findAll() {
    return this.prisma.submenu.findMany({
      include: {
        menu: true,
      },
    });
  }

  async update(id: string, data: SubmenuDTO) {
    const subExists = await this.prisma.submenu.findUnique({
      where: {
        id,
      },
    });

    if (!subExists) {
      throw new Error('Book does not exists!');
    }

    return await this.prisma.submenu.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const subExists = await this.prisma.submenu.findUnique({
      where: {
        id,
      },
      include: {
        menu: true,
      },
    });

    if (!subExists) {
      throw new Error('Book does not exists!');
    }

    return await this.prisma.submenu.delete({
      where: {
        id,
      },
    });
  }
}
