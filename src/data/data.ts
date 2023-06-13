const Profiles = [
  {
    id: "0cb3c47e-0a60-4095-b533-70727a52fd2e",
    profileName: "kevcoxe",
    profileLocation: "Chattanooga, TN",
    profilePic: "/profiles/dog.jpg",
    description: "Always developing"
  },
  {
    id: "935b7b67-aaaa-47af-a061-b31dbc162bd1",
    profileName: "cyber",
    profileLocation: "New york, NY",
    profilePic: "/profiles/street-umbrella.jpg",
    description: "Always creepy"
  },
  {
    id: "d62a1aff-69ec-4940-bb3c-e593235c3eb3",
    profileName: "lemon-grass",
    profileLocation: "Dayton, OH",
    profilePic: "/profiles/lemmon-grass.jpg",
    description: "Always creepy"
  }
]

const Posts = [
  {
    id: "9cc0661b-54ba-420e-9315-b6a248e33916",
    profileId: "0cb3c47e-0a60-4095-b533-70727a52fd2e",
    imageLocation: "/kevcoxe/do-something.jpg",
    description: "Do something great",
    views: "12.425",
    comments: [],
    datePosted: "1 days ago"
  },
  {
    id: "1534f439-584e-471e-aaef-bee1c0cbd76c",
    profileId: "935b7b67-aaaa-47af-a061-b31dbc162bd1",
    imageLocation: "/cyber/orange-glasses.jpg",
    description: "this is a post about some flowers",
    views: "40.000",
    comments: [],
    datePosted: "1 days ago"
  },
  {
    id: "ca12b9e4-0030-484d-be0e-70ef40a8fc1b",
    profileId: "d62a1aff-69ec-4940-bb3c-e593235c3eb3",
    imageLocation: "/lemmon-grass/flowers.jpg",
    description: "this is a post about some flowers",
    views: "40.000",
    comments: [],
    datePosted: "1 days ago"
  },
  {
    id: "4133759b-4ecc-488d-bce4-d5aa63d01563",
    profileId: "935b7b67-aaaa-47af-a061-b31dbc162bd1",
    imageLocation: "/cyber/ride.jpg",
    description: "this is a post about some flowers",
    views: "40.000",
    comments: [],
    datePosted: "1 days ago"
  },
  {
    id: "59ecdb3e-1ef3-44f1-8eb6-570b436c153e",
    profileId: "935b7b67-aaaa-47af-a061-b31dbc162bd1",
    imageLocation: "/cyber/tunnel-night.jpg",
    description: "this is a post about some flowers",
    views: "40.000",
    comments: [],
    datePosted: "1 days ago"
  },
  {
    id: "89b304a0-4a20-4642-a2b4-823d6d6037be",
    profileId: "935b7b67-aaaa-47af-a061-b31dbc162bd1",
    imageLocation: "/cyber/cyberpunk.jpg",
    description: "this is a post about some flowers",
    views: "40.000",
    comments: [],
    datePosted: "1 days ago"
  },
  {
    id: "85d66357-623a-48b8-bdc7-3a692385311a",
    profileId: "935b7b67-aaaa-47af-a061-b31dbc162bd1",
    imageLocation: "/cyber/cyber-street.jpg",
    description: "this is a post about some flowers",
    views: "40.000",
    comments: [],
    datePosted: "1 days ago"
  },
  {
    id: "2d2c7b58-890d-473f-bcda-1d7e4d67a18e",
    profileId: "0cb3c47e-0a60-4095-b533-70727a52fd2e",
    imageLocation: "/kevcoxe/car.jpg",
    description: "this is a post about some flowers",
    views: "40.000",
    comments: [],
    datePosted: "1 days ago"
  },
  {
    id: "ae878da7-7aa8-4d10-aa3d-0215e08c9552",
    profileId: "0cb3c47e-0a60-4095-b533-70727a52fd2e",
    imageLocation: "/kevcoxe/mustang.jpg",
    description: "this is a post about some flowers",
    views: "40.000",
    comments: [],
    datePosted: "1 days ago"
  },
  {
    id: "0aad3061-a893-4276-b5df-a7fabf17510e",
    profileId: "0cb3c47e-0a60-4095-b533-70727a52fd2e",
    imageLocation: "/profiles/dog.jpg",
    description: "this is a post about some flowers",
    views: "400",
    comments: [],
    datePosted: "2 days ago"
  },
  {
    id: "c51555b4-3fbb-4089-bb9f-75fddf3b7c77",
    profileId: "935b7b67-aaaa-47af-a061-b31dbc162bd1",
    imageLocation: "/cyber/bar.jpg",
    description: "this is a post about some flowers",
    views: "400",
    comments: [],
    datePosted: "2 days ago"
  },
  {
    id: "261739fa-3c92-4ae9-8c62-d21e04540364",
    profileId: "d62a1aff-69ec-4940-bb3c-e593235c3eb3",
    imageLocation: "/lemmon-grass/hats.jpg",
    description: "this is a post about some flowers",
    views: "10.000",
    comments: [],
    datePosted: "3 days ago"
  },
  {
    id: "5eb730d8-ede0-4f1d-8bf5-2a536bd7bb62",
    profileId: "d62a1aff-69ec-4940-bb3c-e593235c3eb3",
    imageLocation: "/lemmon-grass/beach.jpg",
    description: "this is a post about some flowers",
    views: "10.000",
    comments: [],
    datePosted: "3 days ago"
  },
  {
    id: "63c64187-513d-4570-8bf3-4aeca2af13aa",
    profileId: "d62a1aff-69ec-4940-bb3c-e593235c3eb3",
    imageLocation: "/lemmon-grass/slopes.jpg",
    description: "this is a post about some flowers",
    views: "10.000",
    comments: [],
    datePosted: "3 days ago"
  },
  {
    id: "eabd73c5-178b-4ee4-9d7a-3de428d2440b",
    profileId: "935b7b67-aaaa-47af-a061-b31dbc162bd1",
    imageLocation: "/cyber/old-car.jpg",
    description: "this is a post about some flowers",
    views: "10.000",
    comments: [],
    datePosted: "3 days ago"
  },
]

export {
  Posts,
  Profiles
}