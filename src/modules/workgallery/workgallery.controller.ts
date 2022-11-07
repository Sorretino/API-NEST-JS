import { Body, Controller, Get, Post } from '@nestjs/common';
import { WorkgalleryDTO } from './workgallery.dto';
import { WorkgalleryService } from './workgallery.service';

@Controller('workgallery')
export class WorkgalleryController {
  constructor(private readonly workgalleryService: WorkgalleryService) {}
  @Post()
  async create(@Body() data: WorkgalleryDTO) {
    return this.workgalleryService.create(data);
  }
  @Get()
  async findAll() {
    return this.workgalleryService.findAll();
  }
}
