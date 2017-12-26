Metering Stack
==============
To get started:

```shell
$ docker-compose up
```

Once up and running, put some load on the dummy application:

```shell
$ ab -n 100000 -c 100 http://localtest.me/
```

Then open a browser to http://grafana.localtest.me. Log-in as *admin* (default
password *admin*), and browse through the pre-provisioned dashboards.
