import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { MenuDTO } from './menu.dto';
@Injectable()
export class MenuService {
  constructor(private prisma:PrismaService){}
  async create(data:MenuDTO){
    const menuExists = await this.prisma.menu.findFirst({
      where: {
        title: data.title,
      },
    });
    if (menuExists){
      throw new Error('Menu Alert exists');
    }
    const menu = await this.prisma.menu.create({
      data,
    });
    return menu;
  }

  async findAll(){
    return this.prisma.menu.findMany();
  }
}
