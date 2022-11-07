import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';
import { AppController } from './app.controller';
import { AppService } from 'src/app.service';
import { PostModule } from './modules/post/post.module';
import { CompanyModule } from './modules/company/company.module';
import { MenuModule } from './modules/menu/menu.module';
import { WorkgalleryModule } from './modules/workgallery/workgallery.module';
@Module({
  imports: [BookModule, PostModule, CompanyModule, MenuModule, WorkgalleryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
