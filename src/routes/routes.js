const express = require('express');
const bookController = require('../controllers/book.controller.cjs');

const router = express.Router();

router.get('/api/books', bookController.getBooks);
router.get('/api/books/:id', bookController.getBookById);
router.post('/api/books', bookController.storeBook);
router.put('/api/books/:id', bookController.updateBook);
router.delete('/api/books/:id', bookController.deleteBook);
