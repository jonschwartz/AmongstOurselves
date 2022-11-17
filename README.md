# Amongst Ourselves
### A "clone" of Among Us but without the violence
----

## Overview
This project is being done live via Twitch infrequently https://twitch.tv/jmannnn82/

We're trying to build a game similar to Among Us featuring zero violence.  This game instead will have a secret "dream fairy" who puts teammates "to sleep."  When someone finds a teammate sleeping, they can call a meeting to try to find the dream fairy.  If they accuse someone, the dream fairy is put in their bed and is also asleep.

Sleeping people can "dream" about what their teammates are doing but should not say anything if they see the dream fairy putting other teammates to sleep.


----
Things we Need to make this work:

- Interactivity
    - players need to be able to move themselves around the game
    - games need to be able to be played on multiple windows (2+ players)
- Players
    - need to be able to sleep
    - need to have some tasks
    - need to be able to call a conference
    - need to be able to be woken up
    - needs to be able to move around the map

- Map
    - Dream Passages

- Room
    - doors
    - walls
        - players cannot see through walls
    - activities

----

## Changelog

### Nov 16, 2022
* Converted to p5js and Matter JS libraries
* Added live-server for testing but it's not secure so probably going to revert at some point
* converted rooms from rects to sets of lines

### Oct 12, 2022

* Players can now
    * have a color
    * one player can be flagged as the dream fairy
    * players can have a map position
    * players can know what room they're in

* Maps can now
    * have rooms
    * have a width
    * have a height

* Rooms can now
    * have an x dimension
    * have a y dimension
    * have a width
    * have a height