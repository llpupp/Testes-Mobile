exports.config = {
    
    specs: [
        './test/specs/**/*.js'
    ],
    
 
    maxInstances: 1,
    
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "ebac-qe",
        "appium:automationName": "UiAutomator2",
        "appium:appWaitActivity": ".MainActivity",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": ".SplashActivity"
      }],
    
       
    baseUrl: 'http://localhost',
    port: 4723,
    path: '/wd/hub',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    framework: 'mocha',
    
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
