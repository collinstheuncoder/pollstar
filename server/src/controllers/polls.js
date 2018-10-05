import Poll from '../models/poll';

export default {
  fetchAllPolls: async (req, res) => {
    try {
      const polls = await Poll.find();
      res.status(200).json({ polls });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  fetchSpecificPoll: async (req, res) => {
    const { category, pollId } = req.params;

    try {
      const poll = await Poll.findById(pollId);
      res.status(200).json({ poll });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  voteInPoll: async (req, res) => {
    const { category, pollId } = req.params;
    const { name, choiceId, voterId } = req.body;

    try {
      const poll = await Poll.findById(pollId);

      // Check if user has already voted in poll
      const hasVoted = poll.votedBy.some(voter => voter.equals(voterId));

      if (!voterId) {
        // throw new Error('Sorry, you must be logged in to vote');
        res
          .status(401)
          .json({ message: 'Sorry, you must be logged in to vote' });
      } else if (voterId && hasVoted) {
        //throw new Error('Sorry, you can vote only once');
        res
          .status(401)
          .json({ message: 'Sorry, you have already participated in vote' });
      } else {
        const choice = await poll.choices.id(choiceId);
        const votedChoice = { name, votes: choice.votes + 1 };

        await choice.set(votedChoice);
        await poll.votedBy.push(voterId);
        poll.save();

        res
          .status(200)
          .json({
            message: 'Thank you for voting.',
            poll,
          });
      }
    } catch (error) {
      throw new Error(error);
      // res
      //   .sendStatus(404)
      //   .json({ error: error.message });
    }
  },

  createNewPoll: async (req, res) => {
    const { title, category, choices, addedBy } = req.body;
    const formattedChoices = () =>
      choices.map(choice => {
        const formattedChoice = { name: choice, votes: 0 };
        return formattedChoice;
      });

    try {
      const newPoll = await new Poll({
        title,
        category,
        choices: formattedChoices(),
      });

      poll.addedBy.push(addedBy);
      await newPoll.save();

      res.status(200).json({
        success: true,
        message: 'Successful Submission.',
      });
    } catch (error) {
      res.status(404).json({ error });
    }
  },

  updatePoll: async (req, res) => {
    const { userId } = req.body;

    try {
      const response = await Poll.updateMany({ addedBy: userId });

      console.log(response);
      return res
        .status(200)
        .json({ message: 'Poll has been successfully updated' });
    } catch (error) {
      res.status(404).json({ error });
    }
  },

  deletePoll: async (req, res) => {
    const { pollId } = req.body;

    try {
      // Delete poll whose _id in DB corresponds to id
      Poll.remove({ _id: pollId });
      return res
        .status(200)
        .json({ message: 'Poll has been successfully deleted' });
    } catch (error) {
      res.status(404).json({ error });
    }
  },
};
