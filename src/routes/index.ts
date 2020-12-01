import { Router } from 'express';
import UserRouter from './Users';
import BookRouter from './Books';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/books', BookRouter);

// Export the base-router
export default router;
