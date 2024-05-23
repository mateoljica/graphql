import { Module } from '@nestjs/common';
import { DataEmailService } from './data-email.service';
import { DataEmailResolver } from './data-email.resolver';

@Module({
  providers: [DataEmailService, DataEmailResolver],
  exports: [DataEmailService],
})
export class DataEmailModule {}
