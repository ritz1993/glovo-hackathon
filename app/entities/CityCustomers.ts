import { ObjectType, Field } from 'type-graphql';
import {Int} from "type-graphql/dist/scalars/aliases";


@ObjectType({ description: 'The City Customer order model' })
export class CityCustomers {
  @Field(() => String)
  id: string;

  @Field(() => [CustomersOrders])
  customerOrders: CustomersOrders[];
}

@ObjectType({ description: 'The User order model' })
export class CustomersOrders {
  @Field(() => Int)
  userId: number;

  @Field(() => [Order])
  orders: Order[];
}

@ObjectType({ description: 'The Order model' })
export class Order {
  @Field(() => Int)
  orderId: number;

  @Field(() => String)
  category: string;

  @Field(() => [Product])
  products: Product[];
}

@ObjectType({ description: 'The Product model' })
export class Product {
  @Field(() => Int)
  productId: number;

  @Field(() => String)
  productCategory: string;
}

const data = {
  id: 'BCN',
  customerOrders: [
    {
      userId: 10003,
      orders: [
        {
          orderId: 1002,
          category: 'FOOD',
          products: [
            {
              productId: 10004,
              productCategory: 'STARTER'
            },
            {
              productId: 10005,
              productCategory: 'DINNER'
            }
          ]
        }
      ]
    }
  ]
} as CityCustomers

export const getCityCustomerOrders = (cityId: string) => {
  if (cityId !== 'BCN') {
    return {}
  }
  return data
};
