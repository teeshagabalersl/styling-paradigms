function Header() {
  return (
    <header className="flex items-center justify-between bg-card px-6 py-4 shadow-sm">
      <div>
        <h1 className="text-2xl font-bold text-heading">
          Product Dashboard
        </h1>

        <p className="mt-1 text-sm text-muted">
          Manage and monitor your products
        </p>
      </div>

      <button
        className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white
        transition hover:bg-primary-dark focus:outline-2 focus:outline-offset-2
        focus:outline-primary"
      >
        + Add Product
      </button>
    </header>
  )
}

export default Header