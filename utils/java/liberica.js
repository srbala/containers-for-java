// https://api.bell-sw.com/v1/liberica/releases?version-modifier=latest&bitness=64&release-type=lts&os=linux&package-type=tar.gz&bundle-type=jre&version-feature=8
// https://api.bell-sw.com/v1/liberica/releases?version-modifier=latest&bitness=64&release-type=lts&os=linux&package-type=tar.gz&bundle-type=jdk&version-feature=11
//console.log(process.argv);
if (process.argv.length == 5) {
    const axios = require('axios');
    const jdk_bundle = process.argv[2];
    const jdk_version = process.argv[3];
    const jdk_arch = process.argv[4];
    axios.get('https://api.bell-sw.com/v1/liberica/releases?version-modifier=latest&bitness=64&release-type=lts&os=linux&package-type=tar.gz&version-feature=' + jdk_version +'&bundle-type=' + jdk_bundle +'&arch=' + jdk_arch).then(resp => {

        //const res = JSON.parse(resp.data.length);
        // console.log(resp.data);
        // console.log(process.argv);
        console.log(resp.data[0]);
        console.log(resp.data[0].version);
        console.log(resp.data[0].sha1);
        console.log(resp.data[0].downloadUrl);
    });
} else {
    console.log("Invalid input args")
}
