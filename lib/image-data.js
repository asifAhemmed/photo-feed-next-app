const photos = [
  {
    id: "94a7e01b-8576-4d18-8b84-6ae588db02d9",
    title: "Mountain Lake Sunset",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&q=80",
    tags: ["nature", "mountain", "lake"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=53",
      name: "Alex B",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 220
    },
    likes: 100,
    width: 400,
    height: 600
  },
  {
    id: "de05d078-6f6d-4272-a08f-5a805a23aba4",
    title: "Ocean Waves",
    url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop&q=80",
    tags: ["nature", "ocean", "waves"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=54",
      name: "Brian Xelo",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 220
    },
    likes: 100,
    width: 400,
    height: 300
  },
  {
    id: "8265198d-e2e1-4221-addc-8244f39fdd62",
    title: "Forest Path",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop&q=80",
    tags: ["nature", "forest", "trees"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=55",
      name: "Ceza Des",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 220
    },
    likes: 100,
    width: 400,
    height: 500
  },
  {
    id: "6cf6c10d-8ba8-46d7-b246-0e1fd5e270df",
    title: "Desert Dunes",
    url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=400&fit=crop&q=80",
    tags: ["nature", "desert", "sand"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=56",
      name: "Karim Bulletin",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 220
    },
    likes: 100,
    width: 400,
    height: 400
  },
  {
    id: "a7f14fb2-9b2d-43bb-98af-6c70158e9c55",
    title: "Cherry Blossom",
    url: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&h=550&fit=crop&q=80",
    tags: ["nature", "flower", "spring"],
    views: "6M",
    share: "2.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=57",
      name: "Madan PA",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 120
    },
    likes: 80,
    width: 400,
    height: 550
  },
  {
    id: "6bea51c4-1123-425f-90c9-9148724872e5",
    title: "Tropical Beach",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop&q=80",
    tags: ["nature", "beach", "ocean"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=58",
      name: "Moina Lam",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 220
    },
    likes: 100,
    width: 400,
    height: 250
  },
  {
    id: "02983ddd-338d-4382-b0c8-316caa21b4a5",
    title: "Northern Lights",
    url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=400&h=600&fit=crop&q=80",
    tags: ["nature", "aurora", "night"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=59",
      name: "Nat B",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 220
    },
    likes: 100,
    width: 400,
    height: 600
  },
  {
    id: "552f7d8d-d9eb-4edc-98a9-cec20c90d90c",
    title: "Misty Mountains",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=450&fit=crop&q=80",
    tags: ["nature", "mountain", "fog"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=60",
      name: "Taral X",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 220
    },
    likes: 100,
    width: 400,
    height: 450
  },
  {
    id: "f4fab2f9-e0cf-4f15-8779-d09d9e6d59bd",
    title: "Autumn Forest",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=350&fit=crop&q=80",
    tags: ["nature", "autumn", "trees"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=61",
      name: "Zhoom B",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 220
    },
    likes: 100,
    width: 400,
    height: 350
  },
  {
    id: "9761a3ea-2c2c-4b6e-a618-a6e4d26cf729",
    title: "Waterfall Wonder",
    url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400&h=600&fit=crop&q=80",
    tags: ["nature", "waterfall", "river"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=62",
      name: "T Manhattan",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 220
    },
    likes: 100,
    width: 400,
    height: 600
  },
  {
    id: "154ca3f8-07ec-464f-9eac-6775ec37bba1",
    title: "Starry Night Sky",
    url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=500&fit=crop&q=80",
    tags: ["nature", "stars", "night"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=63",
      name: "Abhinash Chahal",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 220
    },
    likes: 100,
    width: 400,
    height: 500
  },
  {
    id: "9e396ae7-9ae4-4fec-86e3-4fc52c73b73a",
    title: "Green Valley",
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=280&fit=crop&q=80",
    tags: ["nature", "valley", "green"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=64",
      name: "Cyrun X",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 220
    },
    likes: 100,
    width: 400,
    height: 280
  },
  {
    id: "ddd5975e-d728-4e68-98d1-3b961ab9c18e",
    title: "Snowy Peaks",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=550&fit=crop&q=80",
    tags: ["nature", "snow", "mountain"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=65",
      name: "Matas Currian",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 420
    },
    likes: 100,
    width: 400,
    height: 550
  },
  {
    id: "dcbada31-fa30-4c25-9721-b46b1e6a8d6f",
    title: "Sunset Horizon",
    url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&h=300&fit=crop&q=80",
    tags: ["nature", "sunset", "sky"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=66",
      name: "Somani Dal",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 220
    },
    likes: 100,
    width: 400,
    height: 300
  },
  {
    id: "f536658e-a274-431f-843d-34116dcc1b7e",
    title: "River Rapids",
    url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=480&fit=crop&q=80",
    tags: ["nature", "river", "water"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=67",
      name: "Tom Holla",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 220
    },
    likes: 100,
    width: 400,
    height: 480
  },
  {
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    title: "Lavender Fields",
    url: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=400&h=520&fit=crop&q=80",
    tags: ["nature", "lavender", "purple"],
    views: "8M",
    share: "3.2M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=68",
      name: "Sophie Turner",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 350
    },
    likes: 120,
    width: 400,
    height: 520
  },
  {
    id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    title: "City Lights",
    url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=350&fit=crop&q=80",
    tags: ["city", "night", "urban"],
    views: "12M",
    share: "5.1M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=69",
      name: "Marcus Chen",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 580
    },
    likes: 150,
    width: 400,
    height: 350
  },
  {
    id: "c3d4e5f6-a7b8-9012-cdef-123456789012",
    title: "Golden Hour Meadow",
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=600&fit=crop&q=80",
    tags: ["nature", "sunset", "meadow"],
    views: "9M",
    share: "3.8M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=70",
      name: "Emma Williams",
      bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
      followers: 290
    },
    likes: 95,
    width: 400,
    height: 600
  }
];

const getAllPhotos = () => {
  return photos;
}

const getPhotoById = (id) => {
  return photos.find(photo => photo.id === id);
}

export {
  getAllPhotos,
  getPhotoById
}