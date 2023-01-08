---
layout: default
######## CARD FRONT VARIABLE
img: chainflip.png
# kind blockchain : tendermint, polkadot, ethereum, near, move.
kind_blockchain: polkadot
title: ChainFlip 
modal: chainflip-testnet
# status
# - finished
# - ongoing
# - cancel
# - preparations / other
status: ongoing

######## DETAILS USED MODAL
website: "https://chainflip.io/"
event_name: "Perseverance Testnet"
event_link:  "https://blocks-perseverance.chainflip.io/validator/cFJeTec6nZ81729HNebTp9Yb8DfUxfwmKmdvZvimGZnokLrvK"
node_id: "<code>cFJeTec6nZ81729HNebTp9Yb8DfUxfwmKmdvZvimGZnokLrvK</code>"

######### TECHNOLOGY
os: Ubuntu 22.04
monitoring: Grafana, Prometheus, Telegraf
monitoring_pdf: 
security: "Audit (Lynis and Greenbonde), Hardening CIS"
network: "Wireguard (Communication between Machine)"

######## INFRASTRUCTURE
# if kind_blockchain is tendermint,please assign  tendermint_ of value
tendermint_rpc:
tendermint_api:
tendermint_grpc:
tendermint_grpc_web:
---