import { getCldImageUrl } from "next-cloudinary";
import { products } from "./products";
import moment from "moment";

export const getImageUrl = (image) => getCldImageUrl({ src: image });

export const getImagesUrls = (images) =>
  images.map((image) => getImageUrl(image));

export const getProductById = (id) =>
  products.find((product) => product.id === id);

export const getQuantity = (start, end) =>
  moment(end).diff(moment(start), "days");
