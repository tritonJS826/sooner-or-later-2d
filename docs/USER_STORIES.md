Sooner or later is a framework for creating interactive tests that can be run in a lot of user mode. There are two different types of users: world creators and players.

World Creator user-story:
-------------------------

There is a person who wants (for example) to teach someone to add numbers. Then he:

* Thinks over a set of various questions related to the addition of numbers, determines the correct answers for them, intervals, penalties, and so on.  

* Uploads your own styles / textures or selects the most appropriate ones from those provided by the developers.

* It is possible to add additional instructions or storyline by adding text / audio / video content to the beginning of the level, and the end (for a successful end and in case of defeat).

* Uploads all this data to the server and after a preliminary check on our service, people get the opportunity to use this test.

---

Player user-story:
------------------

There is a person who wants (for example) to learn how to add numbers. Then he:

* He decides if he wants to compete in solving tests, take them in co-op or solo. Enters the corresponding menu.

* Selects a world with a specific set of tests for training. Selects the difficulty level for the given world and other settings.

* It is possible to continue passing from the level next to the last completed level in this world.

* After setting all the settings and, if necessary, waiting for the co-players to connect, the game starts: the player's hero is displayed on the stage with the selected textures.

* In the simplest case, the heroes of the players during the game stand still at the bottom of the screen, the enemies move towards them (the enemy chooses the target-hero randomly) from the top side of the screen.

* The player can capture the target (enemy) with a mouse click or hot keys. When capturing, information about the enemy is displayed on the sidebar (question + possibly a plot component) and a means for entering an answer (input for manual text input or checkbox or radio, etc.).

* After entering the correct answer, the target is hit or damaged (can be useful for touch typing).

* The player continues to capture and destroy targets until the end of the level.

* If the time for the question has expired (the enemy has reached the hero), then the hero is dealt a certain amount of damage), the correct answer is displayed for a while.

* After completing the level, the statistics of the passage and the answers to the questions to which the wrong answers were given + possibly the plot component are displayed.

* After completing a level, all players have access to the next level of this world.

* It is assumed that after passing all the levels of the world, the player's level of understanding of the studied topic should increase.

* There is an opportunity to pass the level at higher difficulty (speed) for additional training
---
