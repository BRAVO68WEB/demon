import shell from "shelljs";

const isPrefent = shell.find("keys/server.key");

if (isPrefent.code === 0) {
    console.log("✅ Server Key is present!");
} else {
    console.log("❌ Server Key is not present!");
    // Generate the a private and public key pair using RSA
    shell.exec('ssh-keygen -t rsa -P "" -b 4096 -m PEM -f keys/server.key');
    shell.exec("ssh-keygen -e -m PEM -f keys/server.key > keys/server.key.pub");

    console.log("✅ Server Key is now present!");
}
