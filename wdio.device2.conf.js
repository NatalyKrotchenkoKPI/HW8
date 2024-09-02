exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    updateJob: false,
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{
        'bstack:options': {
            osVersion: "14.0",
            deviceName: "iPhone 12",
            realMobile: "true",
            local: "false"
        },
        browserName: 'safari',
        acceptInsecureCerts: true
    }],
    services: ['browserstack'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
