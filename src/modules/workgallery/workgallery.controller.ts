import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
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
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: WorkgalleryDTO) {
    return this.workgalleryService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.workgalleryService.delete(id);
  }
}
