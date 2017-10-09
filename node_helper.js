"use strict";
var Football = require('football-data-api');

var fball = null;

module.exports = NodeHelper.create({

	socketNotificationReceived: function(notification, payload) {
		
		if(notification === "CONNECTED"){
			console.log(this.name + " ************* received a socket notification: " + notification + " - Payload: " + JSON.stringify(payload, null, 4 ));
			fball = new Football(payload)
		}

		if (notification === "LOG"){
			console.log("LOG_GET_LEAGUETABLE");
			console.log(payload);
		}

		if (notification === "GET_LEAGUETABLE"){
			console.log("GET_LEAGUETABLE");
			console.log(payload);
		}
	},

    start: function() {        
        this.sendSocketNotification("CONNECTED", "connected");
        this.update();
    },

    update: function () {
    	var self = this;
        self.sendSocketNotification("UPDATEUI", "options");
        setTimeout(function() {
        	var table = fball.leagueTable.getTable();
			for (var i = table.length - 1; i >= 0; i--) {
				var item = table[i];
				item.teamName = fball.team.getShortNameFromLongName(item.teamName);
			}
        	table.sort(fball.helper.sortBy('position', false, parseInt));
        	self.sendSocketNotification("GET_LEAGUETABLE", table);
        }, 20000);
    }
});

