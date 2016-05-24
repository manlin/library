import { Mongo } from 'meteor/mongo';

export const Books = new Mongo.Collection("books");

if(Meteor.isServer) {
    Meteor.publish("books", () => {
        return Books.find({});
    });

    Meteor.publish("book", (_id) => {
        return Books.find({_id: _id});
    });
}