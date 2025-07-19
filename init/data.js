const sample_list = [
  {
    title: "Luxury Beach Villa",
    description: "A beautiful beachfront villa with stunning sea views.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 850000,
    location: "Goa",
    country: "India"
  },
  {
    title: "Modern Apartment in Downtown",
    description: "Close to all amenities, this modern apartment is perfect for professionals.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 120000,
    location: "New York City",
    country: "USA"
  },
  {
    title: "Countryside Cottage",
    description: "Peaceful 2-bedroom cottage surrounded by nature.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 95000,
    location: "Yorkshire",
    country: "UK"
  },
  {
    title: "Mountain View Cabin",
    description: "Cozy wooden cabin with panoramic mountain views.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 145000,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Penthouse with Infinity Pool",
    description: "Exclusive penthouse with private pool and skyline view.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2200000,
    location: "Dubai Marina",
    country: "UAE"
  },
  {
    title: "Budget Friendly Studio",
    description: "Affordable studio apartment ideal for students.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 35000,
    location: "Berlin",
    country: "Germany"
  },
  {
    title: "Lake House",
    description: "Serene house located near a peaceful lake.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 175000,
    location: "Queenstown",
    country: "New Zealand"
  },
  {
    title: "Modern Loft",
    description: "A stylish loft apartment in the heart of the city.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 310000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Traditional Ryokan",
    description: "Experience authentic Japanese living in this traditional Ryokan.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 450000,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Smart Home Bungalow",
    description: "Fully-automated smart home with garden and garage.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 480000,
    location: "San Francisco",
    country: "USA"
  },
  {
    title: "Jungle Retreat",
    description: "A secluded eco-friendly retreat surrounded by jungle.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 130000,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Rustic Farmhouse",
    description: "Large farmhouse with barn and wide open spaces.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 265000,
    location: "Texas",
    country: "USA"
  },
  {
    title: "Charming Townhouse",
    description: "Compact yet charming townhouse in a historic district.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 210000,
    location: "Lisbon",
    country: "Portugal"
  },
  {
    title: "Ski Chalet",
    description: "Ideal winter escape with access to ski slopes.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 370000,
    location: "Aspen",
    country: "USA"
  },
  {
    title: "Desert Oasis Villa",
    description: "A luxurious retreat amidst the dunes.",
    image: { filename: "file1", url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 980000,
    location: "Riyadh",
    country: "Saudi Arabia"
  }
];

module.exports = { data: sample_list };
