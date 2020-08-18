'use strict'

let musics = [
    {musicid:123, title: "Man of the century", type:"Hiphop", year:2020, publisher:"Dynamic"},
    {musicid:321, title: "Our differnce", type:"Old", year:2019, publisher:"Holywood"},
    {musicid:234, title: "Love", type:"country", year:2018, publisher:"Bis"},
    {musicid:456, title: "Blessing", type:"Jazz", year:2017, publisher:"Seattle Music center"},
    {musicid:125, title: "Lets go together", type:"Hiphop", year:2015, publisher:"ytech"},
    {musicid:963, title: "Beautiful", type:"Jazz", year:2016, publisher:"catcom"},   
];

exports.getAll = () => {
    return musics;
};
exports.getItem =(title) => {
    let found = musics.find((album) => {
        return album.title === title;
      });
      console.log(found);
    return found;
};
//console.log(this.getItem(‘Ahd’))



