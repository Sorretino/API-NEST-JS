import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';
import { AppController } from './app.controller';
import { AppService } from 'src/app.service';
import { PostModule } from './modules/post/post.module';
@Module({
  imports: [BookModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
