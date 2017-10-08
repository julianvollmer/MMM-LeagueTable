# MMM-LeagueTable

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

Displays the actual of your favorite league.

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: 'MMM-LeagueTable',
            position: 'top_left',  // This can be any of the regions. Best results in left or right regions.
            header: 'Logo', // Topic of your modul.
            config: {
                height: "100px", //has to be adjust by hand at the moment
                width: "150px", //has to be adjust by hand at the moment
                options: {
                  url: 'http://api.football-data.org/v1/soccerseasons/',
                  headers: {'X-Auth-Token': 'YOUR_TOKEN'},
                  shortNameLeague: "BL1",
                  shortNameTeam: "HSV",
                },
            }
        }
    ]
}
```

## Configuration options

| Option                    | Description
|-------------------------- |-----------
| `X-Auth-Token`            | *Required* You can get it from [here](http://football-data.org/index).
| `shortNameLeague`         | *Required* Short name of your League
| `shortNameTeam`           | *Required* Short name of your team. Team must be in the League.

Names for the different leagues:

|Short Name | Long Name
|-----|----
| AAL | Australian A-League
| CL  | Champions League 2017/18
| SB  | Serie B 2017/18
| DFB | DFB-Pokal 2017/18
| PPL | Primeira Liga 2017/18
| SA  | Serie A 2017/18
| PD  | Primera Division 2017
| BL2 | 2. Bundesliga 2017/18
| BL1 | 1. Bundesliga 2017/18
| FL2 | Ligue 2 2017/18
| FL1 | Ligue 1 2017/18
| DED | Eredivisie 2017/18
| EL2 | League Two 2017/18
| EL1 | League One 2017/18
| ELC | Championship 2017/18
| PL  | Premier League 2017/18
| BSA | Campeonato Brasileiro da Série A