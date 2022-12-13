export default {
    mySqlConnection: {
        host: process.env.MYSQL_HOST || 'localhost',
        port: parseInt(process.env.MYSQL_PORT as string) || 3306,
        username: process.env.MYSQL_USERNAME || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.NODE_ENV === 'test' ? 'db_todos_test' : process.env.MYSQL_DATABASE || 'db_todos',
    },
    secretKey: (process.env.SECRET_KEY as string) || 'secret',
}
