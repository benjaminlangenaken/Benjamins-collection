const albumCollection = [
    {
        rankNr: 10,
        name: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        releaseYear: 1973,
        genre: ["Rock"],
        info: "“I think every album was a step towards Dark Side of the Moon,” keyboardist Rick Wright said. “We were learning all the time; the techniques of the recording and our writing was getting better.” As a culmination of their inner-space explorations of the early 1970s, the Floyd toured the bulk of Dark Side in Britain for months prior to recording. Dark Side is one of the best-produced rock albums ever, and “Money” may be rock’s only Top 20 hit in 7/4 time.",
        imgUrl: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-055-Pink-Floyd-Dark-Side-of-the-Moon.jpg?w=1000",
        spotifyUrl: "https://open.spotify.com/album/2WT1pbYjLJciAR26yMebkH"
    },
    {
        rankNr: 9,
        name: "Highway 61 Revisited",
        artist: "Bob Dylan",
        releaseYear: 1965,
        genre: ["Folk", "Rock"],
        info: "Bruce Springsteen has described the beginning of “Like a Rolling Stone,” the opening song on Bob Dylan’s Highway 61 Revisited, as the “snare shot that sounded like somebody’d kicked open the door to your mind.” In and of itself, “Like a Rolling Stone,” which was rumored to be about Andy Warhol acolyte Edie Sedgwick, forever altered the landscape of popular music — its “vomitiﬁc” lyrics (in Dylan’s memorable term), literary ambition, and sheer length (6:13) shattered limitations of every kind. But that was literally only the beginning.",
        imgUrl: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-018-Bob-Dylan-HWY-61-REVISITED-updated.jpg?w=1000",
        spotifyUrl: "https://open.spotify.com/album/6YabPKtZAjxwyWbuO9p4ZD"
    },
    {
        rankNr: 8,
        name: "Purple Rain",
        artist: "Prince",
        releaseYear: 1984,
        genre: ["Funk", "Soul"],
        info: "“I think Purple Rain is the most avant-garde, ‘purple’ thing I’ve ever done,” Prince told Ebony in 1986. He was still a rising star with only a couple of hits when he got the audacious idea to make a movie based on his life, and make his next LP the movie’s soundtrack. When it was released in 1984, he became the first artist to have the Number One song, album, and movie in North America.",
        imgUrl: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-008-Prince-PURPLE-RAIN.jpg?w=1000",
        spotifyUrl: "https://open.spotify.com/album/7nXJ5k4XgRj5OLg9m8V3zc"
    },
    {
        rankNr: 7,
        name: "Rumours",
        artist: "Fleetwood Mac",
        releaseYear: 1977,
        genre: ["Rock"],
        info: "With Rumours, Fleetwood Mac turned private turmoil into gleaming, melodic public art. The band’s two couples — bassist John McVie and singer-keyboard player Christine McVie, who were married; guitarist Lindsey Buckingham and vocalist Stevie Nicks, who were not — broke up during the protracted sessions for the album. As John later told Rolling Stone of the atmosphere during the making of Rumours, “Parties going on all over the house. Amazing. Terrifying. Huge amounts of illicit materials, yards and yards of this wretched stuff. Days and nights would just go on and on.”",
        imgUrl: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-007-Fleetwood-Mac-RUMOURS.jpg?w=1000",
        spotifyUrl: "https://open.spotify.com/album/1bt6q2SruMsBtcerNVtpZB"
    },
    {
        rankNr: 6,
        name: "Nevermind",
        artist: "Nirvana",
        releaseYear: 1991,
        genre: ["Grunge", "Alternative"],
        info: "An overnight-success story of the 1990s, Nirvana’s second album and its totemic ﬁrst single, “Smells Like Teen Spirit,” shot up from the Northwest underground — the nascent grunge scene in Seattle — to kick Michael Jackson’s Dangerous off the top of the Billboard charts and blow hair metal off the map. Few albums have had such an overpowering impact on a generation — a nation of teens suddenly turned punk — and such a catastrophic effect on its main creator. The weight of success led already-troubled singer-guitarist Kurt Cobain to take his own life in 1994.",
        imgUrl: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-006-Nirvana-NEVERMIND-HR.jpg?w=1000",
        spotifyUrl: "https://open.spotify.com/album/2UJcKiJxNryhL050F5Z1Fk"
    },
    {
        rankNr: 5,
        name: "Abbey Road",
        artist: "The Beatles",
        releaseYear: 1969,
        genre: ["Pop", "Rock"],
        info: "“It was a very happy record,” said producer George Martin. “I guess it was happy because everybody thought it was going to be the last.” Indeed, Abbey Road almost never got made at all. That January, the Beatles were on the verge of a breakup, exhausted and angry with one another after the disastrous sessions for the aborted Get Back LP. Yet determined to go out with the same glory with which they had ﬁrst entranced the world at the start of the decade, the group reconvened at EMI’s Abbey Road Studios to make their most polished album: a collection of superb songs cut with an attention to reﬁned detail, then segued together with conceptual force.",
        imgUrl: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-005-Beatles-ABBEY-ROAD.jpg?w=1000",
        spotifyUrl: "https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN"
    },
    {
        rankNr: 4,
        name: "Pet Sounds",
        artist: "The Beach Boys",
        releaseYear: 1966,
        genre: ["Surf", "Pop"],
        info: "“Who’s gonna hear this shit?” Beach Boys singer Mike Love asked the band’s resident genius, Brian Wilson, in 1966, as Wilson played him the new songs he was working on. “The ears of a dog?” Confronted with his bandmate’s contempt, Wilson made lemonade of lemons. “Ironically,” he observed, “Mike’s barb inspired the album’s title.”",
        imgUrl: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-002-Beach-Boys-PET-SOUNDS-update.jpg?w=1000",
        spotifyUrl: "https://open.spotify.com/album/6GphKx2QAPRoVGWE9D7ou8"
    },
    {
        rankNr: 3,
        name: "What's Going On",
        artist: "Marvin Gaye",
        releaseYear: 1971,
        genre: ["Funk", "Soul"],
        info: "Marvin Gaye’s masterpiece began as a reaction to police brutality. In May 1969, Renaldo “Obie” Benson, the Four Tops’ bass singer, watched TV coverage of hundreds of club-wielding cops breaking up the People’s Park, a protest hub in Berkeley. Aghast at the violence, Benson began to write a song with Motown lyricist Al Cleveland, trying to capture the confusion and pain of the times. He knew he had something big in his nascent version of “What’s Going On,” but the rest of the Four Tops weren’t interested, and Benson’s efforts to get Joan Baez to record it didn’t work out, either.",
        imgUrl: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-001-Marvin-Gaye-WHATS-GOING-ON.jpg?w=1000",
        spotifyUrl: "https://open.spotify.com/album/2v6ANhWhZBUKkg6pJJBs3B"
    },
    {
        rankNr: 2,
        name: "Blue",
        artist: "Joni Mitchell",
        releaseYear: 1971,
        genre: ["Folk"],
        info: "In 1971, Joni Mitchell represented the West Coast feminine ideal — celebrated by Robert Plant as “a girl out there with love in her eyes and flowers in her hair” on Led Zeppelin’s “Goin’ to California.” It was a status that Mitchell hadn’t asked for and did not want: “I went, ‘Oh, my God, a lot of people are listening to me,’” she recalled in 2013. “’They better find out who they’re worshiping. Let’s see if they can take it. Let’s get real.’ So I wrote Blue.”",
        imgUrl: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-003-JoniMitchell-BLUE-HR.jpg?w=1000",
        spotifyUrl: "https://open.spotify.com/album/1vz94WpXDVYIEGja8cjFNa"
    },
    {
        rankNr: 1,
        name: "Kind of Blue",
        artist: "Miles Davis",
        releaseYear: 1959,
        genre: ["Jazz"],
        info: "This painterly masterpiece is one of the most important, inﬂuential, and popular albums in jazz. At the time it was made, Kind of Blue was also a revolution all its own. Turning his back on standard chord progressions, trumpeter Miles Davis used modal scales as a starting point for composition and improvisation — breaking new ground with warmth, subtlety, and understatement in the thick of hard bop. Davis and his peerless band — bassist Paul Chambers, drummer Jimmy Cobb, pianist Bill Evans, and the titanic sax team of John Coltrane and Cannonball Adderley — soloed in uncluttered settings, typiﬁed by “melodic rather than harmonic variation,” as Davis put it.",
        imgUrl: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-031-Miles-Davis-KIND-OF-BLUE.jpg?w=1000",
        spotifyUrl: "https://open.spotify.com/album/1weenld61qoidwYuZ1GESA"
    }
]

