require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food struggle razor soccer mistake hope argue tackle gas'; 
let testAccounts = [
"0x19dcb16bc88fded4c8c042aef0f29770a5899272e08563a14eb75e9a4650eb8d",
"0xc7f96c615baefb5b3c8456c38918f9efd92996ee9c280b5025af0d0524044b43",
"0x41a7ec23b7869f51c157e7bee5d03116988a1a01afd70d310923219ff9585108",
"0x2d9cc90778217252c803c52120027e8c8d91c14c9a8b3c9bdaaecbf4c8133cd8",
"0xac8ab1736ee6a65874d94d80064ce967c1ee594acd38bd49a4049442c29298a6",
"0x9d155c13a9ae18e1f9df8a7f549f8780685b5e75fc235045462755691077120d",
"0x455f20a9d46dc5cb220b858a3f4fe6f52610b713323f95ee3c54fd974405db71",
"0x141baa92d7e2c036d68cad9f64114ee8833c2fe9a29c03228998b271acae0086",
"0x4fcb233988cbc0e9ed54a549e23e0f8acc0cf4a699c54a970b417c24bdde87e3",
"0xd6ccb342043506cb5efa9aa889a1e401aa47a0cd360b97cfabb9da09cc9f4cd8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

