# Yogscast TTT Data
Data created from Yogscast TTT Rounds

## Repo Structure

`data/<year>/<videoID>.json`

The JSON data is generated using [this tool](https://samlord.co.uk/tools/ttt).

## Data

The data is stored in JSON format for each of interoperability across any clients that may ingest the data. The following data is included:

By round:
- Round begins timestamp (in seconds since the start of the video)
- The following timestamped events: Deaths, ressurections (+ hypnotisms, zombifications), suicides, role changes, game crashes, soul mates and admin power use.
- Who won the round.

### Suicide vs Death vs Kill

This is mostly decided based on intention. If the player meant to cause themselves harm, even if the end goal was not to die (like in early Jester plays where players would try to lower their health and sometime die in the process), then the death is recorded as a suicide. Otherwise, the death is simply recorded as a normal death, or a kill if instigated by another player. The only exception to this is 'barrel justice' which is recorded separately.

### Zombie kills

These are recorded as several sequential events.

First timestamp:
- ZombieA killed B
- B died

Second timestamp:
- B role change to zombie
- B respawned

### Swapper kills

These are recorded as several events with the same timestamp.

- A killed B
- B respawned
- A role change to swapper
- B role change to A's previous role

## Progress

The goal is to have data on every TTT video from 3rd Oct 2017, which is when the [name list](https://yogs-ttt.fandom.com/wiki/Name_List) was first introduced. This makes definitively working out who is which roles and when offscreen deaths occur much easier.

The following totals are estimates based off the [wiki](https://yogs-ttt.fandom.com/wiki) masterlist pages for each year (see 'Useful Links' below).

Year        |   Total Videos    |  Data Collected
-------     |   ------------    |   -------------
2023        |       34          |       9
2022        |       98          |       0
2021        |       134         |       0
2020        |       141         |       0
2019        |       198         |       0
2018        |       164         |       0
2017 (Oct+) |       34          |       4

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