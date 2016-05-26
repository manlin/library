import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './book_add.html';

Template.bookAdd.events({
    "submit form" (e, inst) {
        e.preventDefault();
        inst.$(".btn.btn-default").get(0).disabled = true;

        const isbn = inst.$("#isbn").get(0).value;

        Meteor.call('fetchBookInfoFromDouban', isbn, (err, data) => {
            console.log(data);
            FlowRouter.go('/book/' +  data);
        });
    }
});