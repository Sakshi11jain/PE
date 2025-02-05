const express = require("express");
const router = express.Router();
const stringSimilarity = require("string-similarity");
const getModel = require("../Models/Question");

// Fetch questions from a specific collection (category)
router.get("/:category", async (req, res) => {
  const { category } = req.params;

  try {
    if (!["frontend", "backend", "fullstack", "hr"].includes(category)) {
      return res.status(400).send("Invalid category");
    }

    const Question = getModel(category); // Dynamically get the correct model
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// Evaluate user's answer
router.post("/evaluate", async (req, res) => {
    const { category, questionId, userAnswer } = req.body;
  
    try {
      if (!["frontend", "backend", "fullstack", "hr"].includes(category)) {
        return res.status(400).send("Invalid category");
      }
  
      const Question = getModel(category);
      const question = await Question.findById(questionId);
  
      if (!question) {
        return res.status(404).send("Question not found");
      }
  
      // Log the expected and user answers for debugging
      console.log("Expected Answer:", question.expectedAnswer);
      console.log("User Answer:", userAnswer);
  
      // Compare similarity using string-similarity
      const similarity = stringSimilarity.compareTwoStrings(
        question.expectedAnswer.trim().toLowerCase(),
        userAnswer.trim().toLowerCase()
      );
  
      console.log("Similarity Score:", similarity); // Debugging similarity score
  
      // Refine the feedback logic based on similarity score
      let feedback;
      if (similarity > 0.8) {
        feedback = "Correct! Your answer is well-articulated.";
      } else if (similarity > 0.6) {
        feedback = "Almost there! Your answer is close. Tip: " + question.feedbackCriteria;
      } else {
        feedback = `Not quite right. Tip: ${question.feedbackCriteria}`;
      }
  
      // Return the feedback
      res.json({ feedback, similarity });
    } catch (error) {
      console.error("Error in evaluating answer:", error);
      res.status(500).send("Server Error");
    }
  });


module.exports = router;
