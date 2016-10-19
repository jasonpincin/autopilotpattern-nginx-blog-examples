"Nginx and LetsEncrypt on autopilot" examples with SSL
======================================================

To run this example, first edit [docker-compose.yml](docker-compose.yml) and
change the ACME_DOMAIN environment variable in the `nginx` section to a domain
you control. Then you must ensure that requests to that domain are routed to the
Nginx container that `docker-compose` below will start. See the "Nginx and 
LetsEncrypt on autopilot" blog post for additional information. Once done, run
the following:

```bash
docker-compose up -d
curl 'http://localhost/blog/'
curl 'http://localhost/about/'
```