// adding cards to HTML

for (let album in albumCollection) {
    const albumCard = document.createElement("div");
    albumCard.className = "card";
    document.getElementsByClassName("container")[0].appendChild(albumCard)
}

//adding card contents
for (let album in albumCollection) {
    const rankNr = document.createElement("p");
    rankNr.innerHTML = albumCollection[album].rankNr;
    rankNr.className = "ranknr";
    document.getElementsByClassName("card")[album].appendChild(rankNr);

    const name = document.createElement("h2");
    name.innerHTML = albumCollection[album].name;
    name.className = "name";
    document.getElementsByClassName("card")[album].appendChild(name);

    const artist = document.createElement("h2");
    artist.innerHTML = albumCollection[album].artist;
    artist.className = "artist";
    document.getElementsByClassName("card")[album].appendChild(artist);

    const releaseYear = document.createElement("h3");
    releaseYear.innerHTML = albumCollection[album].releaseYear;
    releaseYear.className = "releaseYear";
    document.getElementsByClassName("card")[album].appendChild(releaseYear);

    const genre = document.createElement("h3");
    genre.className = "genre";
    genre.innerHTML = albumCollection[album].genre
    document.getElementsByClassName("card")[album].appendChild(genre);


    const info = document.createElement("p");
    info.innerHTML = albumCollection[album].info;
    info.className = "info";
    document.getElementsByClassName("card")[album].appendChild(info);

    const img = document.createElement("img");
    img.src = albumCollection[album].imgUrl;
    img.className = "imgUrl";
    document.getElementsByClassName("card")[album].appendChild(img);

    const line = document.createElement("hr");
    document.getElementsByClassName("card")[album].appendChild(line);

    const spotifyUrl = document.createElement("a");
    spotifyUrl.innerHTML = albumCollection[album].spotifyUrl;
    spotifyUrl.href = albumCollection[album].spotifyUrl;
    spotifyUrl.className = "spotifyUrl";
    document.getElementsByClassName("card")[album].appendChild(spotifyUrl);
}
