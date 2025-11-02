'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3fb162a4fe05c08ca2401e1d3c73b27b",
".git/config": "70953e8d2d780a836e6430f67392275c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "27a5d611a667198b8a9ca9eb7a944f53",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a3471df6f15580bb73fbe6bcebe1e86d",
".git/logs/refs/heads/gh-pages": "db2931f6e6a4b50eb084d99ce59a2f4a",
".git/logs/refs/heads/master": "a772f6c3e9b1fb21a4c281f281222a44",
".git/logs/refs/remotes/origin/gh-pages": "cb8b2d61eeea26cf062e5b9eaee901b7",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/df835f3d585d7fe949e5ba074b4e6510db8004": "3231c4a7d127ce44d414dbb9c7959d40",
".git/objects/05/594ca1d7f2a39774aab7621a771776e726b708": "3130d7a2f3e80a2d253d9c0df4a56f2f",
".git/objects/05/6fc4d2cba2c9b3810d13056891aad5e57c7d41": "1f71897c787367bad6bc35051a49da1b",
".git/objects/06/6f6a7262e5dec5e4375330f658127d05207360": "8bf653eb2f99e73a2cef75457160f2fe",
".git/objects/08/166113b122b79fe655db6d9f711186d2ff7351": "45794bb7ad8fd31e3d168cd62d4aa450",
".git/objects/0b/e65258e93f7cd9dfc51cc5f102e82a4508213a": "79eb628779d6f9f046d2ccedd0441ce9",
".git/objects/0c/195b094e15fa442257edcaeade8620c5ec7ec2": "0a7807718985bf3cc465da57ebdd48df",
".git/objects/0d/a040eef56300e235c3fabfb27d87ecd29e399a": "8fe9964b1428c41f5b9561f4abfcb586",
".git/objects/0e/09560a2120839786a35a0606c09f1427a21cca": "f64cde4714e16db3883a0db145ac04d9",
".git/objects/0e/61f9fef3a0f3f39077248c4f136f64f98eabc5": "8718cbe96c6c820b8f67e47552784780",
".git/objects/0e/6ed46838e0acc44756eb045db48be1d51ef34c": "86517340d9eb33a42742442af538b681",
".git/objects/0f/9010b682c2d3440380104a88e67ae491622907": "d10c1d57591dd86be7ea793a14d5e838",
".git/objects/13/3535136976e9520d5c202b7f0a28ee0332c084": "6174c9f79fb0ff61620826e7ae0d25ca",
".git/objects/13/e85eb7bc21d516b993e53dfc4572db7d7e9548": "8dd5661de4736f4039b6892048048b9c",
".git/objects/14/1e926b4cc32524040c34b4938c924cc1f135bb": "83f319d6d5b0b50137484da26d6ca332",
".git/objects/16/8d4578f5c2fea7d5ab1f20799f7008e004b986": "370536e6980b64821a03dff1f1b5c02d",
".git/objects/18/a8229a048fd014aefa07e4f72deb9554ea09d6": "3706ff23f44698a4bc3f2d2ac381c82c",
".git/objects/1a/3c2fe40bf7e46b24b1bd4269badf81d8c19268": "1debc1c9d77d70a46289dd3513fc7c93",
".git/objects/1a/8d731119bcdb0fa65d00fba280b3f51246a9b0": "ee2ca2fe2220ad14f5b926e5bc49bcdb",
".git/objects/1b/5ea6d42e0773cbe9d07a34091dbfdd63b4acd1": "8c714905e6ba7cd1301299287869f615",
".git/objects/1d/35b91f29c8843477182b51147b0a0fa9f9c02f": "085f62d6cfdcc48083d5c1e655d25cbe",
".git/objects/1d/f001d2e0d39b8673cb6f04cbb595fb8dc2bea3": "dbd69d655a265d14622dca62776bc482",
".git/objects/1e/190d1ebf4d55fdf5e0ef78a03adfe3c2dc022b": "28042e0658645806e54168f9cf1e2cdf",
".git/objects/1e/ac9f4a56ac96389dab14e0e5c7f04398c261a6": "33fb8ce28438f58cc3084c3d8032b1c9",
".git/objects/20/02a1a20bfc469fbe0f547fde2a8038ecc6943c": "4da737842c030d972d91730ca08fb0af",
".git/objects/20/29c9bcc2fd293dbafe51e8a291f1c488e780c2": "f6848b3f73a1553daa8f7df68686997a",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/06ded246de98038e193e0bd25ea9c6456f4e66": "0c780aa9e823d21f34f62ec883e21bce",
".git/objects/21/aa96e08952fd62ce39fd8e71a48e1dda03c1d5": "4ad9f24edf146e6acfaa9e7d11707a74",
".git/objects/25/4b73a5050f01e13b1cec55261c6289aca705bc": "71dd0d8c65e86ab8e3c5aa245b203527",
".git/objects/25/d8511cf7ca933c413c6cae49c89d679e75bbf2": "7065aaf48c1e9df7c29007d6351f2503",
".git/objects/26/27b5429e15175009eef755360c24123c1fc9d3": "0e6443f7bb407adc8b22f88e92bb7185",
".git/objects/26/e7a516344306d4227aceb2b7d763bc0846ed2a": "fabbc420a42fc7c1789374608987ed42",
".git/objects/28/8662737d5618593326bbb37867c1d0f4bb0b89": "aa8383d323bb2fad69da7ea1dc126c48",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/48002fbf1e4da4a450593908080eb781f915b3": "6fbd1ebacb4802b13fc7f24790424213",
".git/objects/2c/6747efe44c440a12789a1967e771d93fc4b511": "d4cd625e623ce2c2b5101e7daa945b3f",
".git/objects/32/f142a86dbe6db3e077927350c3cfad16a7d086": "9c0278787b6643c5d83da4e06dca7f65",
".git/objects/32/f326b28116273b1f2edcd0d67c0ce8267600f1": "572f76c62b29a6602e8a12d1353687fe",
".git/objects/33/df2133fae21def0d6debdbb96af4445b254946": "2ec15e81f3aa7abe6742a8bf05556325",
".git/objects/39/b9a4cbde2be090c20ba472a5a9518f13538d47": "93b7c4e7f637c7ab957c8aff1069abb9",
".git/objects/3b/b6e53ce7389eeac17802088d0ea879cadb029a": "154a644f0b9df3ef6ead0b2641394c00",
".git/objects/3c/11831fb2227fa4957361eb6fedb538a8fbc976": "62decaf2f40733e9bade5d107570426d",
".git/objects/3c/58ac582f691c1cd75597ae961ce1e3143642f2": "1d25090d14c60302c75499a8da2d25bd",
".git/objects/3d/cb86a7c3541847ebd742a5dc30868fc7d607ec": "ff5f247f13f932e15170470ea3af7263",
".git/objects/3f/5320c38938ffb8a542d6434f73629d5d986f20": "53a039f80b02ecd226e9c6b224f7e1b5",
".git/objects/41/5899c1cc4780db889017637a231f0d320f161e": "f46a8c983c06a1b5dfc4eb188ed86324",
".git/objects/41/5951879033e8eff5139d709c423acbde454a8b": "2d0c31c258c9255533282a6bcd139638",
".git/objects/43/ad360e86b4a637955ca8326717c27258819724": "1bd2ba0ea839456ca3dce97412604f01",
".git/objects/45/6c957a55c7653f6dd9b97171160ac2c095100d": "cc66cbf3281967d019197a1608f6cdc4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/ed6915c1220ee23767c361b5a26d2d3c0a597a": "a90e37dc057e82a5181e1ec79e67eaf6",
".git/objects/4c/ac8f65dd0a85f6a9b989635fa5209752219274": "f5efd27e5454986c94cdc14a8c990e13",
".git/objects/4c/c543d033a55157dc57decc7a5ffa1b28018625": "eab6949f94495692176f5fae113c793d",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/4f9ae4265ec37dc7d2748cae6ecd2c8b0022be": "cf53a3b8316d3686b3c0e7f7a753c23f",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/e634b8a5a436fd6a7c82cece8d5889a3baa868": "1664ac0d703100f8d66a488106ec6058",
".git/objects/55/8f2166e58d7f69b408e712abdc2f065bac54c9": "e0dc1483f25b4c8fbcbd42e860fc0412",
".git/objects/58/849ae63eceba839f5027fa61ad726b1a8b868a": "f246a7adc4e8acf304bd06fc3f99e191",
".git/objects/58/d7784e6c2fd45c2b736763f0ed776d613eae5a": "88862ca80a4ce20514ec985a0efd1ea8",
".git/objects/59/b9ce394c273f7462b48947e6d83a1ec6fd8227": "36a98e3f56cb9e3ee7c50a1bddb6bddd",
".git/objects/5c/b349fad2f23ea188dc79131ed49f701581cfb0": "778692f403b65304e3505477079d9351",
".git/objects/5e/73920ef4acecfb74f1edca80862148beccf08a": "c6c151df2779cbd5eba1c4f3f31485b2",
".git/objects/5f/5c89c91fc1a3c0d989ab3a55c87c5abadca377": "fa54ce532c482ad76324a04a49a56da8",
".git/objects/63/c6e82decc7a65532c5f1d04df599e0555cff7b": "d08cc2d09d9d3937b62392583df364f6",
".git/objects/64/249d04bc348c8261960bb1531459739adfe8b0": "af8846ec6fd3d1aa354a7b7933496450",
".git/objects/64/7c7a1cc50550c7f90c13b883d823764874f086": "1de0a4c903df990101b1808ed00ecc07",
".git/objects/65/1a5ebe50dceec7e223c0c88ddf00203b8a0d12": "569805a1bd50b1350afcf1cf4e03f363",
".git/objects/67/62d073a042c332973e4a1f513cbc9ea3e0b79d": "1aaa9e6255dc06e7f6a4c0162d4f3813",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/fa233774b457f28499b057ddfc910c2dc6549e": "d21b7dc5ad691fe8fc02cf32963bd7ac",
".git/objects/70/0d7db357cb42254d249f536851b0a6d2064574": "36ed8018ea47409b32c184215714baa8",
".git/objects/70/91d2bafadb75f445fb73192959b6a1c317f92e": "82a4574d01931a3f0cde81c851ca3fc9",
".git/objects/70/d2ad3e72a3d77b538ddb8f7d52997ee5fa72ed": "83caafb8152d3bd78cc6fe6d23272d15",
".git/objects/70/e5415fa96221ae0e4d792543b2fcee11f4589a": "50ba6abf5059b021a70064dc0d3862bf",
".git/objects/71/079369509820913b5858ca67798b11835237cb": "974ec0c07efa231ea94290baea2f03fb",
".git/objects/71/4bcd3452ffa9ec2b6bb5646109ce772236bb7c": "a3ff547ef4c04a1f65b8a4c7a92eef82",
".git/objects/73/ad3529c660574bf17eb6606efd285eb9d56dab": "6bf05af7b5d59bfd8b7b87f0d3c3c5b9",
".git/objects/73/ffa6426497c9beceae1e003bb504ff5729c2d3": "af7911dabe8538f9bf977da374ee7096",
".git/objects/76/2b298222ae9c823e8570a9532bd03f97e03251": "868ef7b98cca167ae1db1685ac61c5be",
".git/objects/79/ecbac9033d1388700797540e61345609b709be": "53688aa64fcb53c364018ca7b41a8474",
".git/objects/7a/1712eccfde90df8fab6591eae4f7e6cca528ed": "86e548b0e970b23dd49a09f239f48baf",
".git/objects/7a/50eea9c348a21ed0baf0f30f71db47dc7479c4": "a91e50dd8c787a8688ec1a97e4bddd0b",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/9b9a876eb25219090f8878704395d92495dabd": "db6b23f1d0fce3f0e57c9eed494e702d",
".git/objects/7e/e3345c985e77669bda7277c9c85593b8652231": "a00b32f09150b4a466e83d678dbba620",
".git/objects/80/476ad883b777223e0fd470509187dd84013da0": "78b91a8febc758d75c820e8b74d693f9",
".git/objects/84/85bb25cbfa32f77dbde515bc3ae425add8f605": "1b620928f29bbce76abf5ab37e85d079",
".git/objects/87/cf0dbaf05f1aa91686fe17844ef1a75a3e189b": "d3a784256c81d056e0430b6c18eee3f9",
".git/objects/88/7f14a88aac5baec99ab43bdd977c0b8c90e0eb": "71236f5889f69d7a35328c2746d868c8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/25a0c9b404a00f15981bbc31892c6421c4ab6d": "1704ee0374ba3220bfa547ec4d63f529",
".git/objects/8d/7a67db8265e3fbcb8ce6d7405c2b1c0b0e3c7b": "0d6417effdf678de9198b037c79a0189",
".git/objects/8e/d55887d5c289d077883189f0aae56797d9fa58": "a2f39a28780514e0a64262069eb95b77",
".git/objects/90/77ac7f80fb07f91edaaace4a697d9cdac5f89f": "58d0e38cc8ec7e373ac30b535acfc00b",
".git/objects/95/c2851631e0238369f95ca6915f3fbd69dc2e73": "c9c5de4b019ae1f97cca7aa9526e1421",
".git/objects/97/ff0a9cebd6c4f6690fc8471a92452e52b93506": "ae0ed776f092099e23ce199fd2505edf",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/5e763c8e4c3c4a3a29db5735544a09c5963ac7": "2803d63e88db52b3d85e7064f21623c7",
".git/objects/99/a57a06133fba4adca7aeb01d3e53194962b75f": "eda0a48ed3f8ce16515ae5888be2cd6d",
".git/objects/99/fab8c448e4aec3868e659e755fc2190998f218": "f36cb3c8c2a27fe5efbc25039f4ea7d9",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/76e8152361212aba97bc64209f2c7521075017": "3a7aea7514de8d47c68e1b9bef6f74d2",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/3efada4f53cdb39d0de925c6deb12bac8dbc74": "ce07e2c50cc9f344c02a214a5b85a03f",
".git/objects/9e/4025001a8d57bb034029f3ed9643dd20873c66": "f2744f10dbdd90af03b5843c9ad1888b",
".git/objects/9e/b1bb7ead1f5ee2a7a0ac65bb63347e39b2567e": "2be761468f6c35f32ab285516680e633",
".git/objects/a2/0359d8c0d433ac518be04ddc83acf4bd29b645": "129abf89e9a9631ad32382f4741e086c",
".git/objects/a3/e06669670a34077d3de22315f7c23b51591ffd": "1c2e202ca0dfdb05cadb761595fc47e6",
".git/objects/a5/dd8641390691e549f9fa8d0f99523b8233d5ab": "56edb51825197e30a9e3326e69471407",
".git/objects/a6/d5fcd97cc343cb5d750df9045df82e66f2762f": "999179b3ed02d0997528501092e2d432",
".git/objects/aa/720d19de1f41186dbf770e8b766f6e196a1ec9": "13c880a9533109461503ea8325e9fb82",
".git/objects/ad/8f92ed3d9a4adf6165288f7cac01d85035ea53": "39b28cfa8898a466a35326f20646887b",
".git/objects/ae/c982d765cb668aefc313702f71073365485f02": "cfba221f19827dff964cd28f82beffd4",
".git/objects/b1/2f9883013dd121e6eeba45e94ec47f7652e672": "7cd8dcbb9a22d552dfbd42523da2fa4f",
".git/objects/b2/1429d1584c4d4535dace97a9857441a3072a59": "2fac590d54ea88fe55921311c23c9c49",
".git/objects/b3/75eb9b311dbcd850e4f0cc248a29bdcbffa3df": "7256e91d8558caa7481caf3fd801dbc5",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9f628a35e357add0f5f8929ebacdfc008774f9": "a4878bbd34a739becfd4481fbd4166c4",
".git/objects/b8/38a336ffa7c14317cc4729b2d481bb5f331acd": "4f0ca7c8187709c525dc1a47dfbef7b5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/38a4d604030bcbabea7a2e4abf62bed585a7b4": "1e758a661808eb964b4fd4131568b563",
".git/objects/bb/2ff0c74e7dcc0614a6777de05af8d34a272c60": "dcda40e444b3c2c13947384ce2604630",
".git/objects/bc/972ea3eea1c99233c27ff1098415a74c11b8f0": "cef20b36678fa406cbe529b67bd1b2ba",
".git/objects/c0/a3c2bc112f9f86dcdb6f479da0869949e46188": "9a013abeb66bf10f8637741dc5af2a78",
".git/objects/c2/d9606d87fef04a31d5a24a09da55fabc50b4cc": "734921406c56d7bca5cffeed107acf63",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/89328ef26dee30e86851ca1fce2804d7bef0c5": "155c14e5cfa20d2c3ada03b714be5ada",
".git/objects/ca/c297097ba4ac73cb06120b6e51b4db44f9e294": "386f5ae0e56655250f4340fd8774a7c9",
".git/objects/cc/9a36ff28b656d9b07faf82ba8501cdffb62ac0": "f7b5c94fb0e3be568107cde15dcea2a5",
".git/objects/cd/036386377fcde7f9340cdb2284fc9d563120dd": "a8987f9bce3a701df6413f07e1dda85d",
".git/objects/cd/5f3587e79cd4860c2b7bfc59a7f6890935ff66": "ff0701656735d9cb31ebe9a3f4b5fb06",
".git/objects/ce/22c199c2e6d19e39659354b1239d279d88e63c": "2844ca7a34037c2a260ea0012896797e",
".git/objects/ce/fe1f3ad0bb163c3c6ef619552c1dd55b9a23f3": "e2afd16f90de1c98f76a212c8b7e79ba",
".git/objects/cf/9f6867a5d48a3917c3d0f3c430a8498cc3dd95": "52dd88dbbf61b332382a7287a67516ac",
".git/objects/d3/10f1d758e3ef8a13e065f38e3f4e9513cb2847": "db8511a89fc632c2c2cff27bf6372731",
".git/objects/d3/a393bc1c931a681ae5e26845910968355bc379": "58d4ade2902dd07ebb129a21b2fee397",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/2c187331495c489ad2554e4063773745c1952f": "2330c1adf05b46b1f9d719d53aca0e97",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/ce2e1d88529b0671945ee9d219e66295e28838": "d7533ed075ba3623504aeb8bcaecd722",
".git/objects/d9/384960d44c11ce586552ba34e77a1347cf6cd7": "d39c0860eb9bf7c83e9d0e69db59f6b9",
".git/objects/da/4f1739be85e02190ccafdee0928c4ab1922116": "7a6dbb19c4c210830b956a352cc59f6b",
".git/objects/dc/35aa0fe47a2a57d9002d5c1f6f455a44afa093": "69cc756eab93c85974edb92e6775e819",
".git/objects/de/687016f973016039a864158819ac1063b64a66": "89e47ce5c1b2601ade0e918d544965c7",
".git/objects/e0/d3b08f326245874262bedb493ff1e3eec51633": "b5ff9f2a8806b3343bdf8fb4a1a57248",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/39ce012b124aecbede223b28a9b10e369e4408": "5bcad0f66a4732a9f42236495edc5f7f",
".git/objects/e7/1fb7f630e9770a4d07714055de0de53f5a1eea": "4560c7614cccd669046b9dae6b1f6e14",
".git/objects/e7/56ef2ccbb4725c52cfd1977966264082887b5c": "5656936e74f0fad8f951561bdeb2061d",
".git/objects/e8/7b3f7492f3383628c3374540936003c09833b0": "be36e296b431ee702dead184700b62a3",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/24ae253887367f88f9f4df08672e55a8fd3114": "b38cbc3e7dfcd2b6c31f77108f605fa8",
".git/objects/eb/92a7f383b2eca053657ad2307ebb09c7dc9dcd": "fd23fbacc09ba748ae7a73d5034f069b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/73b3cc9937c3cb41014b2fa9fe73cb7c6094b5": "e7903da487d5ab7659fae8339781210f",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/e924e16e5de1ffc5a1b3c765e64dd8246e24a5": "932d979527dd14241bfc6b0714b8ceb7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/5674013ae5fe457a5414147ce2a688dc70b5a7": "3c7503f78bee880d5bdef66d9cb09729",
".git/objects/f4/57d3f795da75dd7629046645e7b38eea0d601a": "b5d8a171b316a44c850971faa464e42a",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/25864df81d8e96f6f8ec9074c8d05c501828f8": "b4c305cd623249b25dae1bff0358ce1d",
".git/objects/f6/876fcbc9bf30bbd3965c918c6f9ed32bae217e": "6c38f152fd383755567f4d1ac20072d6",
".git/objects/f9/ecc264c427142765e1502f24cb55a73f88edde": "e767e57367ceee234b4d3fd05dad8373",
".git/objects/fa/30843db2aaf3335cdca2d4942e72a1785f1fe7": "ae7f427c8b94d2f3fbb64687d4ddaaee",
".git/objects/fb/03a568542aaaa51a8ee64c1d663f176f2d4b04": "e50fe22365a96f379be42285900b3204",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/e5cde90ce9061cd1c464d13b5fd9942c6affb7": "4af578c5b15b256aa2527876c19cc432",
".git/refs/heads/gh-pages": "ac2a935cbd5f27a4dab2b1f2dd24bfc9",
".git/refs/heads/master": "c727b9e2953321fb903a961eca9f5edb",
".git/refs/remotes/origin/gh-pages": "ac2a935cbd5f27a4dab2b1f2dd24bfc9",
"assets/AssetManifest.bin": "24e1434998f0dc8827233a0cc9b557e4",
"assets/AssetManifest.bin.json": "c29bb59c311a3352939a24bfa5d0a83d",
"assets/AssetManifest.json": "849f5056587d013d60674a044305bb7d",
"assets/assets/Animations/coding.json": "c41559edfa623ec94ee7034e2a3a6749",
"assets/assets/Animations/Moving.json": "adda8ccecb9da830d742730b75ac4e3c",
"assets/assets/Animations/work.json": "1f5f24d2d157436ff6719cc7fc42fef4",
"assets/assets/Animations/work.mp4": "05f2f94c78f7cc8861d9ae26f4ab5ee4",
"assets/assets/Animations/work2.json": "4e4389fb81c3d64bf9484db5dfeb4b69",
"assets/assets/Fonts/Light.ttf": "1417bc6528fc33f47e148ac12b682d68",
"assets/assets/Fonts/Normal.ttf": "cc17f68d3bbbdd07678bc70472ac6523",
"assets/assets/Project_images/Weather_app/cover.jpg": "a19ec41f67b137fc1224f179654382b6",
"assets/FontManifest.json": "fb85f4208936424ae412825cb4c1f339",
"assets/fonts/MaterialIcons-Regular.otf": "559b34499e83b2497e14c08fa4c02ee8",
"assets/NOTICES": "b6d5f6935b248ab5552c0bb3ed2ea4ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "0ecfb2678ec02d5d210ef9fb55970946",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f82b3573651c81dd0ed6de8b3d9fa1e0",
"/": "f82b3573651c81dd0ed6de8b3d9fa1e0",
"main.dart.js": "63d3cd6e7bcc21cb5cf53fa40452af1c",
"manifest.json": "873dce3b0c119d0f7c96a0702bccbe39",
"version.json": "3d580c8884ce2e572a5ba7fd382bd4a3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
