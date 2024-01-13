# Events

## Tooling

There is a tool available to generate and view the data [here](https://samlord.co.uk/tools/ttt).

### How

- Find a video you wish to log the events for on YouTube and copy/paste the URL (or just the video ID) into the `Load Video` text box in the tool, and click the button. You can also select a date from the calendar and then select a video from that month to load.
    - If a video has already been processed and it's data merged into the repo, the tool will load the data from this repository when the video loads.
    - If the video has not been processed, then you will have to start from a blank file
    - To load local data, paste it into the `Import` text box and click the button. The video will be loaded automatically.
- Next, add each player that is in the video by entering each name in the text box and clicking the `Add Player` button
- Click `New Round` to add a new gameplay round
    - If you need to edit a different round to the currently selected one at any time, choose the round number from the dropdown and click the `Set Active Round` button (this will only display once at least one round has been created)
- The instant the first round starts (countdown finishes and players get their starting roles) click `Set Round Start Time`
- As the round progresses:
    - Fill out the initial roles, as they are revealed. When all starting roles have been filled out click `Set Initial Roles`
    - Add actions and role changes as they occur. These are timestamped using the video playhead position.
    - Record any Time Jumps (see below)
- When the round ends, record the winning side(s). Then, create a new round and repeat until the video ends.
- Finally, click `Export`. A file should download named `\<videoid\>.json`. This can be added to the repo.

For an example of a complete processed video try loading `329BUNbvbVo`.

## Time Jumps

Some rounds have small cuts in them. You should always record these cuts using the 'Time Jumps' input.

Any events that occur within the cut portion of video should be added between the `Start` and `End` timestamps of the jump. These will be flagged as being in the cut in the round summary on the right.

## More complex events

Most events/actions are self explanatory- `x killed y`, `z died` etc. Some events are slightly more involved, and these are explained below.

### Suicide vs Death vs Kill

This is mostly decided based on intention. If the player meant to cause themselves harm, even if the end goal was not to die (like in early Jester plays where players would try to lower their health and sometime die in the process), then the death is recorded as a suicide. Otherwise, the death is simply recorded as a normal death, or a kill if instigated by another player. The only exception to this is 'barrel justice' which is recorded separately.

### '\<playerA> Barrel Justiced \<playerB>'

If a player kills another player by shooting a barrel then it is recorded as a barrel justice event. There is no need to record the death as a separate event.

In the case where the barrel explodes, but no-one is killed then no event is recorded.

### '\<player> died offscreen earlier'

This event indicates that it has become apparent that a player died earlier in the round (eg a cut to them in spectator cam occurs), but it is impossible to tell when they died.

### Zombie kills

These are recorded as several sequential events.

First timestamp:
- ZombieA killed B
- B died

Second timestamp:
- B role change to zombie
- B respawned

Note that the `zombified` event refers to a Mad Scientist ressurecting someone into a zombie, not a zombie kill (see below).

### Ressurection

When a player uses a device to bring another player back from the dead record a `ressurected` event, unless they are a Mad Scientist resurrecting someone into a zombie in which case use the `zombified` event. 

### Swapper kills

Simply record a `swapped with` - the death and respawn of each person is implied and should not be added as separate events.

### Hivemind kills

For a hivemind kill, record a "hivemind recruited" event. As with swapper kills, the death and respawn is implied.

### Guesser swaps

Record an `x guess-swapped with y` event. Do not add any swapped events, they're implied, and would be at the same timestamp.

### Golden gun kills

Record both the `golden gunned` action and the outcome on the same timestamp. This is required as a golden gun can result in the shooter, shootee or both dying.

## Future Data

The following data points are currently untracked but could be useful to add in the future:

- Cause of death (weapon, falling etc)
- Active randomats (`x activated randomat y`, `randomat z started`)
