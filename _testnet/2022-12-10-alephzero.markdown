---
layout: default
######## CARD FRONT VARIABLE
img: alephzero.png
# kind blockchain : tendermint, polkadot, ethereum, near, move.
kind_blockchain: move
title: Alephzero Blockchain 
modal: azero-testnet
# status
# - finished
# - ongoing
# - cancel
# - preparations / other
status: ongoing

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