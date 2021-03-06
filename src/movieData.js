const products = [
    {
        id: "1",
        name: "Fight Club",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
        releaseDate:"1999",
        director: "David Fincher",
        genre: "Thriller/Drama"
    },
    {
        id: "2",
        name: "Goodfellas",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
        releaseDate:"1990",
        director: "Martin Scorsese",
        genre: "Crime/Drama"
    },
    {
        id: "3",
        name: "American Beauty",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/9a/American_Beauty_1999_film_poster.jpg",
        releaseDate:"1999",
        director: "Sam Mendes",
        genre: "Romance/Drama"
    },
    {
        id: "4",
        name: "Forrest Gump",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        releaseDate:"1994",
        director: "Robert Zemeckis",
        genre: "Drama"
    },
    {
        id: "5",
        name: "Donnie Darko",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/db/Donnie_Darko_poster.jpg",
        releaseDate:"2001",
        director: "Richard Kelly",
        genre: "Sci-Fi/Thriller"
    },
    {
        id: "6",
        name: "A Clockwork Orange",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/73/A_Clockwork_Orange_(1971).png",
        releaseDate:"1971",
        director: "Stanley Kubrick",
        genre: "Drama/Sci-Fi"
    },
    {
        id: "7",
        name: "American History X",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/39/American_History_X_poster.png",
        releaseDate:"1998",
        director: "Tony Kaye",
        genre: "Crime/Drama"
    },
    {
        id: "8",
        name: "Borat",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/39/Borat_ver2.jpg",
        releaseDate:"2006",
        director: "Larry Charles",
        genre: "Comedy"
    },
    {
        id: "9",
        name: "Life is Beautiful",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Vitaebella.jpg/220px-Vitaebella.jpg",
        releaseDate:"1997",
        director: "Roberto Benigni",
        genre: "Drama/Romance"
    },
    {
        id: "10",
        name: "The Silence of the Lambs",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
        releaseDate:"1991",
        director: "Jonathan Demme",
        genre: "Thriller"
    },
    {
        id: "11",
        name: "Spirited Away",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
        releaseDate:"2001",
        director: "Hayao Miyazaki",
        genre: "Animation/Adventure"
    },
    {
        id: "12",
        name: "The Good, the Bad, and the Ugly",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/45/Good_the_bad_and_the_ugly_poster.jpg",
        releaseDate:"1966",
        director: "Sergio Leone",
        genre: "Western"
    },
    {
        id: "13",
        name: "The Blues Brothers",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/ae/Bluesbrothersmovieposter.jpg",
        releaseDate:"1980",
        director: "John Landis",
        genre: "Comedy/Musical"
    },
    {
        id: "14",
        name: "Superbad",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png",
        releaseDate:"2007",
        director: "Greg Mottola",
        genre: "Comedy"
    },
    {
        id: "15",
        name: "Shutter Island",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg",
        releaseDate:"2010",
        director: "Martin Scorsese",
        genre: "Thriller/Mystery"
    },
    {
        id: "16",
        name: "Pulp Fiction",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_(1994)_poster.jpg",
        releaseDate:"1994",
        director: "Quentin Tarantino",
        genre: "Crime/Drama"
    },
    {
        id: "17",
        name: "The Lord of the Rings Trilogy",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d0/Lord_of_the_Rings_-_The_Two_Towers_(2002).jpg",
        releaseDate:"2001,2002,2003",
        director: "Peter Jackson",
        genre: "Adventure/Fantasy"
    },
    {
        id: "18",
        name: "Memento",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c7/Memento_poster.jpg",
        releaseDate:"2000",
        director: "Christopher Nolan",
        genre: "Thriller/Mystery"
    },
    {
        id: "19",
        name: "Whiplash",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/01/Whiplash_poster.jpg",
        releaseDate:"2014",
        director: "Damien Chazelle",
        genre: "Drama"
    },
    {
        id: "20",
        name: "Inglourious Basterds",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c3/Inglourious_Basterds_poster.jpg",
        releaseDate:"2009",
        director: "Quentin Tarantino",
        genre: "War/Action"
    },
    {
        id: "21",
        name: "The Triplets of Belleville",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/9e/Triplets_of_Belleville-Poster.jpg",
        releaseDate:"2003",
        director: "Sylvain Chomet",
        genre: "Animation/Comedy"
    },
    {
        id: "22",
        name: "One Flew Over the Cuckoo's Nest",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/2/26/One_Flew_Over_the_Cuckoo's_Nest_poster.jpg",
        releaseDate:"1975",
        director: "Miloš Forman",
        genre: "Drama"
    },
    {
        id: "23",
        name: "The Matrix",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        releaseDate:"1999",
        director: "Lana Wachowski, Lilly Wachowski",
        genre: "Action/Sci-Fi"
    },
    {
        id: "24",
        name: "The Imaginarium of Doctor Parnassus",
        imgUrl: "https://collinwatchesmovies.files.wordpress.com/2016/06/dr-p.jpg?w=210&h=300",
        releaseDate:"2009",
        director: "Terry Gilliam",
        genre: "Fantasy"
    },
    {
        id: "25",
        name: "Napoleon Dynamite",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/87/Napoleon_dynamite_post.jpg",
        releaseDate:"2004",
        director: "Jared Hess",
        genre: "Comedy/Drama"
    },
    {
        id: "26",
        name: "Hot Fuzz",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BMzg4MDJhMDMtYmJiMS00ZDZmLThmZWUtYTMwZDM1YTc5MWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR89,0,630,1200_AL_.jpg",
        releaseDate:"2007",
        director: "Edgar Wright",
        genre: "Comedy/Action"
    },
    {
        id: "27",
        name: "The Labyrinth",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/6b/Labyrinth_ver2.jpg",
        releaseDate:"1986",
        director: "Jim Henson",
        genre: "Fantasy/Musical"
    },
    {
        id: "28",
        name: "The Theory of Everything",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/67/The_Theory_of_Everything_(2014).jpg",
        releaseDate:"2014",
        director: "James Marsh",
        genre: "Romance/Drama"
    },
    {
        id: "29",
        name: "The Dallas Buyers Club",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a8/Dallas_Buyers_Club_poster.jpg",
        releaseDate:"2013",
        director: "Jean-Marc Vallée",
        genre: "Drama"
    },
    {
        id: "30",
        name: "American Psycho",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/American_Psycho.png",
        releaseDate:"2000",
        director: "Mary Harron",
        genre: "Thriller/Mystery"
    },
    {
        id: "31",
        name: "Se7en",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/Seven_(movie)_poster.jpg",
        releaseDate:"1995",
        director: "David Fincher",
        genre: "Crime/Thriller"
    },
    {
        id: "32",
        name: "The Illusionist",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/70/L'illusionniste-poster.jpg",
        releaseDate:"2011",
        director: "Sylvain Chomet",
        genre: "Animation/Drama/Comedy"
    },
    {
        id: "33",
        name: "The Game",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/2/22/The_Game_film_poster.jpg",
        releaseDate:"1997",
        director: "David Fincher",
        genre: "Thriller/Mystery"
    },
    {
        id: "34",
        name: "What We Do in the Shadows",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/70/What_We_Do_in_the_Shadows_poster.jpg",
        releaseDate:"2014",
        director: "Taika Waititi, Jemaine Clement",
        genre: "Comedy"
    },
    {
        id: "35",
        name: "The Shining",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/1d/The_Shining_(1980)_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg",
        releaseDate:"1980",
        director: "Stanley Kubrick",
        genre: "Horror"
    },
    {
        id: "36",
        name: "Rocky",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/18/Rocky_poster.jpg",
        releaseDate:"1976",
        director: "John G. Avildsen",
        genre: "Sport/Drama"
    },
    {
        id: "37",
        name: "Raging Bull",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5f/Raging_Bull_poster.jpg",
        releaseDate:"1980",
        director: "Martin Scorsese",
        genre: "Sport/Drama"
    },
    {
        id: "38",
        name: "Eternal Sunshine of a Spotless Mind",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a4/Eternal_Sunshine_of_the_Spotless_Mind.png",
        releaseDate:"2004",
        director: "Michel Gondry",
        genre: "Romance/Sci-Fi"
    },
    {
        id: "39",
        name: "Ratatouille",
        imgUrl: "https://images.moviesanywhere.com/26ef082242bcfa6a24c5f34c616c23c7/0b34ab43-61bc-40e2-97cb-97edc50b1186.jpg",
        releaseDate:"2007",
        director: "Brad Bird",
        genre: "Animation/Adventure"
    },
    {
        id: "40",
        name: "Full Metal Jacket",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg",
        releaseDate:"1987",
        director: "Stanley Kubrick",
        genre: "War/Drama"
    },
    {
        id: "41",
        name: "Trainspotting",
        imgUrl: "https://resizing.flixster.com/5cpy6TwwZJis_7FYt2R_7_jC6_A=/206x305/v1.bTsxMTE3NjEwNztqOzE4NTM0OzEyMDA7ODAwOzEyMDA",
        releaseDate:"1996",
        director: "Danny Boyle",
        genre: "Dark Comedy"
    },
    {
        id: "42",
        name: "12 Monkeys",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Twelve_monkeysmp.jpg/220px-Twelve_monkeysmp.jpg",
        releaseDate:"1995",
        director: "Terry Gilliam",
        genre: "Sci-Fi/Thriller"
    },
    {
        id: "43",
        name: "Gattaca",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/de/Gattaca_poster.jpg",
        releaseDate:"1997",
        director: "Andrew Niccol",
        genre: "Sci-Fi/Romance"
    },
    {
        id: "44",
        name: "Shrek 2",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b9/Shrek_2_poster.jpg",
        releaseDate:"2004",
        director: "Andrew Adamson, Conrad Vernon, Kelly Asbury",
        genre: "Animation/Fantasy"
    },
    {
        id: "45",
        name: "This is Spinal Tap",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c8/Thisisspinaltapposter.jpg",
        releaseDate:"1984",
        director: "Rob Reiner",
        genre: "Comedy/Musical"
    },
    {
        id: "46",
        name: "The Terminator",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/70/Terminator1984movieposter.jpg",
        releaseDate:"1984",
        director: "James Cameron",
        genre: "Action/Sci-Fi"
    },
    {
        id: "47",
        name: "Coraline",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/36/Coraline_poster.jpg",
        releaseDate:"2009",
        director: "Henry Selick",
        genre: "Animation/Fantasy"
    },
    {
        id: "48",
        name: "A Beautiful Mind",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b8/A_Beautiful_Mind_Poster.jpg",
        releaseDate:"2001",
        director: "Ron Howard",
        genre: "Drama"
    },
    {
        id: "49",
        name: "The Addams Family Values",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/e9/Addams_family_values.jpg",
        releaseDate:"1993",
        director: "Barry Sonnenfeld",
        genre: "Comedy"
    },
    {
        id: "50",
        name: "Howl's Moving Castle",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a0/Howls-moving-castleposter.jpg",
        releaseDate:"2004",
        director: "Hayao Miyazaki",
        genre: "Animation/Fantasy"
    },
    {
        id: "51",
        name: "Leon the Professional",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/03/Leon-poster.jpg",
        releaseDate:"1994",
        director: "Luc Besson",
        genre: "Action/Drama"
    },
    {
        id: "52",
        name: "Catch Me if You Can",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/4d/Catch_Me_If_You_Can_2002_movie.jpg",
        releaseDate:"2003",
        director: "Steven Spielberg",
        genre: "Crime"
    },
    {
        id: "53",
        name: "The Dictator",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/4b/The_Dictator_Poster.jpg",
        releaseDate:"2012",
        director: "Larry Charles",
        genre: "Comedy"
    },
    {
        id: "54",
        name: "The Godfather",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        releaseDate:"1972",
        director: "Francis Ford Coppola",
        genre: "Crime"
    },
    {
        id: "55",
        name: "Alien",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg",
        releaseDate:"1979",
        director: "Ridley Scott",
        genre: "Sci-Fi/Horror"
    },
    {
        id: "56",
        name: "Django Unchained",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg",
        releaseDate:"2012",
        director: "Quentin Tarantino",
        genre: "Western/Drama"
    },
    {
        id: "57",
        name: "Fargo",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/33/Fargo_(1996_movie_poster).jpg",
        releaseDate:"1996",
        director: "Ethan Coen, Joel Coen",
        genre: "Crime/Thriller"
    },
    {
        id: "58",
        name: "Into the Wild",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/dc/Into_the_Wild_(2007_film_poster).png",
        releaseDate:"2007",
        director: "Sean Penn",
        genre: "Drama/Adventure"
    },
    {
        id: "59",
        name: "Saving Private Ryan",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg",
        releaseDate:"1998",
        director: "Steven Spielberg",
        genre: "War/Drama"
    },
    {
        id: "60",
        name: "The Wolf of Wall Street",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_(2013).png",
        releaseDate:"2013",
        director: "Martin Scorsese",
        genre: "Comedy/Drama"
    },
    {
        id: "61",
        name: "The Big Lebowski",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/35/Biglebowskiposter.jpg",
        releaseDate:"1998",
        director: "Ethan Coen, Joel Coen",
        genre: "Comedy"
    },
    {
        id: "62",
        name: "Reservoir Dogs",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/01/Reservoir_Dogs.png",
        releaseDate:"1992",
        director: "Quentin Tarantino",
        genre: "Crime"
    },
    {
        id: "63",
        name: "Drive",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/13/Drive2011Poster.jpg",
        releaseDate:"2011",
        director: "Nicolas Winding Refn",
        genre: "Action/Drama"
    },
    {
        id: "64",
        name: "This is England",
        imgUrl: "https://resizing.flixster.com/4ZM3Q6CT26MLSKiLj6GQQ3394Yc=/206x305/v1.bTsxMTI5Nzg2ODtqOzE4NTM1OzEyMDA7MTUzNjsyMDQ4",
        releaseDate:"2006",
        director: "Shane Meadows",
        genre: "Drama"
    },
    {
        id: "65",
        name: "City of God",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/10/CidadedeDeus.jpg",
        releaseDate:"2002",
        director: "Fernando Meirelles, Kátia Lund",
        genre: "Crime/Drama"
    },
    {
        id: "66",
        name: "The Departed",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg",
        releaseDate:"2006",
        director: "Martin Scorsese",
        genre: "Crime"
    },
    {
        id: "67",
        name: "Being John Malkovich",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/55/Being_John_Malkovich_poster.jpg",
        releaseDate:"1999",
        director: "Spike Jonze",
        genre: "Fantasy/Comedy"
    },
    {
        id: "68",
        name: "Gran Torino",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c6/Gran_Torino_poster.jpg",
        releaseDate:"2008",
        director: "Clint Eastwood",
        genre: "Drama"
    },
    {
        id: "69",
        name: "Snatch",
        imgUrl: "https://resizing.flixster.com/M5yiUtmkhx_hBBkyauSVI8qWx48=/206x305/v1.bTsxMTE3NjY3NTtqOzE4NTM0OzEyMDA7ODAwOzEyMDA",
        releaseDate:"2000",
        director: "Guy Ritchie",
        genre: "Comedy/Crime"
    },
    {
        id: "70",
        name: "The Usual Suspects",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/9c/Usual_suspects_ver1.jpg",
        releaseDate:"1995",
        director: "Bryan Singer",
        genre: "Thriller/Mystery"
    },
    {
        id: "71",
        name: "Gladiator",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_(2000_film_poster).png",
        releaseDate:"2013",
        director: "Ridley Scott",
        genre: "Action/Adventure"
    },
    {
        id: "72",
        name: "No Country for Old Men",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        releaseDate:"2007",
        director: "Ethan Coen, Joel Coen",
        genre: "Crime/Thriller"
    },
    {
        id: "73",
        name: "Fear and Loathing in Las Vegas",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/6f/FandlinLV.jpg",
        releaseDate:"1998",
        director: "Terry Gilliam",
        genre: "Dark Comedy"
    },
    {
        id: "74",
        name: "The Blade Runner",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/9f/Blade_Runner_(1982_poster).png",
        releaseDate:"1982",
        director: "Ridley Scott",
        genre: "Sci-Fi"
    },
    {
        id: "75",
        name: "Battle Royale",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BMDc2MGYwYzAtNzE2Yi00YmU3LTkxMDUtODk2YjhiNDM5NDIyXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg",
        releaseDate:"2000",
        director: "Kinji Fukasaku",
        genre: "Action/Thriller"
    },
    {
        id: "76",
        name: "The Machinist",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b9/The_Machinist_poster.JPG",
        releaseDate:"2004",
        director: "Brad Anderson",
        genre: "Thriller/Drama"
    },
    {
        id: "77",
        name: "The Imittation Game",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/87/The_Imitation_Game_(2014).png",
        releaseDate:"2015",
        director: "Morten Tyldum",
        genre: "Drama"
    },
    {
        id: "78",
        name: "Donnie Brasco",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/bb/Donnie_brasco_ver2.jpg",
        releaseDate:"1997",
        director: "Mike Newell",
        genre: "Crime/Drama"
    },
    {
        id: "79",
        name: "Prisoners",
        imgUrl: "https://tvguide1.cbsistatic.com/feed/1/396/12056396.jpg",
        releaseDate:"2013",
        director: "Denis Villeneuve",
        genre: "Thriller/Mystery"
    },
    {
        id: "80",
        name: "Lock, Stock and Two Smoking Barrels",
        imgUrl: "https://resizing.flixster.com/RpVhpvXT-u9FvdnQBK280CCFFRM=/206x305/v1.bTsxMTE3NjUzMjtqOzE4NTM0OzEyMDA7ODAwOzEyMDA",
        releaseDate:"1998",
        director: "Guy Ritchie",
        genre: "Comedy/Crime"
    },
    {
        id: "81",
        name: "Natural Born Killers",
        imgUrl: "https://resizing.flixster.com/oEdKYkFNsr_wfKVCglLuSSVbllY=/206x305/v1.bTsxMTE2ODA4MTtqOzE4NTM0OzEyMDA7ODAwOzEyMDA",
        releaseDate:"1994",
        director: "Oliver Stone",
        genre: "Crime/Drama"
    },
    {
        id: "82",
        name: "Inception",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_(2010)_theatrical_poster.jpg",
        releaseDate:"2010",
        director: "Christopher Nolan",
        genre: "Sci-Fi/Thriller"
    },
    {
        id: "83",
        name: "Rush",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d0/Rush_UK_poster.jpeg",
        releaseDate:"2013",
        director: "Ron Howard",
        genre: "Sport/Drama"
    },
    {
        id: "84",
        name: "Good Will Hunting",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/52/Good_Will_Hunting.png",
        releaseDate:"1997",
        director: "Gus Van Sant",
        genre: "Drama"
    },
    {
        id: "85",
        name: "The King of Comedy",
        imgUrl: "https://resizing.flixster.com/7Nek2jZSgGJZ-16mVZGueXu1oGU=/206x305/v1.bTsxMTIwNDM3MjtqOzE4NTM0OzEyMDA7MTE3OTsxNTcy",
        releaseDate:"1982",
        director: "Martin Scorsese",
        genre: "Dark Comedy"
    },
    {
        id: "86",
        name: "Interstellar",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        releaseDate:"2014",
        director: "Christopher Nolanr",
        genre: "Sci-Fi"
    },
    {
        id: "87",
        name: "The Terminal",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/86/Movie_poster_the_terminal.jpg",
        releaseDate:"2004",
        director: "Steven Spielberg",
        genre: "Drama/Comedy"
    },
    {
        id: "88",
        name: "2001: A Space Odyssey",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/11/2001_A_Space_Odyssey_(1968).png",
        releaseDate:"1968",
        director: "Stanley Kubrick",
        genre: "Sci-Fi"
    },
    {
        id: "89",
        name: "Primal Fear",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/fc/Primal_Fear_(1996_film)_poster.jpg",
        releaseDate:"1996",
        director: "Gregory Hoblit",
        genre: "Thriller/Crime"
    },
    {
        id: "90",
        name: "Groundhog Day",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b1/Groundhog_Day_(movie_poster).jpg",
        releaseDate:"1993",
        director: "Harold Ramis",
        genre: "Comedy/Romance"
    },
    {
        id: "91",
        name: "Casino",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d8/Casino_poster.jpg",
        releaseDate:"1995",
        director: "Martin Scorsese",
        genre: "Crime/Drama"
    },
    {
        id: "92",
        name: "21 Jump Street",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/93/21JumpStreetfilm.jpg",
        releaseDate:"2012",
        director: "Phil Lord, Chris Miller",
        genre: "Comedy/Action"
    },
    {
        id: "93",
        name: "Parasite",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_(2019_film).png",
        releaseDate:"2019",
        director: "Bong Joon-ho",
        genre: "Thriller"
    },
    {
        id: "94",
        name: "The Hangover",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg",
        releaseDate:"2009",
        director: "Todd Phillips",
        genre: "Comedy"
    },
    {
        id: "95",
        name: "Mallrats",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/Mallrats.jpg",
        releaseDate:"1995",
        director: "Kevin Smith",
        genre: "Comedy"
    },
    {
        id: "96",
        name: "Shaun of the Dead",
        imgUrl: "https://resizing.flixster.com/EOBkX0f1z67uca2tkz3kTW15Myg=/206x305/v1.bTsxMTE3MDc2NztqOzE4NTM0OzEyMDA7ODAwOzEyMDA",
        releaseDate:"2004",
        director: "Edgar Wright",
        genre: "Comedy/Horror"
    },
    {
        id: "97",
        name: "Zombieland",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a3/Zombieland-poster.jpg",
        releaseDate:"2009",
        director: "Ruben Fleischer",
        genre: "Comedy/Horror"
    },
    {
        id: "98",
        name: "My Friend Dahmer",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/My_Friend_Dahmer_film_poster.jpg",
        releaseDate:"2017",
        director: "Marc Meyers",
        genre: "Drama"
    },
    {
        id: "99",
        name: "Zodiac",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/3a/Zodiac2007Poster.jpg",
        releaseDate:"2007",
        director: "David Fincher",
        genre: "Thriller/Mystery"
    },
    {
        id: "100",
        name: "The Prestige",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg",
        releaseDate:"2006",
        director: "Christopher Nolan",
        genre: "Thriller/Drama"
    }
    
]

export default products