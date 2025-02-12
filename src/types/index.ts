export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
}

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: Image[];
}
