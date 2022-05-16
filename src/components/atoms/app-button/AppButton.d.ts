import { Product } from "../../../types/Product";

export type AppButtonProps = {
  variant?: "primary" | "secondary";
  children: ReactNode;
  fontSize?: string;
  onClick: VoidFunction;
};
