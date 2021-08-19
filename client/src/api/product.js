import axios from "axios";

const testing = [
  {
    courseName: "autra",
    authorised: "false",
  },
  {
    courseName: "autra2",
    authorised: "true",
  },
];

export const createProduct = async (data) => {
  const response = await axios.post("/api/product", data);

  return response;
};

// Function responsable for sending user Cart items To DB
export const addCartToUser = async (data, userID, src) => {
  const response = await axios.post(`/api/product/new/course?id=${userID}`, {
    course: data.map(({ productName }) => ({
      courseName: productName,
      authorised: "false",
    })),
    picRecipient: src,
  });

  return response;
};
