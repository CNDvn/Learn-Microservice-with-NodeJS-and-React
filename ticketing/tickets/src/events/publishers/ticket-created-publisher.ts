import { Publisher, Subjects, TicketCreatedEvent } from "@hieuhochanh/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
