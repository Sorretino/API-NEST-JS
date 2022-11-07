import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CompanyDTO } from './company.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma:PrismaService){}
  async create(data:CompanyDTO){
    const companyExists = await this.prisma.company.findFirst({
      where:{
        title: data.title,
      },
    });
    if(companyExists){
      throw new Error('Company alert exists');
    }
    const company = await this.prisma.company.create({
       data,
    });
    return company;
  }


}
