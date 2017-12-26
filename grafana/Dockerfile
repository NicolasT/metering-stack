FROM 6873d716ec56
# Current grafana/grafana:master

ADD datasources/prometheus.yml /etc/grafana/provisioning/datasources/prometheus.yml
ADD dashboards/default-config.yml /etc/grafana/provisioning/dashboards/default-config.yml

ADD dashboards/app.json /var/lib/grafana/dashboards/
ADD dashboards/grafana.json /var/lib/grafana/dashboards/
ADD dashboards/node-exporter.json /var/lib/grafana/dashboards/
ADD dashboards/prometheus-2.0.json /var/lib/grafana/dashboards/
ADD dashboards/traefik.json /var/lib/grafana/dashboards/
