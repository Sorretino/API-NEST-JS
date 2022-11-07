import { Test, TestingModule } from '@nestjs/testing';
import { WorkgalleryController } from './workgallery.controller';
import { WorkgalleryService } from './workgallery.service';

describe('WorkgalleryController', () => {
  let controller: WorkgalleryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkgalleryController],
      providers: [WorkgalleryService],
    }).compile();

    controller = module.get<WorkgalleryController>(WorkgalleryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
