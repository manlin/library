import { Template } from 'meteor/templating';

import './book_add.html';

Template.bookAdd.events({
    "submit form" (e, inst) {
        e.preventDefault();
        inst.$(".btn.btn-default").get(0).disabled = true;
    }
});