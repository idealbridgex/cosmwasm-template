## wasm path
./target/wasm32-unknown-unknown/release/counter.wasm

## add new account
injectived keys add testuser

## check balance of account
curl -X GET "https://k8s.testnet.lcd.injective.network/cosmos/bank/v1beta1/balances/inj1ku57d4kk9af9j2af80ekxm6nuph6df874088ag" -H "accept: application/json"

## Upload the Wasm Contract
injectived tx wasm store ./target/wasm32-unknown-unknown/release/counter.wasm \
--from=inj1ku57d4kk9af9j2af80ekxm6nuph6df874088ag \
--chain-id="injective-888" \
--yes --fees=6000000000000000inj --gas=12000000 \
--node=https://k8s.testnet.tm.injective.network:443

## check code id
injectived query tx ACA6E0203D1A136E8C85E1FDC2CC9C7D4033554893A7E82C296C15B31A9398DE --node=https://k8s.testnet.tm.injective.network:443

## create contract
injectived tx wasm instantiate 6011 $INIT \
--label="CounterTestInstance" \
--from=inj1ku57d4kk9af9j2af80ekxm6nuph6df874088ag \
--chain-id="injective-888" \
--yes --fees=1000000000000000inj \
--gas=2000000 \
--no-admin \
--node=https://k8s.testnet.tm.injective.network:443

INIT='{"purchase_price":{"amount":"100","denom":"umlg"},"transfer_price":{"amount":"999","denom":"umlg"}}'

## query contract metadata
injectived query wasm contract inj1sctz0m3cq92ajj32w87edq62yjqx0l04lgnypf --node=https://k8s.testnet.tm.injective.network:443

## execute contract
injectived tx wasm execute inj1sctz0m3cq92ajj32w87edq62yjqx0l04lgnypf '{"update":{}}' \
--from=inj1ku57d4kk9af9j2af80ekxm6nuph6df874088ag \
--chain-id="injective-888" \
--yes \
--fees=1000000000000000inj --gas=2000000 \
--node=https://k8s.testnet.tm.injective.network:443 \
--output json

## query contract state
injectived query wasm contract-state smart inj1sctz0m3cq92ajj32w87edq62yjqx0l04lgnypf '{"counter":{}}' \
--node=https://k8s.testnet.tm.injective.network:443 \
--output json

## deploy nft contract
injectived tx wasm instantiate 49 '{"name":"first NFT","description":"test nft","symbol":"tnft","minter":"inj17qh0ddmdzlgy3sx4fjytn0s8x0sjx8trs75egt","max_supply":2000}' \
--label="CounterTestInstance" \
--from=inj17qh0ddmdzlgy3sx4fjytn0s8x0sjx8trs75egt \
--chain-id="injective-1" \
--yes --fees=1000000000000000inj \
--gas=2000000 \
--admin=inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3 \
--node=https://sentry.tm.injective.network:443

## deploy candy machine
injectived tx wasm instantiate 49 '{"name":"first NFT","description":"test nft","symbol":"tnft","minter":"inj17qh0ddmdzlgy3sx4fjytn0s8x0sjx8trs75egt","max_supply":2000}' \
--label="CounterTestInstance" \
--from=inj17qh0ddmdzlgy3sx4fjytn0s8x0sjx8trs75egt \
--chain-id="injective-1" \
--yes --fees=1000000000000000inj \
--gas=2000000 \
--admin=inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3 \
--node=https://sentry.tm.injective.network:443