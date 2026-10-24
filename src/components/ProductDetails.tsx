import type { Product } from '../types/Product'

interface ProductDetailsProps {
  product: Product
  onBack: () => void
}

function ProductDetails({ product, onBack }: ProductDetailsProps) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        ← Back to Products
      </button>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="h-80 w-full rounded-xl object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-indigo-600">
            {product.category}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-800">
            {product.name}
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            {product.description}
          </p>

          <div className="mt-5 space-y-3">
            <p className="text-gray-700">
              <span className="font-semibold">Specifications:</span>{' '}
              {product.specification}
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">Rating:</span>{' '}
              {product.rating} / 5
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">Available Quantity:</span>{' '}
              {product.quantity}
            </p>
          </div>

          <p className="mt-6 text-2xl font-bold text-indigo-700">
            ₱{product.price.toLocaleString('en-PH')}
          </p>

          {product.quantity < 5 && (
            <p className="mt-2 font-medium text-red-600">
              Low Stock
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProductDetails