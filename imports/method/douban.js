import { HTTP } from 'meteor/http';

if(Meteor.isServer) {
    Meteor.methods({
        fetchBookInfoFromDouban: (isbn) => {
            //this.unblock();
            try {
                var uri = 'http://api.douban.com/v2/book/isbn/' + isbn;
                var result = HTTP.call('GET', uri);
                console.log(result.data);
                return result;
            }
            catch(e) {
                console.log('err');
                console.log(e);
                return false;
            }
        }
    });
}