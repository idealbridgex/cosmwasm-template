const fromAddress = ""


const checkbalance = (address)=>{
const command= `curl -X GET "https://k8s.testnet.lcd.injective.network/cosmos/bank/v1beta1/balances/${address}" -H "accept: application/json"`
}