import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { PostDTO } from './post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(data: PostDTO) {
    const postExists = await this.prisma.post.findFirst({
      where: {
        title: data.title,
      },
    });

    if (postExists) {
      throw new Error('Book alert exists');
    }
    const post = await this.prisma.post.create({
      data,
    });
    return post;
  }
  async findOne(url: string) {
    return this.prisma.post.findFirst({ where: { url } });
  }

  async findAll() {
    return this.prisma.post.findMany();
  }
  async update(id: string, data: PostDTO) {
    const postExists = await this.prisma.post.findUnique({
      where: {
        id,
      },
    });

    if (!postExists) {
      throw new Error('Post does not exists!');
    }

    return await this.prisma.post.update({
      data,
      where: {
        id,
      },
    });
  }
  async delete(id: string) {
    const postExists = await this.prisma.post.findUnique({
      where: {
        id,
      },
    });

    if (!postExists) {
      throw new Error('Post does not exists!');
    }

    return await this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
