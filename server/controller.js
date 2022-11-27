require("dotenv").config();
const {CONNECTION_STRING} = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        CREATE TABLE national_parks (
            park_id serial primary key,
            name varchar
            location varchar
            rating integer
            image varchar(255)
        );
        
        /* INSERT INTO national_parks (name, location, rating, image)
        VALUES ('Yellowstone National Park', 'Wyoming, Idaho, and Montana', null, "https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg"),
         ('Yosemite National Park', 'California', 5, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Grand Teton National Park', 'Wyoming', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Glacier National Park', 'Montana', 5, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Zion National Park', 'Utah', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Grand Canyon National Park', 'Arizona', 4, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Arches National Park', 'Utah', 5, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Bryce Canyon National Park', 'Utah', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Denali National Park', 'Alaska', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Rocky Mountain National Park', 'Colorado', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Acadia National Park', 'Maine', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Joshua Tree National Park', 'California', 4, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Badlands National Park', 'South Dakota', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Death Valley National Park', 'California and Nevada', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Great Smoky Mountains National Park', 'Tennessee and North Carolina', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Olympic National Park', 'Washington', 5, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Everglades National Park', 'Florida', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Glacier Bay National Park', 'Alaska', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Shenandoah National Park', 'Virginia', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Black Canyon of the Gunnison National Park', 'Colorado', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Sequoia National Park', 'California', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Voyageurs National Park', 'Minnesota', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Canyonlands National Park', 'Utah', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Big Bend National Park', 'Texas', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('North Cascades National Park', 'Washington', 5, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Great Basin National Park', 'Nevada', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Mesa Verde National Park', 'Colorado', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Great Sand Dunes National Park', 'Colorado', 3, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Kings Canyon National Park', 'California', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Gates of the Arctic National Park', 'Alaska', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Channel Islands National Park', 'California', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Cuyahoga National Park', 'Ohio', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Wrangell-St. Elias National Park', 'Florida', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Kenai Fjords National Park', 'Alaska', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Mount Rainier National Park', 'Washington', 5, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Capitol Reef National Park', 'Utah', 2, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Lassen Volcanic National Park', 'California', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Carlsbad Caverns National Park', 'New Mexico', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Petrified Forest National Park', 'Arizona', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Katmai National Park', 'Alaska', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Dry Tortugas National Park', 'Florida', 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Saguaro National Park', 'Arizona', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Isle Royale National Park', 'Michigan', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Hot Springs National Park', 'Arkansas', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Hawaii Volcanoes National Park', 'Hawaii', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Pinnacles National Park', 'California', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Crater Lake National Park', 'Oregon', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Mammoth Cave National Park', 'Kentucky', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Haleakala National Park', 'Hawaii', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Guadalupe National Park', 'Texas', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('National Park of American Samoa', 'American Samoa', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Virgin Islands National Park', 'U.S. Virgin Islands', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Biscayne National Park', 'Florida', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Redwood National Park', 'California', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg',
        ('Congaree National Park', 'South Carolina', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Kobuk Valley National Park', 'Alaska', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Theodore Roosevelt National Park', 'North Dakota', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Wind Cave National Park', 'South Dakota', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Gateway Arch National Park', 'Missouri', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('Indiana Dunes National Park', 'Indiana', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),)
        ('Lake Clark National Park and Preserve', 'Alaska', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('New River Gorge National Park and Preserve', 'West Virginia', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'),
        ('White Sands National Park', 'New Mexico', null, 'https://www.scenicwonders.com/wp-content/uploads/2014/05/yosemite-valley-entrance-hdr.jpg'); */
        
        `)
    }
}