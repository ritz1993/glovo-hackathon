import { InputType, Field } from 'type-graphql';

@InputType()
export class UserInput {
  @Field()
  userId: number;
}
