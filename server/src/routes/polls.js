import express from 'express';

import { pollsController } from '../controllers';
import Poll from '../models/poll';

const pollsRouter = express.Router();

// Request Polls List
pollsRouter
	.route('/')
	.get(pollsController.fetchAllPolls);

// Create New Poll
pollsRouter
	.route('/new')
	.post(pollsController.createNewPoll);

pollsRouter
	.route('/:userId')
	.get(async (req, res) => {
		try {
			const polls = await Poll.find({ addedBy: req.params.userId });

			res.status(200).send({
				polls,
			})
		} catch (error) {
			console.log(error.message)
		}
	});

// Request Individual Poll
pollsRouter
	.route('/:category/:pollId')
	.get(pollsController.fetchSpecificPoll);

// Vote in a Poll
pollsRouter
	.route('/:category/:pollId/vote')
	.post(pollsController.voteInPoll);

// Update Poll
pollsRouter
	.route('/:category/:pollId/update')
	.patch(pollsController.updatePoll);

// Delete Poll
pollsRouter
  .route('/:category/:pollId/delete')
  .delete(pollsController.deletePoll);

export default pollsRouter;
