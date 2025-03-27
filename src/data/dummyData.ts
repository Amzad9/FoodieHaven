
// Dummy menu items
export const menuItems = [
  {
    id: 1,
    name: "Grilled Salmon with Lemon Butter",
    description: "Fresh Atlantic salmon fillet grilled to perfection and topped with a zesty lemon butter sauce. Served with roasted vegetables and wild rice.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "Seafood",
    featured: true,
    rating: 4.8,
    ingredients: ["Atlantic salmon", "Lemon butter sauce", "Seasonal vegetables", "Wild rice"],
    prepTime: "25 minutes",
    chefSpecial: true
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Classic Italian pizza topped with San Marzano tomato sauce, fresh mozzarella, basil leaves, and extra virgin olive oil on a hand-tossed crust.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80",
    category: "Italian",
    featured: true,
    rating: 4.7,
    ingredients: ["San Marzano tomatoes", "Fresh mozzarella", "Basil", "Olive oil", "Homemade dough"],
    prepTime: "20 minutes"
  },
  {
    id: 3,
    name: "Beef Burger Deluxe",
    description: "Premium Angus beef patty topped with aged cheddar, caramelized onions, crispy bacon, lettuce, tomato, and special sauce on a brioche bun.",
    price: 16.99,
    oldPrice: 19.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1699&q=80",
    category: "Burgers",
    featured: true,
    rating: 4.9,
    ingredients: ["Angus beef", "Cheddar cheese", "Bacon", "Lettuce", "Tomato", "Special sauce", "Brioche bun"],
    prepTime: "15 minutes"
  },
  {
    id: 4,
    name: "Thai Green Curry",
    description: "Authentic Thai green curry with your choice of chicken or tofu, bamboo shoots, bell peppers, and Thai basil in a coconut milk broth. Served with jasmine rice.",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    category: "Asian",
    featured: false,
    rating: 4.6,
    ingredients: ["Chicken/Tofu", "Coconut milk", "Green curry paste", "Thai basil", "Jasmine rice"],
    prepTime: "30 minutes"
  },
  {
    id: 5,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, garlic croutons, parmesan cheese, and grilled chicken breast tossed in our homemade Caesar dressing.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80",
    category: "Salads",
    featured: false,
    rating: 4.5,
    ingredients: ["Romaine lettuce", "Grilled chicken", "Parmesan cheese", "Croutons", "Caesar dressing"],
    prepTime: "15 minutes"
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a warm, gooey center. Served with vanilla ice cream and a drizzle of raspberry sauce.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=627&q=80",
    category: "Desserts",
    featured: true,
    rating: 4.9,
    ingredients: ["Dark chocolate", "Flour", "Eggs", "Butter", "Vanilla ice cream", "Raspberry sauce"],
    prepTime: "20 minutes",
    chefSpecial: true
  },
  {
    id: 7,
    name: "Vegetable Stir Fry",
    description: "Fresh seasonal vegetables stir-fried in a savory soy-ginger sauce. Served with steamed rice or noodles.",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    category: "Vegetarian",
    featured: false,
    rating: 4.3,
    ingredients: ["Seasonal vegetables", "Soy sauce", "Ginger", "Garlic", "Rice/Noodles"],
    prepTime: "20 minutes"
  },
  {
    id: 8,
    name: "Spaghetti Carbonara",
    description: "Al dente spaghetti tossed with a creamy sauce made from eggs, pecorino romano, pancetta, and freshly cracked black pepper.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1608756687911-aa1599ab5780?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
    category: "Italian",
    featured: false,
    rating: 4.7,
    ingredients: ["Spaghetti", "Eggs", "Pecorino romano", "Pancetta", "Black pepper"],
    prepTime: "20 minutes"
  },
  {
    id: 9,
    name: "Chicken Tikka Masala",
    description: "Tender pieces of chicken marinated in yogurt and spices, then grilled and simmered in a rich, creamy tomato sauce. Served with naan and basmati rice.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=1071&q=80",
    category: "Indian",
    featured: true,
    rating: 4.8,
    ingredients: ["Chicken", "Yogurt", "Indian spices", "Tomato sauce", "Basmati rice", "Naan"],
    prepTime: "35 minutes",
    chefSpecial: true
  },
  {
    id: 10,
    name: "Greek Salad",
    description: "Fresh cucumber, tomatoes, red onion, olives, and feta cheese tossed in a lemon and olive oil dressing. Served with warm pita bread.",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    category: "Salads",
    featured: false,
    rating: 4.4,
    ingredients: ["Cucumber", "Tomatoes", "Red onion", "Olives", "Feta cheese", "Lemon dressing"],
    prepTime: "10 minutes"
  },
  {
    id: 11,
    name: "BBQ Ribs",
    description: "Slow-cooked pork ribs smothered in our house-made BBQ sauce. Served with coleslaw and cornbread.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
    category: "American",
    featured: false,
    rating: 4.6,
    ingredients: ["Pork ribs", "House-made BBQ sauce", "Coleslaw", "Cornbread"],
    prepTime: "40 minutes"
  },
  {
    id: 12,
    name: "Fruit Tart",
    description: "Buttery shortbread crust filled with vanilla custard and topped with an assortment of fresh seasonal fruits and a light glaze.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    category: "Desserts",
    featured: false,
    rating: 4.7,
    ingredients: ["Shortbread crust", "Vanilla custard", "Seasonal fruits", "Apricot glaze"],
    prepTime: "25 minutes"
  }
];

