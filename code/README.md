Sooner or later
===============

Run all services in docker (temporary it is dev mode):

*sudo docker-compose up --build --force-recreate*

After that next services will be running:

* SDS(staticDataServer): localhost:5000
* LWSS(lobby webSockets server): localhost:5002
* GWSS(hosts portst): localhost:5500-6000 (absent)
* FS(frontend server): localhost:3000

Stop all services:
------------------

*sudo docker-compose down*

Clear all docker entities:
--------------------------

*sudo docker system prune -a*


---

[USER_STORIES.md](../docs/USER_STORIES.md) - user stories (for high level understanding the game process)
