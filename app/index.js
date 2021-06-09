const Web3 = require('web3');
let web3 = new Web3('https://rinkeby.infura.io/v3/bb752391fc7048b49b63ab9da878e9d1');
web3.eth.getChainId().then(function(chainId){
	console.log(chainId);
});
