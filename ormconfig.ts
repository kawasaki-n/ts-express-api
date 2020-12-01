export default {
    "type": "mysql",
    "host": process.env.DB_HOSTNAME,
    "port": 3306,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "synchronize": false,
    "logging": false,
    "entities": ["src/entities/**/*.ts"],
    "migrations": ["src/db/migrations/**/*.ts"],
    "subscribers": ["src/db/subscribers/**/*.ts"],
    "cli": {
       "entitiesDir": "src/entities",
       "migrationsDir": "src/db/migrations",
       "subscribersDir": "src/db/subscribers"
    }
}