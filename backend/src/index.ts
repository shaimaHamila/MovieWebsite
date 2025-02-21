import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import * as bodyParser from "body-parser";
import cors from "cors";
import prisma from "./prisma";
import movieRouter from './routes/MovieRouter';

//For env File
dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(
    cors({
        origin: [
            `${process.env.FRONTEND_URL}`, // Allow requests from your frontend URL
            "http://localhost:3001", // Allow requests from localhost:3000
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);
app.use(bodyParser.json());


const port = process.env.APP_PORT || 6001;


// Graceful shutdown for Prisma
process.on("SIGTERM", async () => {
    await prisma.$disconnect();
    console.log("Prisma disconnected on server termination.");
});

app.get("", async (req: Request, res: Response) => {
    res.send("Welcome to Expres  & backend is connected successfully 🥳");
});

//Routs
app.use("/api/v1/movie", movieRouter)

app.listen(port, () => {
    console.log(`Express is runnung attt http://localhost:${port} 🥳`);
});