import { Module } from '@nestjs/common';
import { SubmenuService } from './submenu.service';
import { SubmenuController } from './submenu.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [SubmenuController],
  providers: [SubmenuService, PrismaService],
})
export class SubmenuModule {}
