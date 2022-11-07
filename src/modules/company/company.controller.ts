import {Body, Controller, Post } from '@nestjs/common';
import { CompanyDTO } from './company.dto';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
@Post()
async create(@Body() data:CompanyDTO){
  return this.companyService.create(data);
}
}
