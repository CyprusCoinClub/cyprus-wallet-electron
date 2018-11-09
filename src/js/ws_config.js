var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'CyprusElectron';
config.appDescription = 'CyprusCoin Wallet';
config.appSlogan = 'Slow and steady wins the race!';
config.appId = 'club.cypruscoin.cypruselectron';
config.appGitRepo = 'https://github.com/turtlecoin/turtle-wallet-electron';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 11975;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'twl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'turtle-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v0.1.2";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'http://explorer.mycypruscoin.com/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '45.63.116.110';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = null;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    '45.63.116.110:11975',
    '127.0.0.1:11975',
];

// your currency name
config.assetName = 'CyprusCoin';
// your currency ticker
config.assetTicker =  'XCY';
// your currency address prefix, for address validation
config.addressPrefix =  'XCY';
// standard wallet address length, for address validation
config.addressLength = 98;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 186;

// minimum fee for sending transaction
config.minimumFee = 10;
// minimum amount for sending transaction
config.mininumSend = 1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to convert from atomic unit
config.decimalDivisor = 1000000;
// to represent human readable value
config.decimalPlaces = 6;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
];

module.exports = config;
