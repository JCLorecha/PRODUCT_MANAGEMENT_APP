import type { Product } from '../types/Product'

interface ProductCardProps {
  product: Product
  onViewDetails: (product: Product) => void
  onAddToCart: (product: Product) => void
  onIncrease: (id: number) => void
  onDecrease: (id: number) => void
}

function ProductCard({
  product,
  onViewDetails,
  onAddToCart,
  onIncrease,
  onDecrease,
}: ProductCardProps) {
  const subtotal = product.price * product.quantity

  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>

          {product.quantity < 5 && (
            <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
              Low Stock
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-gray-500">
          Category: {product.category}
        </p>

        <p className="mt-3 font-medium text-gray-700">
          Price: ₱{product.price.toLocaleString('en-PH')}
        </p>

        <p className="mt-1 text-sm text-gray-600">
          Available stock: {product.quantity}
        </p>

        <div className="mt-3 border-t border-gray-200 pt-3">
          <p className="font-bold text-indigo-700">
            Subtotal: ₱{subtotal.toLocaleString('en-PH')}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Adjust stock
          </span>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onDecrease(product.id)}
              disabled={product.quantity <= 0}
              className="rounded-lg border border-gray-300 px-3 py-1 font-bold disabled:cursor-not-allowed disabled:opacity-40"
            >
              −
            </button>

            <span className="min-w-6 text-center">
              {product.quantity}
            </span>

            <button
              type="button"
              onClick={() => onIncrease(product.id)}
              className="rounded-lg border border-gray-300 px-3 py-1 font-bold"
            >
              +
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onAddToCart(product)}
          disabled={product.quantity <= 0}
          className="mt-4 w-full rounded-lg bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add to Cart
        </button>

        <button
          type="button"
          onClick={() => onViewDetails(product)}
          className="mt-2 w-full rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
        >
          View Details
        </button>
      </div>
    </article>
  )
}

export default ProductCard