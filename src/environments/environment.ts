// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

/*const chain = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';
export const environment = {
    production: false,
    appName: 'EOSweb',
    network: {
        blockchain: 'eos',
        host: 'bp.cryptolions.io',
        port: 443,
        protocol: 'https',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Eos: {
        httpEndpoint: 'https://bp.cryptolions.io',
        chainId: chain,
        verbose: false
    },
    frontConfig: {
       coin: 'EOS',
       bp: 'bp.json',
       tokenContract: 'eosio.token',
       totalBalance: 'EOS',
       convertToUSD: true,
       customBalance: false,
       logo: '/assets/images/ltnweb.png',
       name: {
          big: 'eos',
          small: 'web'
       },
       nets: [{ name: 'Mainnet', url: 'https://eosweb.net', active: true },
              { name: 'Jungle', url: 'https://jungle.eosweb.net', active: false },
              { name: 'Europechain', url: 'https://xec.eosweb.net', active: false },
              { name: 'WAX', url: 'https://wax.eosweb.net', active: false }],
       disableNets: false,
       voteDonationAcc: 'eoswebnetbp1',
       disableVoteDonation: false,
       version: '2.2.8',
       producers: 1000,
       social: [
         { link: '', icon: 'fa-github' },
         { link: '', icon: 'fa-facebook' },
         { link: '', icon: 'fa-reddit-alien' },
         { link: 'https://medium.com/europechain', icon: 'fa-medium' },
         { link: 'https://twitter.com/europechain_', icon: 'fa-twitter' },
         { link: 'https://t.me/europechain', icon: 'fa-telegram-plane' }
       ],
       liveTXenable: true
    }
};*/

const chain = 'ea666b3d188bdbc8a448d34bca381c8d78abfd1c5e50afbb14d87531f0a443d0';
export const environment = {
    production: true,
    appName: 'LTN',
    network: {
        blockchain: 'eos',
        host: 'http://88.99.248.77',
        port: 8000,
        protocol: 'http',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Eos: {
        httpEndpoint: 'http://88.99.248.77:8000',
        chainId: chain,
        verbose: false
    },
    frontConfig: {
       coin: 'LTN',
       bp: 'bp.json',
       tokenContract: 'eosio.token',
       totalBalance: 'LTN',
       convertToUSD: false,
       customBalance: false,
       logo: '/assets/images/ltnio.png',
       name: {
          big: '',
          small: ''
       },
       nets: [{ name: 'LTN', url: '127.0.0.1:3039', active: true }],
       disableNets: true,
       voteDonationAcc: 'cryptolions1',
       disableVoteDonation: true,
       version: '1.0.0',
       producers: 1000,
       social: [
       ],
       liveTXenable: true
    }
};
