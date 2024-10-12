import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@hieuhochanh/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
