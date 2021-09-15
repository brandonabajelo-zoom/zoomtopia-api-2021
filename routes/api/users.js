const express = require('express');
const axios = require('axios');

const { errorHandler, generateHeader } = require('../../helpers');

const router = express.Router();

// Get User Meetings
router.get('/:userId/meetings', async (req, res) => {
  const { userId } = req.params;
  try {
    const response = await axios.get(`/users/${userId}/meetings`, generateHeader());
    res.json(response.data);
  } catch (err) {
    errorHandler(err, res, `Error fetching meetings for user: ${userId}`);
  }
});

/**
 * Get Meeting Participants
 */
 router.get('/:userId/report/:meetingId/participants', async (req, res) => {
  const { meetingId } = req.params;
  try {
    const response = await axios.get(`/report/meetings/${meetingId}/participants`, generateHeader());
    res.json(response.data);
  } catch (err) {
    errorHandler(err, res, `Error fetching participants for meeting: ${meetingId}`);
  }
});

module.exports = router;