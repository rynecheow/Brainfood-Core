/**
 * Created by rynecheow on 16/4/15.
 */

// On Serber startup, create some players if the database is empty.
if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Players.find().count() === 0) {
            var names = ["Ada Lovelace",
                "Grace Hopper",
                "Marie Curie",
                "Carl Friedrich Gauss",
                "Nikola Tesla",
                "Claude Shannon"];
            for (var i = 0; i < names.length; i++) {
                Players.insert({
                    name: names[i],
                    score: Math.floor(Random.fraction() * 10) * 5
                });
            }
        }
    });

    Meteor.publish("players", function () {
        return Players.find();
    });
}
