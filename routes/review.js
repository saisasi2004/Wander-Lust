const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn , isReviewAuthor , validateReview} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// POST Review Route
router.post("/", validateReview,isLoggedIn, wrapAsync(reviewController.createReview));

// DELETE Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,  wrapAsync(reviewController.deleteReview));

module.exports = router;