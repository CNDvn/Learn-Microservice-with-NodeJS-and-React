import { MongoMemoryServer } from "mongodb-memory-server"
import mongoose from "mongoose"
import request from "supertest"
import { app } from "../app"

declare global {
    var signup: () => Promise<string[]>
}

let mongo: MongoMemoryServer
beforeAll(async () => {
    process.env.JWT_KEY = "abc"
    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri()

    await mongoose.connect(mongoUri, {})
})

beforeEach(async () => {
    const collections = await mongoose.connection.db.collections()

    for (let collection of collections) {
        await collection.deleteMany({})
    }
})

afterAll(async () => {
    if (mongo) {
        await mongo.stop();
    }
    await mongoose.connection.close();
});


global.signup = async (): Promise<string[]> => {
    const email = "test@gmail.com"
    const password = "password"

    const response = await request(app)
        .post("/api/users/signup")
        .send({
            email, password
        })
        .expect(201)

    const cookie = response.get("Set-Cookie")
    return cookie as string[]
}