import { NotFoundError, currentUser, errorHandler } from "@hieuhochanh/common";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import "express-async-errors";
import { createTicketRouter } from "./routers/new";
import { showTicketRouter } from "./routers/show";
import { indexTicketRouter } from "./routers";
import { updateTicketRouter } from "./routers/update";


const app = express();
app.set("trust proxy", true)
app.use(json());
app.use(cookieSession({ signed: false, secure: process.env.NODE_ENV !== "test" }))

app.use(currentUser)
app.use(createTicketRouter)
app.use(showTicketRouter)
app.use(indexTicketRouter)
app.use(updateTicketRouter)
app.all("*", async () => { throw new NotFoundError() })

app.use(errorHandler)

export { app }