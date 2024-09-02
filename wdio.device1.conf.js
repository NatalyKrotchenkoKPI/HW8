exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    updateJob: false,
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{
        'bstack:options': {
            osVersion: "10.0",
            deviceName: "Google Pixel 4",
            realMobile: "true",
            local: "false"
        },
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    services: ['browserstack'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
