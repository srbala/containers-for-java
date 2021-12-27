// https://api.bell-sw.com/v1/liberica/releases?version-modifier=latest&bitness=64&release-type=lts&os=linux&package-type=tar.gz&bundle-type=jre&version-feature=8
// https://api.bell-sw.com/v1/liberica/releases?version-modifier=latest&bitness=64&release-type=lts&os=linux&package-type=tar.gz&bundle-type=jdk&version-feature=11
//
// https://api.github.com/repos/corretto/corretto-11/releases
// https://api.github.com/repos/corretto/corretto-11/releases/latest
//
// console.log(process.argv);
if (process.argv.length == 5) {
    const axios = require('axios');
    const jdk_bundle = process.argv[2];
    const jdk_version = process.argv[3];
    const jdk_arch = process.argv[4];
    axios.get('https://api.bell-sw.com/v1/liberica/releases?version-modifier=latest&bitness=64&release-type=lts&os=linux&package-type=tar.gz&version-feature=' + jdk_version +'&bundle-type=' + jdk_bundle +'&arch=' + jdk_arch).then(resp => {

    console.log(resp.data[0]);
    console.log("");   
    console.log("version=" + resp.data[0].version.replace(/\+/ig, '.')); 
    console.log("filesha=" + resp.data[0].sha1);
    console.log("fileurl=" + resp.data[0].downloadUrl);
    });
} else {
    console.log("Invalid input args")
}
