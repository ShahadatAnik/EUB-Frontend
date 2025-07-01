export type IPageItem = {
  title: string;
  href?: string;
  items?: IPageItem[];
  redirect?: boolean;
};

export interface ILab {
  title: string;
  description: string | React.ReactNode;
  images?: {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
  }[];
  equipment?: string;
  software?: string;
}
