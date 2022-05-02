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
