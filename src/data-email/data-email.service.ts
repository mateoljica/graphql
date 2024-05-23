import { Injectable } from '@nestjs/common';
import { DataEmail } from './data-email.model';

@Injectable()
export class DataEmailService {
  // here we can write logic for getting data-emails. Like having api calls and try/catch block
  private readonly dateemails: DataEmail[] = [
    { accountId: 1, email: 'test@test.com' },
    { accountId: 2, email: 'test2@test.com' },
  ];
  findById(accountId: number): DataEmail {
    return this.dateemails.find((email) => email.accountId == accountId);
  }
  findAll(): DataEmail[] {
    return this.dateemails;
  }
}
