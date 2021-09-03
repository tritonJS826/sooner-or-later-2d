Sooner or later
===============

Run all services in docker (temporary it is dev mode):

*sudo docker-compose up --build --force-recreate*

After that next services will be running:

* rest staticDataServer: localhost:5000
* mongoDB: localhost:27017 (absent)
* websockets server: localhost:5002
* hosts portst: localhost:5500-6000 (absent)
* frontend server: localhost:3000

Stop all services:
------------------

*sudo docker-compose down*

Clear all docker entities:
--------------------------

*sudo docker system prune -a*


---


[ABOUT.md](./docs/ABOUT.md) - short project description

[USER_STORIES.md](./docs/USER_STORIES.md) - user stories (for high level understanding the process)
