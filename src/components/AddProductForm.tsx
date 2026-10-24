import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Product } from '../types/Product'

interface AddProductFormProps {
  onAddProduct: (product: Omit<Product, 'id'>) => void
}

function AddProductForm({ onAddProduct }: AddProductFormProps) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [specification, setSpecification] = useState('')
  const [rating, setRating] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (
      !name.trim() ||
      !category ||
      !image.trim() ||
      !description.trim() ||
      !specification.trim() ||
      rating === '' ||
      price === '' ||
      quantity === ''
    ) {
      setError('Please fill in all fields.')
      return
    }

    const ratingValue = Number(rating)
    const priceValue = Number(price)
    const quantityValue = Number(quantity)

    if (
      !Number.isFinite(ratingValue) ||
      ratingValue < 0 ||
      ratingValue > 5
    ) {
      setError('Rating must be between 0 and 5.')
      return
    }

    if (
      !Number.isFinite(priceValue) ||
      priceValue <= 0
    ) {
      setError('Price must be greater than 0.')
      return
    }

    if (
      !Number.isInteger(quantityValue) ||
      quantityValue < 0
    ) {
      setError('Quantity must be a whole number of 0 or more.')
      return
    }

    try {
      new URL(image)
    } catch {
      setError('Please enter a valid image URL.')
      return
    }

    onAddProduct({
      name: name.trim(),
      category,
      image: image.trim(),
      description: description.trim(),
      specification: specification.trim(),
      rating: ratingValue,
      price: priceValue,
      quantity: quantityValue,
    })

    setName('')
    setCategory('')
    setImage('')
    setDescription('')
    setSpecification('')
    setRating('')
    setPrice('')
    setQuantity('')
    setError('')
  }

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">
        Add New Product
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Enter all product information below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. iPhone 16"
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Product Category
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
            required
          >
            <option value="">Select category</option>
            <option value="iPhone">iPhone</option>
            <option value="Android Phone">Android Phone</option>
            <option value="Laptop">Laptop</option>
            <option value="PC">PC</option>
            <option value="Smartwatch">Smartwatch</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Feature Image URL
          </label>
          <input
            type="url"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Rating (0–5)
          </label>
          <input
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            placeholder="e.g. 4.5"
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Price (₱)
          </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="e.g. 25000"
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            min="0"
            step="1"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            placeholder="e.g. 10"
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Describe the product..."
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Product Specification
          </label>
          <textarea
            rows={2}
            value={specification}
            onChange={(event) => setSpecification(event.target.value)}
            placeholder="e.g. 256GB Storage, AMOLED Display"
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
            required
          />
        </div>

        {error && (
          <p className="sm:col-span-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700 sm:col-span-2"
        >
          Add Product
        </button>
      </form>
    </section>
  )
}

export default AddProductForm