# Yogscast TTT Data
Data created from Yogscast TTT Rounds

## Repo Structure

`data/<videoID>.json`

## Progress

The goal is to have data on every TTT video from 3rd Oct 2017, which is when the [name list](https://yogs-ttt.fandom.com/wiki/Name_List) was first introduced. This makes definitively working out who is which roles and when offscreen deaths occur much easier.

The following totals are estimates based off the [wiki](https://yogs-ttt.fandom.com/wiki) masterlist pages for each year (see 'Useful Links' below).

Year        |   Total Videos
-------     |   ------------
2023        |       34      
2022        |       98      
2021        |       134     
2020        |       141     
2019        |       198     
2018        |       164     
2017 (Oct+) |       34      
Total       |       803     

Depending on the number of rounds in, and the length of, a video cataloguing all events takes roughly 45-60 minutes. So to fully catalogue all required videos is ~33 days of work without breaks.

## Contribute

Follow the instructions in [events.md](events.md)

### New Data

- Create an issue for a set of videos
- Create a new branch
- [Create](https://samlord.co.uk/tools/ttt) the data
- Open a pull request with your changes

### Updating/Creating Old Data

- Open an issue
    - Detail what you think needs changing
    - (Optionally) Wait for feedback
- [Edit](https://samlord.co.uk/tools/ttt) the data
- Open a pull request with your changes

## Data

The data is stored in JSON format for ease of interoperability across any clients that may ingest the data.

The JSON data can be created, edited and viewed using [this tool](https://samlord.co.uk/tools/ttt). Simply copy some JSON into the text box on that page and click the 'Import' button.

Data in each file:
- Video info:
    - Players in the video
    - Video title
    - Youtube video ID 
- Round info:
    - Start Timestamp (in seconds since the start of the video)
    - Initial roles of all players
        - Other than the usual roles, this can be `unknown` if it's impossible to tell, or `spectator` if the player never spawned in the round
    - The following timestamped events:
        - Deaths
        - Ressurections (+ hypnotisms, zombifications)
        - Suicides
        - Role changes
        - Game crashes
        - Soulmates
        - Admin-power use
    - Who won the round

## Useful Links

Video masterlists:
- [2023](https://yogs-ttt.fandom.com/wiki/2023_Episode_Masterlist)
- [2022](https://yogs-ttt.fandom.com/wiki/2022_Episode_Masterlist)
- [2021](https://yogs-ttt.fandom.com/wiki/2021_Episode_Masterlist)
- [2020](https://yogs-ttt.fandom.com/wiki/2020_Episode_Masterlist)
- [2019](https://yogs-ttt.fandom.com/wiki/2019_Episode_Masterlist)
- [2018](https://yogs-ttt.fandom.com/wiki/2018_Episode_Masterlist)
- [2017, Oct](https://yogs-ttt.fandom.com/wiki/2017_Episode_Masterlist?so=search#October)

## Licence Notes

As this project builds off the work done on the TTT [wiki](https://yogs-ttt.fandom.com/wiki), which is distributed under a `Creative Commons Attribution-Share Alike License 3.0`, and in the spirit of sharing, the data in this repository is shared under the [compatible](https://creativecommons.org/share-your-work/licensing-considerations/compatible-licenses/) `Creative Commons Attribution Share Alike 4.0 International` licence. A summary of the licence can be found [here](https://choosealicense.com/licenses/cc-by-sa-4.0/), and the full licence in `LICENSE.md`.