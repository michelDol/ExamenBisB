export interface Product {
  id: string;
  name: string;
  stock: number;
  stockMinimo: number;
}

const db: { products: Product[] } = {
  products: []
};

export function resetDatabase() {
  db.products = [];
}

export function addProduct(product: Omit<Product, 'id'>): Product {

}

export function sellProduct(id: string): Product | null {

}

export function getLowStockProducts(): Product[] {
}

export { db };
