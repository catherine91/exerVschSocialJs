var athlete = {
    name: "Dave",
    age: 44,
    height: "73 inches",
    hometown: "Chicago, IL",
    printHometown: function() {
        console.log(this.hometown);
    },
    favoriteSport: [
        {
            sportName: "basketball",
            teamInfo: [
                {
                    practiceDay: "Saturday",
                    locationName: "East Valley Church",
                },
            ]
        },
    ],
    athleteFriends: [
        {
            name: "Carmen",
            age: 31,
            height: "60 inches",
            hometown: "Cedar City, UT",
            favoriteSport: [
                {
                    sportName: "softball",
                    teamInfo: [
                        {
                            practiceDay: "Wednesday",
                            locationName: "Elmwood Park",
                        }
                    ]
                },
            ],
        },
        {
            name: "Mitchell",
            age: 28,
            height: "70 inches",
            hometown: "San Diego, CA",
            favoriteSport: [
                {
                    sportName: "football",
                    teamInfo: [
                        {
                            practiceDay: "Monday",
                            locationName: "Liberty High School",
                        }
                    ]
                },
            ]
        }
    ]
}

athlete.favoriteFood = 'Milk shake';
athlete.car = "Jeep Liberty";
athlete.athleteFriends.push({
    name: "Johanna",
    age: 35,
    height: "67 inches",
    hometown: "Reno, NV",
    favoriteSport: [
        {
            sportName: "Cricket",
            teamInfo: [
                {
                    practiceDay: "Friday",
                    locationName: "Layton Community Center",
                }
            ]
        },
    ],
});

athlete.athleteFriends.push({
    name: "Mike",
    age: 30,
    height: "72 inches",
    hometown: "Pleasant Grove, UT",
    favoriteSport: [
        {
            sportName: "Tennis",
            teamInfo: [
                {
                    practiceDay: "Monday",
                    locationName: "Skyline High School Tennis",
                }
            ]
        },
    ],
})

console.log(athlete)