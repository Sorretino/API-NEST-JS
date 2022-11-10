import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { WorkgalleryDTO } from './workgallery.dto';
@Injectable()
export class WorkgalleryService {
  constructor(private prisma: PrismaService) {}
  async create(data: WorkgalleryDTO) {
    const workExists = await this.prisma.workgallery.findFirst({
      where: {
        title: data.title,
      },
    });
    if (workExists) {
      throw new Error('Book alert exists');
    }
    const workgallery = await this.prisma.workgallery.create({
      data,
    });
    return workgallery;
  }
  async findAll() {
    return this.prisma.workgallery.findMany({
      include: {
        company: true,
      },
    });
  }
  async update(id: string, data: WorkgalleryDTO) {
    const workExists = await this.prisma.workgallery.findUnique({
      where: {
        id,
      },
    });

    if (!workExists) {
      throw new Error('Work does not exists!');
    }

    return await this.prisma.workgallery.update({
      data,
      where: {
        id,
      },
    });
  }
  async delete(id: string) {
    const workExists = await this.prisma.workgallery.findUnique({
      where: {
        id,
      },
      include: {
        company: true,
      },
    });

    if (!workExists) {
      throw new Error('Work does not exists!');
    }

    return await this.prisma.workgallery.delete({
      where: {
        id,
      },
    });
  }
}
