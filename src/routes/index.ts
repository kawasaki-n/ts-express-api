import { Router } from 'express';

import BookRouter from './Books';
import UserRouter from './Users';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/books', BookRouter);

// Export the base-router
export default router;
