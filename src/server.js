const cord = require('cords');
const app = require('./app');
const sequelize = require('./utils/connection');
const cors=require("cors")
require('./models')
const PORT = process.env.PORT || 5432;

const main = async () => {
    try {
        app.use(cors())
        sequelize.sync();
        console.log("DB connected");
        app.listen(PORT);
        
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.log(error)
    }
}

main();
