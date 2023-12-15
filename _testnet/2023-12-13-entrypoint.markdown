---
layout: default
######## CARD FRONT VARIABLE
img: entrypoint.png
# kind blockchain : tendermint, polkadot, ethereum, near, move.
kind_blockchain: tendermint
title: EntryPoint Network 
modal: entrypoint-testnet
# status
# - finished
# - ongoing
# - cancel
# - preparations / other
status: ongoing
reason: 

######## DETAILS USED MODAL
website: "https://entrypoint.zone"
event_name: "Testnet"
event_link:  "https://explorer.nodex.one/entrypoint/staking/entrypointvaloper12hz5c3p94z4eqzxe8uzz6c6y7wadcmu78ts58d"
node_id: "<code>entrypointvaloper12hz5c3p94z4eqzxe8uzz6c6y7wadcmu78ts58d</code>"

######### TECHNOLOGY
os: Ubuntu 22.04
monitoring: Grafana, Prometheus, Telegraf
security: "Audit (Lynis and Greenbonde), Hardening CIS"
network: "Wireguard (Communication between Machine)"

######## INFRASTRUCTURE
# if kind_blockchain is tendermint,please assign  tendermint_ of value
tendermint_rpc: "https://rpc.entrypoint.roomit.xyz"
tendermint_api: "https://api.entrypoint.roomit.xyz"
tendermint_grpc: "https://grpc.entrypoint.roomit.xyz"
tendermint_grpc_web: "https://grpc-web.entrypoint.roomit.xyz"
---
