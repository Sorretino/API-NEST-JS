import { Body, Controller, Post, Get } from '@nestjs/common';
import { MenuDTO } from './menu.dto';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
@Post()
  async create(@Body() data: MenuDTO) {
    return this.menuService.create(data);
  }
  @Get()
  async findAll() {
    return this.menuService.findAll();
  }
}
