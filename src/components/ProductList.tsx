import type { Product } from '../types/Product'
import ProductCard from './ProductCard'

interface ProductListProps {
  products: Product[]
  onViewDetails: (product: Product) => void
  onAddToCart: (product: Product) => void
  onIncrease: (id: number) => void
  onDecrease: (id: number) => void
}

function ProductList({
  products,
  onViewDetails,
  onAddToCart,
  onIncrease,
  onDecrease,
}: ProductListProps) {
  if (products.length === 0) {
    return (
      <p className="rounded-lg bg-white p-6 text-center text-gray-500">
        No products found in this category.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
          onAddToCart={onAddToCart}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </div>
  )
}

export default ProductList