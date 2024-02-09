---
layout: default
######## CARD FRONT VARIABLE
img: selfchain.jpeg
# kind blockchain : tendermint, polkadot, ethereum, near, move.
kind_blockchain: tendermint
title: Selfchain Blockchain 
modal: selfchain-testnet
# status
# - finished
# - ongoing
# - cancel
# - preparations / other
status: finished
reason: 

######## DETAILS USED MODAL
website: "https://selfchain.xyz"
event_name: "Testnet"
event_link:  "https://explorer-devnet.selfchain.xyz/self/validators/selfvaloper1lcfv9zwvfl63khcr752ret2ne9td82smm58f4a"
node_id: "<code>selfvaloper1lcfv9zwvfl63khcr752ret2ne9td82smm58f4a</code>"

######### TECHNOLOGY
os: Ubuntu 22.04
monitoring: Grafana, Prometheus, Telegraf
security: "Audit (Lynis and Greenbonde), Hardening CIS"
network: "Wireguard (Communication between Machine)"

######## INFRASTRUCTURE
# if kind_blockchain is tendermint,please assign  tendermint_ of value
tendermint_monitoring: "https://tendermint.testnet.roomit.xyz"
tendermint_rpc: "https://rpc.selfchain.roomit.xyz"
tendermint_api: "https://api.selfchain.roomit.xyz"
tendermint_grpc: "https://grpc.selfchain.roomit.xyz"
tendermint_grpc_web: "https://grpc-web.selfchain.roomit.xyz"
---
