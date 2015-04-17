/**
 * Created by rynecheow on 17/4/15.
 */

Posts = new SQL.Collection('posts');
console.log(Posts);
Posts.getActiveRecord('posts', 'postgres://bfpg_dev:brainf00d@aws-us-east-1-portal.3.dblayer.com:10046/brainfood');
var postsTable = {
    _id: ['INT', 'AUTO_INCREMENT'],
    text: ['varchar (255)', 'not null'],
    checked: ['BOOL', 'DEFAULT true']
};
Posts.createTable('posts', postsTable);
