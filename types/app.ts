export interface IAppState {
    page: string;
    searchInput: string | null;
    products: Product[] | null;
    carts: ICart[] | null;
}

export interface ICarouselItemProps {
    message: string;
    imageUrl: string;
    color: string;
    lastObject?: boolean;
}

export interface IProductCardProps {
    title: string;
    image: string;
    price: number;
}

export interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    description?: string;
    rating?: {
        rate: number;
        count: number;
    };
}

export interface ICart {
    product: Product;
    quantity: number;
}
