
const appConfig = {
    appName: "JavaApp",
    version: "2.0.0",
    apiEndpoints: {
        login: "/api/login",
        register: "/api/register"
    },
    isProduction: false
}

console.log(appConfig.apiEndpoints.login); // /api/login

// In the example above, the apiEndpoints object is nested inside the appConfig object. To access the login property of the apiEndpoints object, we use the dot notation appConfig.apiEndpoints.login.
//This is an config example. We can use this to store all the configuration values of our application in one place. This makes it easier to manage and update the configuration values.