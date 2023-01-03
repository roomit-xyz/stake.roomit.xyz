---
layout: default
######## CARD FRONT VARIABLE
img: gitopia.png
# kind blockchain : tendermint, polkadot, ethereum, near, move.
kind_blockchain: tendermint
title: Gitopia Network 
modal: gitopia-testnet
# status
# - finished
# - ongoing
# - cancel
# - preparations / other
status: ongoing

######## DETAILS USED MODAL
website: "https://gitopia.com"
event_name: "Testnet Chain Janus Testnet 2"
event_link:  "https://gitopia.explorers.guru/validator/gitopiavaloper1zwjdxszdlnx23t4qj6pmf695qlwlyfu5ztauw6"
node_id: "<code>gitopiavaloper1zwjdxszdlnx23t4qj6pmf695qlwlyfu5ztauw6</code>"

######### TECHNOLOGY
os: Ubuntu 22.04
monitoring: Grafana, Prometheus, Telegraf
monitoring_pdf: RoomIT_Gitopia-Grafana.pdf
security: "Audit (Lynis and Greenbonde), Hardening CIS"
network: "Wireguard (Communication between Machine)"

######## INFRASTRUCTURE
# if kind_blockchain is tendermint,please assign  tendermint_ of value
tendermint_monitoring: "https://testnet.roomit.xyz"
tendermint_rpc: "https://rpc.gitopia.roomit.xyz"
tendermint_api: "https://api.gitopia.roomit.xyz"
tendermint_grpc: "https://grpc.gitopia.roomit.xyz"
tendermint_grpc_web:
---