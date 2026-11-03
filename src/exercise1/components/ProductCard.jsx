function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-card border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />

      {/* Product Details */}
      <div className="p-5">

        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-muted">
            {product.category}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              product.status === "Available"
                ? "bg-success-bg text-success"
                : "bg-danger-bg text-danger"
            }`}
          >
            {product.status}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-heading">
          {product.name}
        </h3>

        <p className="mt-2 text-xl font-bold text-primary">
          ${product.price}
        </p>

        <button
          disabled={product.status !== "Available"}
          className="mt-4 w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-dark focus:outline-2 focus:outline-offset-2 focus:outline-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          {product.status === "Available" ? "Edit Product" : "Unavailable"}
        </button>

      </div>
    </div>
  )
}

export default ProductCard