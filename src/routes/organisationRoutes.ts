import express from 'express';

const router = express.Router();

// getAll companies
router.get('/');
// getById
router.get('/:companyId');
// get the team of a company by team and company id
router.get('/:companyId/team/:teamId');
// get all teams from a company
router.get('/:companyId/team');
export default router;
