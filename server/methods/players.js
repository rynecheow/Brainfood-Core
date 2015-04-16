/**
 * Created by rynecheow on 16/4/15.
 */
Meteor.methods({
    addPoints: function (userId, points) {
        Players.update(userId, {$inc: {score: +points}});
    }
});