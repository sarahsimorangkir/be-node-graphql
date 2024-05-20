import dotenv from "dotenv";
let config = {
    server: {
        name: "",
        port: "",
    },
    db: {
        host: "",
        port: "",
        username : "",
        password : "",
        name : "",
        
    },
};

const mappingEnv = {
    "server.name":{
        value:  "SERVER_NAME",
        "defaultValue": "crud",
    },
    "server.port": {
        value: "SERVER_PORT",
        "defaultValue": "3001",
    },
    "db.host": "DB_HOST",
    "db.port": "DB_PORT",
    "db.username": "DB_USERNAME",
    "db.password": "DB_PASSWORD",
    "db.name": "DB_NAME",
}

const loadConfig = ()=> {
    dotenv.config({override: true});

    Object.keys(mappingEnv).forEach(mapKey => {
        let mapVal = mappingEnv[mapKey];
        let keyRoot = mapKey.split(".");        
        let temp = config[keyRoot[0]];

        let valEnv = "";

        if(typeof mapVal == "string") {
            valEnv = process.env[mapVal];
        }else {
            valEnv = process.env[mapVal.value] ?? mapVal.defaultValue;
        }

        temp[keyRoot[1]] = valEnv;
    });
};

export {config as default, loadConfig};