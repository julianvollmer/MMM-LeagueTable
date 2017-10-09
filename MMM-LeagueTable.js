Module.register("MMM-LeagueTable",{
    defaults: {
        text: "Hello World!",
        lists: "some list",
        width: "100px",
        options: {
          url: 'http://api.football-data.org/v1/soccerseasons/', 
          headers: {'X-Auth-Token': 'YOUR_TOKEN'},
          shortNameLeague: "BL1",
          shortNameTeam: "HSV",
          nextGamesView: 4,
          lastGamesView: 4,
        },
    },

    socketNotificationReceived: function(notification, payload) {

        if(notification === 'GET_LEAGUETABLE'){
          this.leagueTableItem = payload;
          this.updateDom(3000); 
        }

    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("table");  
        wrapper.className = "normal small light";
        wrapper.maxWidth = this.config.width;
        if(this.leagueTableItem.length === 0){
          wrapper.innerHTML = "Keine Spiele datiert"
        }
        else{
          for (var i = 0; i < this.leagueTableItem.length; i++) {
              var row = document.createElement("tr");
              var position = document.createElement("td");
              position.style.width = '30px';
              position.innerHTML = this.leagueTableItem[i].position;
              position.className = "title bright";
              var  logo= document.createElement("img");
              logo.src = this.leagueTableItem[i].imgUrl;
              logo.className = "logo";
              var teamName = document.createElement("td");
              // teamName.style.width = '220px';
              teamName.innerHTML = this.leagueTableItem[i].teamName;
              teamName.className = "title bright";
              var points = document.createElement("td");
              points.style.width = '30px';
              points.innerHTML = this.leagueTableItem[i].points;
              points.className = "title bright";
              row.appendChild(position);
              row.appendChild(logo);
              row.appendChild(teamName);
              row.appendChild(points);
              wrapper.appendChild(row);
          }
        }
        return wrapper;
    },

    start: function() {        
        this.leagueTableItem = [];
        this.sendSocketNotification("CONNECTED", this.config.options);
        this.update();
    },

    update: function () {
        this.sendSocketNotification("UPDATEUI", "options");
    },
    getStyles: function() {
      return ["leagueTable.css"];
    },
  
});
