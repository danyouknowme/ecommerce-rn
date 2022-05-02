export interface IAppState {
    page: string;
    searchInput: string | null;
}

export interface ICarouselItemProps {
    message: string;
    imageUrl: string;
    color: string;
    lastObject?: boolean;
}

export interface IProductCardProps {
    title: string;
    imageUrl: string;
    price: number;
}
