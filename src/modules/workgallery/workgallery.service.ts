import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { WorkgalleryDTO } from './workgallery.dto';
@Injectable()
export class WorkgalleryService {
constructor(private prisma: PrismaService){}
  async create(data:WorkgalleryDTO){
    const workExists = await this.prisma.workgallery.findFirst({
      where: {
        title: data.title,
      },
    });

    if(workExists){
      throw new Error('Book alert exists');
    }
const workgallery = await this.prisma.workgallery.create({
  data,
});
return workgallery;
  }
async findAll(){
  return this.prisma.workgallery.findMany();
}
  
}
