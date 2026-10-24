import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import CategoryFilter from './components/CategoryFilter'
import TotalSummary from './components/TotalSummary'
import AddProductForm from './components/AddProductForm'
import ProductDetails from './components/ProductDetails'
import { initialProducts, categories } from './data/products'
import type { Product } from './types/Product'

interface CartItem {
  productId: number
  name: string
  price: number
  quantity: number
}

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [selectedCategory, setSelectedCategory] =
    useState('All Categories')
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])

  const filteredProducts =
    selectedCategory === 'All Categories'
      ? products
      : products.filter(
          (product) => product.category === selectedCategory,
        )

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  function increaseQuantity(id: number) {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    )
  }

  function decreaseQuantity(id: number) {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    )
  }

  function addToCart(product: Product) {
    const currentProduct = products.find(
      (item) => item.id === product.id,
    )

    if (!currentProduct || currentProduct.quantity <= 0) {
      return
    }

    setProducts((currentProducts) =>
      currentProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    )

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.productId === product.id,
      )

      if (existingItem) {
        return currentCart.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [
        ...currentCart,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ]
    })
  }

  function increaseCartQuantity(productId: number) {
    const product = products.find((item) => item.id === productId)

    if (!product || product.quantity <= 0) {
      return
    }

    setProducts((currentProducts) =>
      currentProducts.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    )

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  function decreaseCartQuantity(productId: number) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )

    setProducts((currentProducts) =>
      currentProducts.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  function addProduct(newProduct: Omit<Product, 'id'>) {
    const productWithId: Product = {
      ...newProduct,
      id:
        products.length > 0
          ? Math.max(...products.map((product) => product.id)) + 1
          : 1,
    }

    setProducts((currentProducts) => [
      ...currentProducts,
      productWithId,
    ])

    setSelectedCategory('All Categories')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="mx-auto max-w-7xl space-y-8 p-6">
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            Shopping Cart
          </h2>

          {cart.length === 0 ? (
            <p className="mt-3 text-gray-500">
              Your cart is empty. Add a product to get started.
            </p>
          ) : (
            <div className="mt-4 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.productId}
                  className="flex flex-col justify-between gap-3 border-b border-gray-200 pb-4 sm:flex-row sm:items-center"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      ₱{item.price.toLocaleString('en-PH')} each
                    </p>

                    <p className="mt-1 font-medium text-indigo-700">
                      Subtotal: ₱
                      {(item.price * item.quantity).toLocaleString('en-PH')}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => decreaseCartQuantity(item.productId)}
                      className="rounded-lg border border-gray-300 px-3 py-1 font-bold"
                    >
                      −
                    </button>

                    <span className="min-w-6 text-center">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => increaseCartQuantity(item.productId)}
                      disabled={
                        (products.find(
                          (product) => product.id === item.productId,
                        )?.quantity ?? 0) <= 0
                      }
                      className="rounded-lg border border-gray-300 px-3 py-1 font-bold disabled:opacity-40"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between pt-2">
                <span className="text-lg font-bold text-gray-800">
                  Cart Total
                </span>

                <span className="text-xl font-bold text-indigo-700">
                  ₱{cartTotal.toLocaleString('en-PH')}
                </span>
              </div>
            </div>
          )}
        </section>

        {selectedProduct ? (
          <ProductDetails
            product={
              products.find((item) => item.id === selectedProduct.id) ??
              selectedProduct
            }
            onBack={() => setSelectedProduct(null)}
          />
        ) : (
          <>
            <TotalSummary products={products} />

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Product Catalog
              </h2>

              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />

              <div className="mt-6">
                <ProductList
                  products={filteredProducts}
                  onViewDetails={setSelectedProduct}
                  onAddToCart={addToCart}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                />
              </div>
            </section>

            <AddProductForm onAddProduct={addProduct} />
          </>
        )}
      </main>
    </div>
  )
}

export default App