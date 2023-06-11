---
layout: default
######## CARD FRONT VARIABLE
img: archway.png
# kind blockchain : tendermint, polkadot, ethereum, near, move.
kind_blockchain: tendermint
title: Archway Network 
modal: archway-testnet
# status
# - finished
# - ongoing
# - cancel
# - preparations / other
status: ongoing
reason: 

######## DETAILS USED MODAL
website: "https://archway.io/"
event_name: "constantine-3"
event_link:  "https://testnet.mintscan.io/archway-testnet/validators/archwayvaloper1a8cyjdg7hpqscldav3vz0scjssnlw5ppcnz0cg"
node_id: "<code>archwayvaloper1a8cyjdg7hpqscldav3vz0scjssnlw5ppcnz0cg</code>"

######### TECHNOLOGY
os: Ubuntu 22.04
monitoring: Grafana, Prometheus, Telegraf
monitoring_pdf: RoomIT_archway-Grafana.pdf
security: "Audit (Lynis and Greenbonde), Hardening CIS"
network: "Wireguard (Communication between Machine)"

######## INFRASTRUCTURE
# if kind_blockchain is tendermint,please assign  tendermint_ of value
tendermint_monitoring: ""
tendermint_rpc: "https://rpc.archway.roomit.xyz"
tendermint_api: "https://api.archway.roomit.xyz"
tendermint_grpc: "https://grpc.archway.roomit.xyz"
tendermint_grpc_web:
---
