import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 89.99,
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 129.99,
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Fashion",
    price: 75.0,
    status: "Unavailable",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 4,
    name: "Backpack",
    category: "Accessories",
    price: 49.99,
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
  },
  {
    id: 5,
    name: "Sunglasses",
    category: "Fashion",
    price: 35.0,
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
  },
  {
    id: 6,
    name: "Camera",
    category: "Electronics",
    price: 299.99,
    status: "Unavailable",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products by name or category
  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-dashboard">
      {/* Dashboard Header */}
      <Header />

      <div className="flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Page Heading */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-heading">
              Our Products
            </h2>

            <p className="mt-1 text-sm text-muted">
              View and manage your products.
            </p>
          </div>

          {/* Product Count and Search Bar */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-heading">
              Total Products: {filteredProducts.length} / {products.length}
            </p>

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Search products by name or category"
              className="w-full rounded-lg border border-border bg-card px-4 py-2 text-sm text-heading outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-72"
            />
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-card border border-border bg-card p-10 text-center">
              <h3 className="text-lg font-semibold text-heading">
                No products found
              </h3>

              <p className="mt-2 text-sm text-muted">
                Try searching with a different product name or category.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;