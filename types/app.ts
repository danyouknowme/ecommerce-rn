export interface IAppState {
    page: string;
    searchInput: string | null;
    products: Product[] | null;
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
}
