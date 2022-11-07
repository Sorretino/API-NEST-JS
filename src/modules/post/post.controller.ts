import { 
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
 } from '@nestjs/common';
import { PostDTO } from './post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() data: PostDTO) {
    return this.postService.create(data);
  }

  @Get()
  async findAll(){
    return this.postService.findAll();
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
