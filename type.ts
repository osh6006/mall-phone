export interface Billboard {
  id: string;
  label: string;
  imageURL: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  serise: Serise;
  color: Color;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Serise {
  id: string;
  name: string;
  modelNum: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
