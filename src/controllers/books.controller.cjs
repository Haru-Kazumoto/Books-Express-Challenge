let books = [
    { id: 1, title: 'JavaScript Basics', author: 'Angkasa', year: 2020 },
    { id: 2, title: 'Learning Node.js', author: 'Putri', year: 2018 },
    { id: 3, title: 'Express for Beginners', author: 'Ibnu', year: 2019 },
    { id: 4, title: 'Mastering JavaScript', author: 'Naila', year: 2021 },
];

function getBooks(request, response) {
    response.json(books);
}

function getBookById(request, response) {
    const book = books.find(b => b.id === parseInt(request.params.id));

    if (!book) {
        response.json(book);
    } else {
        response.status(404).json({ message: 'Book not found' });
    }
}

function storeBook(request, response) {
    const newBook = {
        id: books.length + 1,
        author: request.body.author,
        year: request.body.year,
    };

    books.push(newBook);

    response.status(201).json(newBook);
}

function updateBook(request, response) {
    const book = books.find(b => b.id === parseInt(request.params.id));

    if (book) {
        book.title = request.body.title || book.title;
        book.author = request.body.author || book.author;
        book.year = request.body.year || book.year;
        response.json(book);
    } else {
        response.status(404).json({ message: 'Book not found' });
    }
}

function deleteBook(request, response) {
    const bookIndex = books.findIndex(b => b.id === parseInt(request.params.id));

    if (bookIndex !== -1) {
        const deletedBook = books.splice(bookIndex, 1);
        response.json(deletedBook);
    } else {
        response.status(404).json({ message: 'Book not found' });
    }
}

module.exports = {
    getBooks,
    getBookById,
    storeBook,
    updateBook,
    deleteBook,
}
