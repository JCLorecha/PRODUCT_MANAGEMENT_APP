interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            selectedCategory === category
              ? 'bg-indigo-600 text-white'
              : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter