export const currencyFormatter = (amount) => {
  return amount?.toLocaleString("en-SA", {
    style: "currency",
    currency: "SAR",
  });
};
