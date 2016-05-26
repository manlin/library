function extractBookInfo(data) {
    let book = {
        "title": data.title,
        "author": data.author,
        "author_intro": data["author_intro"],
        "alt": data.alt,
        "image": data["image"],
        "images": data["images"],
        "isbn10": data["isbn10"],
        "isbn13": data["isbn13"],
        "pubdate": data["pubdate"],
        "publisher": data["publisher"],
        "summary": data["summary"],
        "tags": []
    };
    if(data.tags && data.tags.length > 0) {
        _.each(data.tags, (tag) => {
            if(!~book.tags.indexOf(tag.title)) book.tags.push(tag.title);
        });
    }

    return book;
}

export const  fetchBookInfoViaISBN = function(isbn)  {
            //try {
                var uri = 'http://api.douban.com/v2/book/isbn/' + isbn;
                var result = HTTP.call('GET', uri);
                return extractBookInfo(result.data);
            //}
            //catch(e) {
            //    console.log('>> in fetchBookInfoViaISBN:');
            //    console.log(e.message);
            //    return false;
            //}    
}