// Dummy order data
export const orders = [
  {
    id: 1,
    orderNumber: 10001,
    customer: {
      name: "John Smith",
      email: "john.smith@example.com",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    date: "2023-06-15",
    time: "18:30",
    items: [
      { id: 3, name: "Beef Burger Deluxe", quantity: 2, price: 16.99 },
      { id: 5, name: "Caesar Salad", quantity: 1, price: 14.99 }
    ],
    total: 48.97,
    status: "delivered"
  },
  {
    id: 2,
    orderNumber: 10002,
    customer: {
      name: "Emily Johnson",
      email: "emily.j@example.com",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    date: "2023-06-15",
    time: "19:15",
    items: [
      { id: 1, name: "Grilled Salmon with Lemon Butter", quantity: 1, price: 24.99 },
      { id: 6, name: "Chocolate Lava Cake", quantity: 1, price: 9.99 }
    ],
    total: 34.98,
    status: "processing"
  },
  {
    id: 3,
    orderNumber: 10003,
    customer: {
      name: "Michael Wong",
      email: "m.wong@example.com",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    date: "2023-06-15",
    time: "20:00",
    items: [
      { id: 9, name: "Chicken Tikka Masala", quantity: 1, price: 19.99 },
      { id: 8, name: "Spaghetti Carbonara", quantity: 1, price: 16.99 }
    ],
    total: 36.98,
    status: "pending"
  },
  {
    id: 4,
    orderNumber: 10004,
    customer: {
      name: "Sarah Davis",
      email: "s.davis@example.com",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    date: "2023-06-14",
    time: "18:45",
    items: [
      { id: 2, name: "Margherita Pizza", quantity: 1, price: 18.99 },
      { id: 12, name: "Fruit Tart", quantity: 2, price: 8.99 }
    ],
    total: 36.97,
    status: "delivered"
  },
  {
    id: 5,
    orderNumber: 10005,
    customer: {
      name: "Robert Chen",
      email: "r.chen@example.com",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    date: "2023-06-14",
    time: "19:30",
    items: [
      { id: 4, name: "Thai Green Curry", quantity: 1, price: 17.99 },
      { id: 7, name: "Vegetable Stir Fry", quantity: 1, price: 13.99 }
    ],
    total: 31.98,
    status: "cancelled"
  },
  {
    id: 6,
    orderNumber: 10006,
    customer: {
      name: "Jennifer Lee",
      email: "j.lee@example.com",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    date: "2023-06-14",
    time: "20:15",
    items: [
      { id: 11, name: "BBQ Ribs", quantity: 1, price: 22.99 },
      { id: 10, name: "Greek Salad", quantity: 1, price: 13.99 }
    ],
    total: 36.98,
    status: "delivered"
  },
  {
    id: 7,
    orderNumber: 10007,
    customer: {
      name: "David Parker",
      email: "d.parker@example.com",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    date: "2023-06-13",
    time: "18:00",
    items: [
      { id: 3, name: "Beef Burger Deluxe", quantity: 1, price: 16.99 },
      { id: 6, name: "Chocolate Lava Cake", quantity: 1, price: 9.99 }
    ],
    total: 26.98,
    status: "delivered"
  },
  {
    id: 8,
    orderNumber: 10008,
    customer: {
      name: "Amanda Scott",
      email: "a.scott@example.com",
      avatar: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    date: "2023-06-13",
    time: "19:45",
    items: [
      { id: 1, name: "Grilled Salmon with Lemon Butter", quantity: 2, price: 24.99 }
    ],
    total: 49.98,
    status: "processing"
  }
];

// Dummy customer data
export const customers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    type: "regular",
    orders: 15,
    totalSpent: 486.75,
    lastOrder: "2023-06-15"
  },
  {
    id: 2,
    name: "Emily Johnson",
    email: "emily.j@example.com",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    type: "vip",
    orders: 32,
    totalSpent: 1240.50,
    lastOrder: "2023-06-15"
  },
  {
    id: 3,
    name: "Michael Wong",
    email: "m.wong@example.com",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    type: "new",
    orders: 2,
    totalSpent: 68.97,
    lastOrder: "2023-06-15"
  },
  {
    id: 4,
    name: "Sarah Davis",
    email: "s.davis@example.com",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    type: "regular",
    orders: 8,
    totalSpent: 296.32,
    lastOrder: "2023-06-14"
  },
  {
    id: 5,
    name: "Robert Chen",
    email: "r.chen@example.com",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    type: "regular",
    orders: 10,
    totalSpent: 342.85,
    lastOrder: "2023-06-14"
  },
  {
    id: 6,
    name: "Jennifer Lee",
    email: "j.lee@example.com",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    type: "vip",
    orders: 27,
    totalSpent: 975.20,
    lastOrder: "2023-06-14"
  },
  {
    id: 7,
    name: "David Parker",
    email: "d.parker@example.com",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    type: "regular",
    orders: 12,
    totalSpent: 412.65,
    lastOrder: "2023-06-13"
  },
  {
    id: 8,
    name: "Amanda Scott",
    email: "a.scott@example.com",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    type: "new",
    orders: 3,
    totalSpent: 124.75,
    lastOrder: "2023-06-13"
  },
  {
    id: 9,
    name: "James Wilson",
    email: "j.wilson@example.com",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    type: "vip",
    orders: 42,
    totalSpent: 1856.30,
    lastOrder: "2023-06-12"
  }
];
