import { Books } from '../imports/api/books.js';
import { fetchBookInfoViaISBN } from '../imports/lib/douban.js';

const isbns = [
    {
        'title': '深入浅出Node.js',
        'isbn': '9787115335500'
    },
    {
        'title': 'C程序设计语言',
        'isbn': '9787111128069'
    },
    {
        'title': '代码大全（第2版）',
        'isbn': '9787121022982'
    },
    {
        'title': '算法导论（原书第2版）',
        'isbn': '9787111187776'
    }
];

const data = [
    {
        "title": "ECMAScript6入门",
        "pages": 145,
        "author": "阮一峰",
        "isbn13": "9787121238369",
        "author-intro": "阮一峰：著名技术博客作者，JavaScript专家。专注于网站开发技术，超过十年。畅销书《黑客与画家》《软件随想录》的译者。",
        "tags": [
            "JavaScript",
            "ECMAScript6",
            "前端",
            "编程",
            "Web"
        ]
    }
];

if(Books.find({}).count() === 0) {
   /*
    _.each(data, (item) => {
        Books.insert(item);
    });
    */

    _.each(isbns, (isbn) => {
        let book = fetchBookInfoViaISBN(isbn.isbn);
        console.log(book);
        if(book) Books.insert(book);
    });
}