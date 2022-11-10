import {
  Post,
  Controller,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostDTO } from './post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post()
  async create(@Body() data: PostDTO) {
    return this.postService.create(data);
  }
  @Get()
  async findAll() {
    return this.postService.findAll();
  }
  @Get(':url')
  async findOne(@Param('url') url: string) {
    return this.postService.findOne(url);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: PostDTO) {
    return this.postService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.postService.delete(id);
  }
}
