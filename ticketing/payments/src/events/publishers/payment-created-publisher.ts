import { PaymentCreatedEvent, Publisher, Subjects } from "@hieuhochanh/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
