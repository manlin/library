import '../ui/layout.html';
import '../ui/book_list.js';
import '../ui/book_detail.js';
import '../ui/book_add.js';

FlowRouter.route('/', {
    action () {
        BlazeLayout.render("layout", {main: "bookList"});
    }
});

FlowRouter.route('/book/:_id', {
    action(params, queryParams) {
        console.log(params)
        BlazeLayout.render('layout', {main: "bookDetail"});
    }
});

FlowRouter.route('/addbook', {
    action() {
        BlazeLayout.render('layout', {main: "bookAdd"});
    }
});