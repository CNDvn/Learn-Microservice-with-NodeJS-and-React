import mongoose from "mongoose";
import { Ticket } from "../../../models/ticket";
import { natsWrapper } from "../../../nats-wrapper";
import { OrderCancelledListener } from "../order-cancelled-listener";
import { OrderCancelledEvent } from "@hieuhochanh/common";

const setup = async () => {
  const listener = new OrderCancelledListener(natsWrapper.client);

  const ticket = Ticket.build({
    title: "concert",
    price: 99,
    userId: new mongoose.Types.ObjectId().toHexString(),
  });
  const orderId = new mongoose.Types.ObjectId().toHexString();
  ticket.set({ orderId });
  await ticket.save();

  const data: OrderCancelledEvent["data"] = {
    id: orderId,
    version: 0,
    ticket: {
      id: ticket.id,
    },
  };

  //@ts-ignore
  const msg: Message = { ack: jest.fn() };

  return { listener, ticket, data, msg, orderId };
};

it("updates the ticket, publishes an event, and acks the message", async () => {
  const { data, listener, msg, orderId, ticket } = await setup();

  await listener.onMessage(data, msg);

  const updatedTicket = await Ticket.findById(ticket.id);

  expect(updatedTicket!.orderId).not.toBeDefined();
  expect(msg.ack).toHaveBeenCalled();
  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
