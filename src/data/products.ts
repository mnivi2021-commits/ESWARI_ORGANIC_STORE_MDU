import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    name: 'All Categories',
    shortName: 'All',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    productCount: 45
  },
  {
    id: 'jaggery',
    name: 'Jaggery Varieties',
    shortName: 'Jaggery',
    iconName: 'Cookie',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  },
  {
    id: 'honey',
    name: 'Honey & Honey Value Added Products',
    shortName: 'Honey',
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  },
  {
    id: 'millet-products',
    name: 'Millets Value Added Products',
    shortName: 'Millet Products',
    iconName: 'Utensils',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  },
  {
    id: 'flours',
    name: 'Flours',
    shortName: 'Flours',
    iconName: 'Wheat',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  },
  {
    id: 'millets',
    name: 'Millets',
    shortName: 'Millets',
    iconName: 'Sprout',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  },
  {
    id: 'dry-fruits',
    name: 'Dry Fruits and Nuts',
    shortName: 'Dry Fruits & Nuts',
    iconName: 'Nut',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  },
  {
    id: 'pulses',
    name: 'Pulses',
    shortName: 'Pulses',
    iconName: 'CircleDot',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  },
  {
    id: 'powders',
    name: 'Powder Varieties',
    shortName: 'Powders',
    iconName: 'FlaskConical',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  },
  {
    id: 'aval',
    name: 'Aval Varieties',
    shortName: 'Aval',
    iconName: 'Feather',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  },
  {
    id: 'oils',
    name: 'Oil Items',
    shortName: 'Oils',
    iconName: 'Container',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  },
  {
    id: 'rice',
    name: 'Rice',
    shortName: 'Rice',
    iconName: 'Wheat',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  },
  {
    id: 'soaps',
    name: 'Soap Varieties',
    shortName: 'Soaps',
    iconName: 'Bath',
    image: 'https://images.unsplash.com/photo-1607006314177-3e1104616239?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  },
  {
    id: 'vadakam',
    name: 'Vadakam',
    shortName: 'Vadakam',
    iconName: 'Sun',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  },
  {
    id: 'sanitary-pad',
    name: 'Sanitary Pad',
    shortName: 'Sanitary Pad',
    iconName: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  },
  {
    id: 'snacks',
    name: 'Snacks Varieties',
    shortName: 'Snacks',
    iconName: 'Coffee',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80',
    productCount: 3
  }
];

