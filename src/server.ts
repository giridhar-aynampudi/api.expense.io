import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: Security headers
app.use(helmet());

// Middleware: Enable CORS (adjust origin as needed)
app.use(cors({
  origin: 'http://localhost:3001', // or '*' for all, but be cautious in prod
  credentials: true,
}));

// Middleware: HTTP request logger
app.use(morgan('dev'));

// Middleware: JSON body parsing
app.use(express.json());

// Middleware: URL-encoded body parsing (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello Expense Tracker API with Middleware!');
});

// Centralized error handler example
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
