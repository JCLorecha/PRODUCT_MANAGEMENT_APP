import type { Product } from '../types/Product'

interface TotalSummaryProps {
  products: Product[]
}

function TotalSummary({ products }: TotalSummaryProps) {
  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  )

  return (
    <section className="rounded-xl bg-indigo-600 p-6 text-white shadow-sm">
      <p className="text-sm font-medium text-indigo-100">
        Overall Inventory Value
      </p>

      <p className="mt-2 text-3xl font-bold">
        ₱{total.toLocaleString('en-PH')}
      </p>

      <p className="mt-2 text-sm text-indigo-100">
        Total value of all products in inventory
      </p>
    </section>
  )
}

export default TotalSummary