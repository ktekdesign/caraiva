import { getCldImageUrl } from "next-cloudinary";
import { products } from "./products";
import { differenceInDays, differenceInBusinessDays } from "date-fns";

export const getImageUrl = (image) => getCldImageUrl({ src: image });

export const getImagesUrls = (images) =>
  images.map((image) => getImageUrl(image));

export const getProductById = (id) =>
  products.find((product) => product.id === id);

export const getQuantity = (start, end) => differenceInDays(end, start);

export const getBusinessQuantity = (start, end) =>
  differenceInBusinessDays(end, start);

export const get_unit_amount = (start, end) =>
  (getBusinessQuantity(start, end) * 250 +
    (getQuantity(start, end) - getBusinessQuantity(start, end)) * 300) /
  getQuantity(start, end);
