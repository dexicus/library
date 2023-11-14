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
        const bookValues = Object.values(book);
        const bookKeys = Object.keys(book);
        const index = myLibrary.indexOf(book);
        createBook(index,bookValues,bookKeys);
    });
};


function createBook(index,bookValues,bookKeys) {
    const card = document.createElement('div');
    document.getElementById('main').appendChild(card);
    card.classList.add('book-card')
    for (i=0; i < bookValues.length; i++) {
        if (bookKeys[i] == 'isRead') {
            if (bookValues[i] === true) {
                const label = document.createElement('label');
                const checkbox = document.createElement('input');
                card.append(label);
                label.classList.add('book-info');
                label.textContent = `read: `;
                label.append(checkbox);
                card.classList.add('book-read');
                checkbox.setAttribute('type', 'checkbox')
                checkbox.checked = true;
                checkbox.addEventListener('change', () => {
                    isRead(card,myLibrary[index])
                })
            } else {
                const label = document.createElement('label');
                const checkbox = document.createElement('input');
                card.append(label);
                label.classList.add('book-info');
                label.textContent = `read: `;
                label.append(checkbox);
                card.classList.add('book-notread');
                checkbox.setAttribute('type', 'checkbox')
                checkbox.checked = false;
                checkbox.addEventListener('change', () => {
                    isRead(card,myLibrary[index])
                })
            }
        } else {
            const info = document.createElement('div');
            card.append(info);
            info.classList.add('book-info');
            info.textContent = `${bookKeys[i]}: ${bookValues[i]}`;
        }
        card.setAttribute('data-attribute', index)
    }
    const removeBtn = document.createElement('button');
    card.append(removeBtn);
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        deleteBook(card,index);
    })
};

function deleteBook(card,index) {
    if (index > -1) {
        myLibrary.splice(index, 1);
    }
    displayLibrary(myLibrary)
}

function deleteLibrary() {
    const books = document.getElementById('main');
    while (books.firstChild) {
        books.removeChild(books.firstChild);
      }
}

function isRead(card,index) {
    if (index.isRead == true) {
        index.isRead = false;
        card.classList.remove('book-read');
        card.classList.add('book-notread');
    } else if (index.isRead == false) {
        index.isRead = true;
        card.classList.add('book-read');
        card.classList.remove('book-notread');
    }
}

displayLibrary(myLibrary);

document.getElementById('addBook').addEventListener('click', addBookToLibrary);
