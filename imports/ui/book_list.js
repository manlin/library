import { Template } from 'meteor/templating';
import { Books } from '../api/books.js';

import './book_list.html';

Template.bookList.onCreated(function onBookListCreated() {
    Meteor.subscribe("books");
});

Template.bookList.helpers({
    books () {
        return Books.find({});
    }
});