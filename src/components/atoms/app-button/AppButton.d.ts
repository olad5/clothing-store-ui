import { Product } from "../../../types/Product";

export type AppButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  children: ReactNode;
  fontSize?: string;
  onClick(): void;
};
