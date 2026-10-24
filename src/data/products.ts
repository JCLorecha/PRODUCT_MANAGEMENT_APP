import type { Product } from '../types/Product'

export const initialProducts: Product[] = [
  {
    id: 1,
    name: 'iPhone 16',
    category: 'iPhone',
    description:
      'A modern smartphone for photography, communication, and everyday entertainment.',
    specification: '128GB Storage, 6.1-inch Display, Face ID',
    rating: 4.8,
    price: 45990,
    quantity: 8,
    image:
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S25',
    category: 'Samsung Galaxy S25',
    description:
      'A premium Samsung smartphone with a refined exterior, advanced cameras, and a vibrant display.',
    specification: '256GB Storage, 6.2-inch Display, 12GB RAM',
    rating: 4.8,
    price: 54090,
    quantity: 12,
    image:
      'https://images.unsplash.com/photo-1738830251513-a7bfef4b53c6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  },
  {
    id: 3,
    name: 'Lenovo Thinkpad Laptop',
    category: 'Laptop',
    description:
      'A portable computer suitable for schoolwork, productivity, and multitasking.',
    specification: 'Intel Core i5, 16GB RAM, 512GB SSD',
    rating: 4.7,
    price: 42990,
    quantity: 4,
    image:
      'https://images.unsplash.com/photo-1626890871138-a286af648586?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  },
  {
    id: 4,
    name: 'Desktop PC',
    category: 'PC',
    description:
      'A desktop computer for productivity, gaming, and demanding applications.',
    specification: 'Ryzen 5, 16GB RAM, 1TB SSD',
    rating: 4.5,
    price: 38990,
    quantity: 6,
    image:
      'https://images.unsplash.com/photo-1736457833722-35cf6dd38deb?auto=format&fit=crop&fm=jpg&q=80&w=600',
  },
  {
    id: 5,
    name: 'Smartwatch Pro',
    category: 'Smartwatch',
    description:
      'A wearable device for notifications, activity tracking, and everyday convenience.',
    specification: 'AMOLED Screen, Heart-rate Tracking, Water Resistant',
    rating: 4.4,
    price: 7990,
    quantity: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80&auto=format&fit=crop',
  },
]

export const categories = [
  'All Categories',
  'iPhone',
  'Samsung Galaxy S25',
  'Laptop',
  'PC',
  'Smartwatch',
]