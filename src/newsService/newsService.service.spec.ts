import { Test, TestingModule } from '@nestjs/testing';
import { NewsServiceService } from './newsService.service';

describe('NewsServiceService', () => {
  let service: NewsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsServiceService],
    }).compile();

    service = module.get<NewsServiceService>(NewsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
