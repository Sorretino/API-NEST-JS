import { Module } from '@nestjs/common';
import { WorkgalleryService } from './workgallery.service';
import { WorkgalleryController } from './workgallery.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [WorkgalleryController],
  providers: [WorkgalleryService, PrismaService],
})
export class WorkgalleryModule {}
