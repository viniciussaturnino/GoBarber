module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    usename: 'postgres',
    password: 'docker',
    database: 'gobarber',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
