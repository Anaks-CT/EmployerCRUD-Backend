import express from 'express'
import ExpressMongoSanitize from 'express-mongo-sanitize';
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/employer.routes';
import { errorHandler } from './error/errorHandler';
import dbConnection from './config/database';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  ExpressMongoSanitize({
    allowDots: true,
  })
);

// configuring cors
app.use(  
  cors({
    origin: [process.env.ORIGIN_URL as string],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);


// routes
app.use('/api/v1/employer', router)
// app.use("*", notFound);

// golbal error handler
app.use(errorHandler);

// connecting to database
dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
