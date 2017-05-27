"use strict";
var Client = (function () {
    function Client() {
    }
    Client.prototype.getFriends = function () { return this.friends; };
    return Client;
}());
exports.Client = Client;
