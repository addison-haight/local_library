const books = [
  {
    id: "5f447132d487bd81da01e25e",
    title: "sit eiusmod occaecat eu magna",
    genre: "Science",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2eed18105706d6ca19",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471329627160be1e8ce92",
    title: "esse ea veniam non occaecat",
    genre: "Classics",
    authorId: 10,
    borrows: [
      {
        id: "5f446f2ed3609b719568a415",
        returned: false,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
    ],
  }]

function getTotalBooksCount(books) {
  // YOUR SOLUTION HERE
  const result = books.length;
  return result;

}

function getTotalAccountsCount(accounts) {
  // YOUR SOLUTION HERE
  const result = accounts.length;
  return result;
  
}

function getBooksBorrowedCount(books) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method here. 
  // If you get stuck, feel free to take a look at this repl.it: https://replit.com/@thinkful/getBooksBorrowedCount#index.js
  return books.filter((book) => {
    const recent = book.borrows[0];
    return recent.returned === false;}).length;
}

console.log(getBooksBorrowedCount(books));

// Tbis is a helper function that's called by other functions inside this file. You don't have to edit it.
function _sortObjectByValues(obj) {
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB) => {
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else if (obj[keyB] > obj[keyA]) {
      return 1;
    } else {
      return 0;
    }
  });
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getMostCommonGenres(books) {
  const count = books.reduce((acc, { genre }) => {
    if (acc[genre]) {
      acc[genre] += 1;
    } else {
      acc[genre] = 1;
    }

    return acc;
  }, {});

  const sorted = _sortObjectByValues(count);
  return sorted.map((name) => ({ name, count: count[name] })).slice(0, 5);
}

function getMostPopularBooks(books) {
  const groupById = books.reduce((acc, { id, borrows }) => {
    acc[id] = borrows.length;
    return acc;
  }, {});

  const sorted = _sortObjectByValues(groupById);
  return sorted
    .map((id) => {
      const { title: name } = books.find(({ id: bookId }) => bookId === id);
      return { name, count: groupById[id] };
    })
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const count = books.reduce((acc, { authorId, borrows }) => {
    if (acc[authorId]) {
      acc[authorId].push(borrows.length);
    } else {
      acc[authorId] = [borrows.length];
    }

    return acc;
  }, {});

  for (let id in count) {
    const sum = count[id].reduce((a, b) => a + b);
    count[id] = sum;
  }

  const sorted = _sortObjectByValues(count);
  return sorted
    .map((authorId) => {
      const {
        name: { first, last },
      } = authors.find(({ id }) => id === Number(authorId));
      const name = `${first} ${last}`;
      return { name, count: count[authorId] };
    })
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
