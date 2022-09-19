module.exports = (sequelize, dataTypes) => {
    const alias = 'Actor';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: dataTypes.BOOLEAN,
            defaultValue : '3,1'
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER,
            unique : true
        },
    };

    const config = {
        tableName : 'actors',
        timestamps : true,
        underscored : true
    }

    const Actor = sequelize.define(alias, cols, config);

    return Actor;
};