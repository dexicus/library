const myLibrary = [
    {
        "title": 'Harry Potter',
        "author": 'JK Rowling',
        "pages": '600',
        "isRead": false
    },
    {
        "title": 'Lord of the Rings',
        "author": 'Tolkein',
        "pages": '610',
        "isRead": false
    },
    {
        "title": 'Atomic Habits',
        "author": 'James Clear',
        "pages": '320',
        "isRead": true
    }
];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}


function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').checked;
    if ((title || author || pages) == '' || null) 
        return
    else (
        myLibrary.push(new Book(title, author, pages, isRead))
        );
    displayLibrary(myLibrary);
};


function displayLibrary(myLibrary) {
    deleteLibrary();
    myLibrary.forEach(function (book) {
        const bookInfo = Object.values(book)
        createCard(bookInfo)
    });
};


function createCard(bookInfo) {
    const card = document.createElement('div');
    document.getElementById('books').appendChild(card);
    card.classList.add('book-card')
    for (i=0; i < bookInfo.length; i++) {
        const info = document.createElement('div');
        card.append(info);
        info.classList.add('book-info')
        info.textContent = bookInfo[i];
    }
};

function deleteLibrary() {
    const books = document.getElementById('books');
    while (books.firstChild) {
        books.removeChild(books.firstChild);
      }
}


displayLibrary(myLibrary);

document.getElementById('addBook').addEventListener('click', addBookToLibrary);