export const PRODUCTS: Product[] = [
  // 1. JAGGERY VARIETIES
  {
    id: 'jaggery-1',
    name: 'Plam Jaggery',
    category: 'Jaggery Varieties',
    categoryId: 'jaggery',
    quantity: '1/2kg',
    dealerPrice: null,
    mrp: null,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80',
    description: 'Traditional palm jaggery rich in natural minerals and authentic sweetness.'
  },
  {
    id: 'jaggery-2',
    name: 'Plam Jaggery with Pepper',
    category: 'Jaggery Varieties',
    categoryId: 'jaggery',
    quantity: '100grm',
    dealerPrice: null,
    mrp: null,
    inStock: false,
    statusText: 'Out of Stock',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80',
    description: 'Speciality palm jaggery infused with warming black pepper.'
  },
  {
    id: 'jaggery-3',
    name: 'Plam cubes',
    category: 'Jaggery Varieties',
    categoryId: 'jaggery',
    quantity: '100grm',
    dealerPrice: 60,
    mrp: 65,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80',
    description: 'Convenient palm jaggery cubes ready for everyday tea, coffee, and sweets.'
  },

  // 2. HONEY & HONEY VALUE ADDED PRODUCTS
  {
    id: 'honey-1',
    name: 'Honey',
    category: 'Honey & Honey Value Added Products',
    categoryId: 'honey',
    quantity: '100grm',
    dealerPrice: 60,
    mrp: 70,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    description: 'Pure natural honey packed with nutrients and gentle floral sweetness.'
  },
  {
    id: 'honey-2',
    name: 'Honey',
    category: 'Honey & Honey Value Added Products',
    categoryId: 'honey',
    quantity: '250grm',
    dealerPrice: 150,
    mrp: 170,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    description: 'Natural honey in a handy 250g pack for daily family wellness.'
  },
  {
    id: 'honey-3',
    name: 'Honey',
    category: 'Honey & Honey Value Added Products',
    categoryId: 'honey',
    quantity: '500grm',
    dealerPrice: 275,
    mrp: 310,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    description: 'Value pack pure raw honey suitable for home cooking and daily warm drinks.'
  },

  // 3. MILLETS VALUE ADDED PRODUCTS
  {
    id: 'millet-prod-1',
    name: 'Millets Chapathi Mix',
    category: 'Millets Value Added Products',
    categoryId: 'millet-products',
    quantity: '1kg',
    dealerPrice: 95,
    mrp: 120,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    description: 'Nutritious multigrain millet flour blend specially crafted for soft rotis.'
  },
  {
    id: 'millet-prod-2',
    name: 'Millets Health Mix',
    category: 'Millets Value Added Products',
    categoryId: 'millet-products',
    quantity: '1/2kg',
    dealerPrice: 130,
    mrp: 200,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1574316071802-0d684efa7cd5?auto=format&fit=crop&w=600&q=80',
    description: 'Traditional wholesome porridge mix made from wholesome millets and grains.'
  },
  {
    id: 'millet-prod-3',
    name: 'Dia Health Mix',
    category: 'Millets Value Added Products',
    categoryId: 'millet-products',
    quantity: '1/2kg',
    dealerPrice: 145,
    mrp: 175,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1574316071802-0d684efa7cd5?auto=format&fit=crop&w=600&q=80',
    description: 'Specially formulated balanced grain and millet blend for daily nutritional support.'
  },

  // 4. FLOURS
  {
    id: 'flour-1',
    name: 'Finger Millet Powder',
    category: 'Flours',
    categoryId: 'flours',
    quantity: '1kg',
    dealerPrice: 55,
    mrp: 70,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    description: 'Stone ground finger millet (Ragi) powder ideal for dosas, mudde, and porridge.'
  },
  {
    id: 'flour-2',
    name: 'Spotted Finger Millet Flour',
    category: 'Flours',
    categoryId: 'flours',
    quantity: '1/2kg',
    dealerPrice: 45,
    mrp: 55,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    description: 'Traditional processed ragi flour offering authentic flavour and texture.'
  },
  {
    id: 'flour-3',
    name: 'Wheat Flour',
    category: 'Flours',
    categoryId: 'flours',
    quantity: '1kg',
    dealerPrice: 54,
    mrp: 60,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    description: 'Wholesome natural wheat flour ground to perfection for daily meals.'
  },

  // 5. MILLETS
  {
    id: 'millet-1',
    name: 'Pearl Millet',
    category: 'Millets',
    categoryId: 'millets',
    quantity: '1/2kg',
    dealerPrice: 22,
    mrp: 25,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    description: 'Whole Pearl Millet (Kambu / Bajra) grains sourced for everyday cooking.'
  },
  {
    id: 'millet-2',
    name: 'Pearl Millets Broken',
    category: 'Millets',
    categoryId: 'millets',
    quantity: '1/2kg',
    dealerPrice: 27,
    mrp: 30,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    description: 'Coarsely broken pearl millet grains for quick cooking koozh and porridge.'
  },
  {
    id: 'millet-3',
    name: 'Pearl Millets (Naatu Variety)',
    category: 'Millets',
    categoryId: 'millets',
    quantity: '1/2kg',
    dealerPrice: 28,
    mrp: 32,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    description: 'Indigenous native variety pearl millet with traditional earthy aroma.'
  },

  // 6. DRY FRUITS AND NUTS
  {
    id: 'dry-fruits-1',
    name: 'Almonds',
    category: 'Dry Fruits and Nuts',
    categoryId: 'dry-fruits',
    quantity: '100grm',
    dealerPrice: 90,
    mrp: 110,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=600&q=80',
    description: 'Crisp, premium quality almonds ideal for morning snacking and dessert topping.'
  },
  {
    id: 'dry-fruits-2',
    name: 'Cashew',
    category: 'Dry Fruits and Nuts',
    categoryId: 'dry-fruits',
    quantity: '100grm',
    dealerPrice: 100,
    mrp: 120,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1536591375315-1b838421d072?auto=format&fit=crop&w=600&q=80',
    description: 'Whole rich cashews carefully graded for fresh taste and culinary use.'
  },
  {
    id: 'dry-fruits-3',
    name: 'Grapes',
    category: 'Dry Fruits and Nuts',
    categoryId: 'dry-fruits',
    quantity: '100grm',
    dealerPrice: 34,
    mrp: 40,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80',
    description: 'Naturally dried sweet raisins for sweets, payasam, and daily snacks.'
  },

  // 7. PULSES
  {
    id: 'pulse-1',
    name: 'Toor Dall (Red Gram)',
    category: 'Pulses',
    categoryId: 'pulses',
    quantity: '1kg',
    dealerPrice: 120,
    mrp: 140,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=600&q=80',
    description: 'Essential staple red gram dal, cooks tender for delicious sambar and rasam.'
  },
  {
    id: 'pulse-2',
    name: 'Toor Dall (Red Gram)',
    category: 'Pulses',
    categoryId: 'pulses',
    quantity: '1kg',
    dealerPrice: 125,
    mrp: 150,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=600&q=80',
    description: 'Select grade toor dal processed cleanly for enhanced flavour and consistency.'
  },
  {
    id: 'pulse-3',
    name: 'Green Gram (Traditional Variety)',
    category: 'Pulses',
    categoryId: 'pulses',
    quantity: '1kg',
    dealerPrice: 120,
    mrp: 140,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    description: 'Native traditional whole green gram ideal for sundal, sprouts, and curries.'
  },

  // 8. POWDER VARIETIES
  {
    id: 'powder-1',
    name: 'Turmeric',
    category: 'Powder Varieties',
    categoryId: 'powders',
    quantity: '100grm',
    dealerPrice: 22,
    mrp: 30,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    description: 'Bright aromatic turmeric powder milled from sun-dried natural roots.'
  },
  {
    id: 'powder-2',
    name: 'Chilly Powder',
    category: 'Powder Varieties',
    categoryId: 'powders',
    quantity: '100grm',
    dealerPrice: 31,
    mrp: 40,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
    description: 'Pure spicy ground red chilli powder delivering natural colour and heat.'
  },
  {
    id: 'powder-3',
    name: 'Kollu Powder',
    category: 'Powder Varieties',
    categoryId: 'powders',
    quantity: '100grm',
    dealerPrice: 28,
    mrp: 35,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1596040033283-9118749a04a6?auto=format&fit=crop&w=600&q=80',
    description: 'Nutritious horse gram (Kollu) powder, ideal for hot rasam, soup, and thuvaiyal.'
  },

  // 9. AVAL VARIETIES
  {
    id: 'aval-1',
    name: 'Sigapukavuni Aval',
    category: 'Aval Varieties',
    categoryId: 'aval',
    quantity: '1/4kg',
    dealerPrice: 35,
    mrp: 40,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    description: 'Nutrient-rich flattened flakes made from heritage Sigapu Kavuni rice.'
  },
  {
    id: 'aval-2',
    name: 'Maize Aval',
    category: 'Aval Varieties',
    categoryId: 'aval',
    quantity: '1/4kg',
    dealerPrice: 35,
    mrp: 40,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80',
    description: 'Light and crunchy corn / maize poha flakes for fast breakfast and snacks.'
  },
  {
    id: 'aval-3',
    name: 'Mappilai Samba Aval',
    category: 'Aval Varieties',
    categoryId: 'aval',
    quantity: '1/4kg',
    dealerPrice: 35,
    mrp: 40,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    description: 'Traditional flattened rice made from energizing Mappilai Samba paddy.'
  },

  // 10. OIL ITEMS
  {
    id: 'oil-1',
    name: 'Coconut Oil',
    category: 'Oil Items',
    categoryId: 'oils',
    quantity: '1lit',
    dealerPrice: 250,
    mrp: 280,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    description: 'Pure extracted coconut oil suitable for traditional cooking and hair care.'
  },
  {
    id: 'oil-2',
    name: 'Coconut Oil',
    category: 'Oil Items',
    categoryId: 'oils',
    quantity: '1/2lit',
    dealerPrice: 130,
    mrp: 150,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    description: 'Pure coconut oil in half-litre bottle, clean and unadulterated.'
  },
  {
    id: 'oil-3',
    name: 'Coconut Oil',
    category: 'Oil Items',
    categoryId: 'oils',
    quantity: '200ml',
    dealerPrice: 60,
    mrp: 70,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    description: 'Handy pocket-sized 200ml pure coconut oil bottle for daily home use.'
  },

  // 11. RICE
  {
    id: 'rice-1',
    name: 'Karnataka Sona (Raja Pogam)',
    category: 'Rice',
    categoryId: 'rice',
    quantity: '1kg',
    dealerPrice: 56,
    mrp: 60,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    description: 'Fine grain aromatic Raja Pogam Sona Masoori rice for light, fluffy meals.'
  },
  {
    id: 'rice-2',
    name: 'Karnataka Sona (Raja Pogam)',
    category: 'Rice',
    categoryId: 'rice',
    quantity: '5Kg',
    dealerPrice: 280,
    mrp: 300,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    description: '5kg pack Karnataka Sona Raja Pogam rice, perfect for home cooking.'
  },
  {
    id: 'rice-3',
    name: 'Karnataka Sona (Raja Pogam)',
    category: 'Rice',
    categoryId: 'rice',
    quantity: '25kg',
    dealerPrice: 1350,
    mrp: 1500,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    description: 'Full 25kg bulk bag of premium Raja Pogam Sona rice for family pantry needs.'
  },

  // 12. SOAP VARIETIES
  {
    id: 'soap-1',
    name: 'Vetiver Soap',
    category: 'Soap Varieties',
    categoryId: 'soaps',
    quantity: '100grm',
    dealerPrice: 55,
    mrp: 65,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1607006314177-3e1104616239?auto=format&fit=crop&w=600&q=80',
    description: 'Refreshing bath bar enriched with natural soothing vetiver root extract.'
  },
  {
    id: 'soap-2',
    name: 'Coconut Oil Soap',
    category: 'Soap Varieties',
    categoryId: 'soaps',
    quantity: '100grm',
    dealerPrice: 55,
    mrp: 65,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=600&q=80',
    description: 'Gentle handmade bath bar created with pure nourishing coconut oil.'
  },
  {
    id: 'soap-3',
    name: 'Alovera Soap',
    category: 'Soap Varieties',
    categoryId: 'soaps',
    quantity: '100grm',
    dealerPrice: 55,
    mrp: 65,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    description: 'Hydrating natural skin care soap infused with fresh aloe vera gel.'
  },

  // 13. VADAKAM
  {
    id: 'vadakam-1',
    name: 'Rice Vadakam',
    category: 'Vadakam',
    categoryId: 'vadakam',
    quantity: '100grm',
    dealerPrice: 25,
    mrp: 30,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    description: 'Crispy sun-dried rice vadakam, a classic crunchy side dish for South Indian lunch.'
  },
  {
    id: 'vadakam-2',
    name: 'Tomato Vadakam',
    category: 'Vadakam',
    categoryId: 'vadakam',
    quantity: '100grm',
    dealerPrice: 25,
    mrp: 30,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    description: 'Tangy sun-dried tomato crisps that fry to crisp perfection.'
  },
  {
    id: 'vadakam-3',
    name: 'Pothina Vadakam',
    category: 'Vadakam',
    categoryId: 'vadakam',
    quantity: '100grm',
    dealerPrice: 25,
    mrp: 30,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    description: 'Herbal mint flavored crispy vadakam bringing authentic homemade flavour.'
  },

  // 14. SANITARY PAD
  {
    id: 'sanitary-1',
    name: 'XI L',
    category: 'Sanitary Pad',
    categoryId: 'sanitary-pad',
    quantity: '1 Pack',
    dealerPrice: 40,
    mrp: 45,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    description: 'Comfortable XL sanitary pads designed for soft, safe everyday protection.'
  },
  {
    id: 'sanitary-2',
    name: 'XI O Cotton',
    category: 'Sanitary Pad',
    categoryId: 'sanitary-pad',
    quantity: '1 Pack',
    dealerPrice: 42,
    mrp: 45,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    description: 'Soft organic cotton feel sanitary pads for irritation-free comfort.'
  },
  {
    id: 'sanitary-3',
    name: 'XXL Chemical Free',
    category: 'Sanitary Pad',
    categoryId: 'sanitary-pad',
    quantity: '1 Pack',
    dealerPrice: 45,
    mrp: 55,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    description: 'XXL chemical-free hygiene pads crafted with gentle natural materials.'
  },

  // 15. SNACKS VARIETIES
  {
    id: 'snacks-1',
    name: 'Athirasam',
    category: 'Snacks Varieties',
    categoryId: 'snacks',
    quantity: '1kg',
    dealerPrice: 300,
    mrp: 400,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80',
    description: 'Traditional jaggery and rice flour South Indian delicacy made in authentic style.'
  },
  {
    id: 'snacks-2',
    name: 'Nenthiran Chips',
    category: 'Snacks Varieties',
    categoryId: 'snacks',
    quantity: '1kg',
    dealerPrice: 375,
    mrp: 450,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80',
    description: 'Crispy raw Kerala Nendran banana chips lightly salted and freshly prepared.'
  },
  {
    id: 'snacks-3',
    name: 'Kadalai Urundai',
    category: 'Snacks Varieties',
    categoryId: 'snacks',
    quantity: '1kg',
    dealerPrice: 300,
    mrp: 350,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80',
    description: 'Classic crunchy roasted peanut balls bound together with rich palm jaggery.'
  }
];
