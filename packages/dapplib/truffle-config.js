require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil foot chaos raise mad around coral light army gate'; 
let testAccounts = [
"0x76041e0bbb8997b18d15600ee74e31d09e7f3b957d1e77ecf90c730e5a8df80d",
"0xca57258b5b1fc4c6eff98b2df9ea591fec3f33abd917d3abb05778dea7a4e514",
"0xe3e23e78bef0e90118c6f407ac4ddd129231790f1944e12958d35e25105d2557",
"0xbcff2e0a5d25530917ef93978abede222a4e84e1e27ac1b88378c3cbf1c329ce",
"0xfd4a30fc199cdeb2c2b435b787b55366eb7a59520ae79f2365e253b049fed4a4",
"0xd49878e9ce6a76066d91896538c8d15a5d68eefc0b883163ac1d6c4c9bb55684",
"0x9126c7bde7ec0943a43e4109c1f176927d4dd4ab0a7e47759c0d422652e2badb",
"0xd02842a85fa433d43503624d287041aca6bf0f90de72b7147c1e30d4aed93e08",
"0x28d5340378ad0b69ec3b4535e7ecc633873a2017187ba09194fea7877c6609c5",
"0xbe12a5b2d84be10a9f52a52071c2f08415320bce8ce9aafcbfa4b22646fe1bf9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

