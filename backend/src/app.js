import express from "express";
import cors from 'cors';
import morgan from "morgan";

import tasksRoutes from "./routes/tasks"

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import {options} from "./swaggerOption"


const app = express();
const specs = swaggerJsdoc(options);

app.set("port", 3002);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(tasksRoutes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;