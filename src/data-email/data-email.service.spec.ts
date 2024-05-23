import { Test, TestingModule } from '@nestjs/testing';
import { DataEmailService } from './data-email.service';

describe('DataEmailService', () => {
  let service: DataEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataEmailService],
    }).compile();

    service = module.get<DataEmailService>(DataEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
