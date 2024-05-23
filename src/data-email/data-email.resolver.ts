import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { DataEmail } from './data-email.model';
import { DataEmailService } from './data-email.service';

@Resolver(() => DataEmail)
export class DataEmailResolver {
  constructor(private dataEmailService: DataEmailService) {}

  @Query(() => [DataEmail])
  getAllDataEmails(): DataEmail[] {
    return this.dataEmailService.findAll();
  }

  @Query(() => DataEmail)
  getEmailById(
    @Args('accountId', { type: () => Int }) accountId: number,
  ): DataEmail {
    return this.dataEmailService.findById(accountId);
  }
}
