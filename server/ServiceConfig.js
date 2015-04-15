// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
    service: "facebook"
});
ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: "1625415751024780",
    secret: "e54833fd2efa74b3cda21190bf9f3d9d"
});