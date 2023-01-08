---
layout: default
######## CARD FRONT VARIABLE
img: blockx.jpeg
# kind blockchain : tendermint, polkadot, ethereum, near, move.
kind_blockchain: tendermint
title: Blockx Blockchain 
modal: blockx-testnet
# status
# - finished
# - ongoing
# - cancel
# - preparations / other
status: ongoing

######## DETAILS USED MODAL
website: "https://blockxnet.com"
event_name: "Testnet"
event_link:  "https://bigdipper.blockxnet.com/validators/blockxvaloper16am9xxy7q4yw5l9zx76zqm2p3ne8e6zns8xq3t"
node_id: "<code>blockxvaloper16am9xxy7q4yw5l9zx76zqm2p3ne8e6zns8xq3t</code>"

######### TECHNOLOGY
os: Ubuntu 22.04
monitoring: Grafana, Prometheus, Telegraf
monitoring_pdf: RoomIT_Blockx-Grafana.pdf
security: "Audit (Lynis and Greenbonde), Hardening CIS"
network: "Wireguard (Communication between Machine)"

######## INFRASTRUCTURE
# if kind_blockchain is tendermint,please assign  tendermint_ of value
tendermint_monitoring: "https://testnet.roomit.xyz"
tendermint_rpc: "https://rpc.blockx.roomit.xyz"
tendermint_api: "https://api.blockx.roomit.xyz"
tendermint_grpc: "https://grpc.blockx.roomit.xyz"
tendermint_grpc_web: "https://grpc-web.blockx.roomit.xyz"
---