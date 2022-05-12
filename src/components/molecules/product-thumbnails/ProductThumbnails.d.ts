export type ProductThumbnailsProps = {
  handleThumbnailChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => void;
  gallery: string[];
};
