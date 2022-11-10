import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SubmenuDTO } from './submenu.dto';
import { SubmenuService } from './submenu.service';

@Controller('submenu')
export class SubmenuController {
  constructor(private readonly submenuService: SubmenuService) {}

  @Post()
  async create(@Body() data: SubmenuDTO) {
    return this.submenuService.create(data);
  }

  @Get()
  async findAll() {
    return this.submenuService.findAll();
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: SubmenuDTO) {
    return this.submenuService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.submenuService.delete(id);
  }
}
