// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

function readingList(books) {
  const list = document.getElementById("reading-list");

  for (const book of books) {
    const li = document.createElement("li");
    li.style.backgroundColor = book.alreadyRead ? "lightgreen" : "lightcoral";

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = book.author;

    const img = document.createElement("img");
    img.src = book.bookCoverImage;
    img.alt = book.title;

    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(author);
    list.appendChild(li);
  }
}

readingList(books);

