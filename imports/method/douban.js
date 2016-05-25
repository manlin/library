import { HTTP } from 'meteor/http';
import { fetchBookInfoViaISBN } from '../lib/douban.js';
// import Douban from '../lib/douban.js';  ==== 这么写，　Douban 是 undefined, 为什么？


if(Meteor.isServer) {
    Meteor.methods({
        fetchBookInfoFromDouban: (isbn) => {
            //this.unblock();
            try {
                let book = fetchBookInfoViaISBN(isbn);
                return book;
            }
            catch(e) {
                return e.message;
            }
        }
    });
}