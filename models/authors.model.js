module.exports = (sequelize, Sequelize) => {
    const Author = sequelize.define("authors", {
        name: {
            type: Sequelize.STRING
        },
        genre: {
            type: Sequelize.STRING
        }
    });
    Author.associate = function(models) {
        Author.hasMany(models.BookAuthor, {foreignKey: 'authorId', as: 'authorId'})
    };
    return Author;
};
