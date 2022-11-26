const { MongoClient, ServerApiVersion } = require("mongodb");

const { env } = process;
const uri = env.MONGO_DB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});


client.connect((err) => {
    
    const collection30 = client
      .db("raiddon-bnet-api")
      .collection("races-pictures")
    
      var myobj = [
        { link: 'https://images.saymedia-content.com/.image/t_share/MTc0NDI2MDMwNDQwNzE5NzIw/top-five-reasons-the-humans-are-the-best-wow-race.jpg'},
        { link: 'https://www.mamytwink.com/upload/news/2018/mai/04/prerequis-orc-maghar-wow.jpg'},
        { link: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2019/08/wow-dwarf-cover.jpg'},
        { link: 'https://preview.redd.it/g1nbdjhdule21.jpg?width=1920&format=pjpg&auto=webp&s=e5b93fd446e41deb700cc07013d089ad307bdf1c'},
        { link: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/76d376105863699.5f82f764e9998.png'},
        { link: 'https://img3.goodfon.com/wallpaper/nbig/9/10/world-of-warcraft-tauren-3296.jpg'},
        { link: 'https://www.mamytwink.com/upload/news/2019/avril/24/armure-ancestrale-gnome-wow-02.jpg'},
        { link: 'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt4bd0cd4d55ba902a/616a01e825b12a4a14b3a8a9/3ZPNF9VVQLZZ1614277943050.jpg?auto=webp&quality=75'},
        { link: 'https://static.wikia.nocookie.net/wowpedia/images/a/a0/Blood_Elf_bc_cinematic_3.jpg/revision/latest/scale-to-width-down/1600?cb=20200710195637'},
        { link: 'https://wallpaperset.com/w/full/c/5/5/186537.jpg'},
    ];
        collection30.insertMany(myobj, function (err, res) {
          if (err) throw err;
          console.log("Races Pictures collection inserted into Raiddon db");
        });
    });