import { HTTP } from 'meteor/http';
import { Books } from '../api/books.js';
import { fetchBookInfoViaISBN } from '../lib/douban.js';
// import Douban from '../lib/douban.js';  ==== 这么写，　Douban 是 undefined, 为什么？


if(Meteor.isServer) {
    Meteor.methods({
        fetchBookInfoFromDouban: (isbn) => {
            //this.unblock();
            try {
                let bk = Books.findOne({$or: [{'isbn10': isbn}, {'isbn13': isbn}]});
                if(bk) return bk._id;

                let book = fetchBookInfoViaISBN(isbn);
                return Books.insert(book);
            }
            catch(e) {
                console.log('>> in fetchBookInfoViaISBN:');
                console.log(e);
                let msg = {
                    statusCode: e.response.statusCode,
                    message: e.response.content
                };
                throw new Meteor.Error(msg.statusCode, msg.message);
            }
        }
    });
}