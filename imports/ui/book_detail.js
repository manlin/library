import { Template } from 'meteor/templating';
import { Books } from '../api/books.js';

import './book_detail.html';

Template.bookDetail.onCreated(function onBookDetailCreated() {
    this.subscribe("book", FlowRouter.getParam("_id"));
});

Template.bookDetail.helpers({
    title () {
        const _id = FlowRouter.getParam('_id');
        console.log('Book id: ', _id);
        return Books.findOne({_id: _id}) ? Books.findOne({_id: _id}).title : '';
    }
});