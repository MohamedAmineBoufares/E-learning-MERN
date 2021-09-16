import axios from "axios";

export const sendOrder = async (data, user, src, total, phoneNumber) => {
  const response = await axios.post("/api/cart/add", {
    userName: user.username,
    userEmail: user.email,
    userPhone: phoneNumber,
    userID: user._id,
    course: data.map(
      ({
        productName,
        productID,
        fileName,
        productPrice,
        videoUrl,
        previewUrl,
      }) => ({
        courseID: productID,
        courseName: productName,
        courseSrc: fileName,
        coursePrice: productPrice,
        videoURL: videoUrl,
        previewURL: previewUrl,
        courseFile: "",
      })
    ),
    authorised: "false",
    picRecipient: src,
    total: total,
  });

  return response;
};

export const uploadPic = async (src) => {
  const formData = new FormData();
  formData.append("file", src);
  formData.append("upload_preset", "wqbsqwut");
  const response = axios.post(
    "https://api.cloudinary.com/v1_1/dndxpxoed/image/upload",
    formData
  );

  return response;
};
