import { OrderCancelledEvent, Publisher, Subjects } from "@hieuhochanh/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
