import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('DataEmail')
export class DataEmail {
  @Field(() => Int)
  accountId: number;

  @Field({ nullable: true })
  email?: string;
}
