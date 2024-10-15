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

export const get_unit_amount = (description, price) => {
  const { checkin, checkout } = JSON.parse(description);
  if (!checkin || !checkout) {
    return 0;
  }
  return getQuantity(checkin, checkout) * price;
};
export const getWithExpiry = (key: string) => {
  const expires = localStorage.getItem("expires");
  const item = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!item || !expires) {
    return null;
  }
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > JSON.parse(expires)) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item;
};

export const setWithExpiry = (key, value) => {
  const now = new Date();

  localStorage.setItem(key, JSON.stringify(value));
  localStorage.setItem("expires", (now.getTime() + 3600000).toString());
};
