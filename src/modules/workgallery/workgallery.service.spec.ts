import { Test, TestingModule } from '@nestjs/testing';
import { WorkgalleryService } from './workgallery.service';

describe('WorkgalleryService', () => {
  let service: WorkgalleryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkgalleryService],
    }).compile();

    service = module.get<WorkgalleryService>(WorkgalleryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
