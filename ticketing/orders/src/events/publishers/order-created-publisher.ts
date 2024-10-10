import { OrderCreatedEvent, Publisher, Subjects } from "@hieuhochanh/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
