import { Publisher, Subjects, TicketUpdatedEvent } from "@hieuhochanh/common";

export class TicketUpdatePublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
