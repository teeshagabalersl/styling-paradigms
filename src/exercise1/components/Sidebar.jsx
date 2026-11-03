function Sidebar() {
  return (
    <aside className="w-full bg-card p-5 shadow-sm md:min-h-screen md:w-60">
      <h2 className="mb-4 text-lg font-semibold text-heading">
        Navigation
      </h2>

      <nav className="flex gap-3 md:flex-col">
        <a
          href="#dashboard"
          className="rounded-lg bg-primary px-4 py-2 text-white"
        >
          Dashboard
        </a>

        <a
          href="#products"
          className="rounded-lg px-4 py-2 text-muted transition hover:bg-accent hover:text-heading"
        >
          Products
        </a>

        <a
          href="#orders"
          className="rounded-lg px-4 py-2 text-muted transition hover:bg-accent hover:text-heading"
        >
          Orders
        </a>

        <a
          href="#settings"
          className="rounded-lg px-4 py-2 text-muted transition hover:bg-accent hover:text-heading"
        >
          Settings
        </a>
      </nav>
    </aside>
  )
}

export default Sidebar