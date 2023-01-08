---
layout: default
######## CARD FRONT VARIABLE
img: alephzero.png
# kind blockchain : tendermint, polkadot, ethereum, near, move.
kind_blockchain: polkadot
title: Alephzero Blockchain 
modal: azero-testnet
# status
# - finished
# - ongoing
# - cancel
# - preparations / other
status: finished
reason:

######## DETAILS USED MODAL
website: "https://alephzero.org"
event_name: "Mainnet Validator Global"
event_link:  "https://alephzero.org/blog/nomination-pools-mainnet"
node_id: "<code>5FjG4uqoHiHgrvkNRn73nkcTm3xQzdsBm6p8tZxgDBqFYbLR</code>"

######### TECHNOLOGY
os: Ubuntu 22.04
monitoring: Grafana, Prometheus, Telegraf
monitoring_pdf: RoomIT_AlephZero-Grafana.pdf
security: "Audit (Lynis and Greenbonde), Hardening CIS"
network: "Wireguard (Communication between Machine)"

######## INFRASTRUCTURE
# if kind_blockchain is tendermint,please assign  tendermint_ of value
tendermint_rpc:
tendermint_api:
tendermint_grpc:
tendermint_grpc_web:
---


<!-- #### ROOMIT CONF ####
server {
    listen 9944 ssl;
    server_name merapi.roomit.xyz;
    ssl_certificate /etc/letsencrypt/live/merapi.roomit.xyz/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/merapi.roomit.xyz/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


    access_log /var/log/nginx/aleph_ws.access.log;
    error_log /var/log/nginx/aleph_ws.error.log info;

    location / {
	proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_http_version      1.1;
        proxy_set_header        Host $host;
        proxy_ssl_server_name on;
        proxy_ssl_name $host;
        proxy_pass http://localhost:9941;
    }

}



server {
    listen 9933 ssl;
    server_name merapi.roomit.xyz;
    ssl_certificate /etc/letsencrypt/live/merapi.roomit.xyz/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/merapi.roomit.xyz/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


    access_log /var/log/nginx/aleph_rpc.access.log;
    error_log /var/log/nginx/aleph_rpc.error.log info;

    location / {
        proxy_pass http://localhost:9931;
    }
} -->

