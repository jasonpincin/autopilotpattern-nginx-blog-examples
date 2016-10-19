Examples for "Nginx and LetsEncrypt on autopilot"
=================================================

## without-ssl

The examples in the `without-ssl` directory should be executable without
modification. They will result in a running application that listens on http
(port 80) only. To try it:

```bash
cd without-ssl
docker-compose up -d
curl 'http://localhost/blog/'
curl 'http://localhost/about/'
```

## with-ssl

The examples in the `with-ssl` directory require you to update the
[docker-compose.yml](without-ssl/docker-compose.yml) file and change the
ACME_DOMAIN environment variable in the `nginx` section to a domain you control.
You must then ensure requests to that domain are routed to the Nginx container
started by `docker-compose`. See the "Nginx and LetsEncrypt on autopilot" blog
post for additional information. After these steps are completed, you can run:

```bash
cd with-ssl
docker-compose up -d
curl 'http://localhost/blog/'
curl 'http://localhost/about/'
```
