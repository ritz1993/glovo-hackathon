import {
  Resolver,
  Arg,
  Query,
} from 'type-graphql';
import { CityCustomers, getCityCustomerOrders } from '../entities/CityCustomers';


@Resolver((_of) => CityCustomers)
export class UserOrder {
  @Query((_returns) => CityCustomers, { nullable: false })
  async cityCustomerOrders(@Arg('id') id: string) {
    return getCityCustomerOrders(id);
  }

}
