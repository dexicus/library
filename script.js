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
};

function displayLibrary(myLibrary) {
    myLibrary.forEach(function (book) {
        const card = document.createElement('div');
        document.getElementById('main').appendChild(card);
        card.classList.add('book-card')
        const title = createCard(book);
        document.card.appendChild(card)
    });
};


function createCard(book) {
    for (property in book) {
        const info = document.createElement('div');
        if (property == 'title') {
            return(book[property])
        }
    }
};




document.getElementById('addBook').addEventListener('click', addBookToLibrary);