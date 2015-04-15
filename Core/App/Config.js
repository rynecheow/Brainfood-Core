/**
 * Created by rynecheow on 15/4/15.
 */

App = {
    id: "ykudxntigeoq13xkn8b",
    name: "Brainfood",
    version: "0.1",
    //    baseUrl: "http://128.199.173.212:3007", //baseUrl from your hosting IP address
    baseUrl: "http://localhost:3000",
//    mongoUrl: 'mongodb://demo:demo@localhost:27017/meteoris', //mongoUrl from your hosting IP address
//    mongoUrl: 'mongodb://localhost:3001/meteor/',
    postgresURL: ''
};


/**
 * Don't edit this if you don't know what exactly are you doing
 */
UI.registerHelper('app', function (option, value) {
    return App[option];
});