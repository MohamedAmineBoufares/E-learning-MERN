import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../redux/actions/productActions";
import { getCategories } from "../../redux/actions/categoryActions";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { showLoading } from "../../helpers/loading";

const AdminEditProduct = ({ match, history }) => {
  /********************************
   * PARAMETRES
   ********************************/
  const productId = match.params.productId;

  /********************************
   * REDUX GLOBAL STATE PROPERTIES
   ********************************/
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.oneProd);
  const { categories } = useSelector((state) => state.categories);
  const loading = useSelector((state) => state.loading.loading);

  /********************************
   * COMPONENT STATE PROPERTIES
   ********************************/
  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [coursePDF, setCoursePDF] = useState("");
  const [chapters, setChapters] = useState([]);

  /********************************
   * LIFECYCLEMETHODS
   ********************************/
  useEffect(() => {
    if (!product) {
      dispatch(getProduct(productId));
      dispatch(getCategories());
    } else {
      setProductImage(product.fileName);
      setProductName(product.productName);
      setProductDesc(product.productDesc);
      setProductPrice(product.productPrice);
      setProductCategory(product.productCategory);
      setPreviewUrl(product.previewUrl);
      setCoursePDF(product.coursePDF);
      setChapters(product.chapters);

      console.log(chapters);
    }
  }, [dispatch, productId, product]);

  /****************************
   * EVENT HANDLERS
   ***************************/
  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    setProductImage(image);
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append("productImage", productImage);
    // formData.append("productName", productName);
    // formData.append("productDesc", productDesc);
    // formData.append("productPrice", productPrice);
    // formData.append("productCategory", productCategory);
    // formData.append("videoUrl", chapters);
    // formData.append("previewUrl", previewUrl);

    const dataToSend = {
      productImage,
      productName,
      productDesc,
      productPrice,
      productCategory,
      previewUrl,
      chapters,
      coursePDF,
    };

    dispatch(updateProduct(productId, dataToSend));

    //   const config = {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   };

    //   await axios
    //     .put(`/api/product/${productId}`, dataToSend)
    //     .then((res) => {
    //       history.push("/admin/dashboard");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = chapters.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setChapters(newInputFields);
  };

  const handleAddFields = () => {
    setChapters([
      ...chapters,
      { id: uuidv4(), chapterName: "", chapterURL: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...chapters];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setChapters(values);
  };

  return (
    <div className="col" style={{ marginTop: "8rem" }}>
      <div className="row justify-content-center">
        <div className="container">
          <div className="modal-content">
            <div className="modal-header bg-warning text-white">
              <h5 className="modal-title">Update Course</h5>
              <Link
                className="btn btn-outline-light d-flex align-items-center"
                to="/admin/dashboard"
              >
                <i class="fa fa-arrow-left mr-2" aria-hidden="true"></i>
                Back to dashboard
              </Link>
            </div>
            <div className="modal-body my-2">
              <Fragment>
                <label className="btn btn-dark mr-4">
                  Update course thumbnail
                  <input type="file" name="productImage" hidden />
                </label>
                {productImage && productImage.name ? (
                  <span className="badge badge-secondary">
                    {productImage.name}
                  </span>
                ) : productImage ? (
                  <img
                    className="img-thumbnail"
                    style={{
                      width: "120px",
                      height: "80px",
                    }}
                    src={productImage}
                    alt="product"
                  />
                ) : null}

                <div className="form-group">
                  <label className="text-secondary">Course Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="text-secondary">Course Description</label>
                  <textarea
                    className="form-control p-3"
                    rows="5"
                    name="productDesc"
                    value={productDesc}
                    onChange={(e) => setProductDesc(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label className="text-secondary">Course Price</label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    name="productPrice"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>

                <div className="form-group mt-2">
                  <label className="text-secondary">Course PDF link</label>
                  <input
                    type="text"
                    className="form-control"
                    name="coursePDF"
                    value={coursePDF}
                    onChange={(e) => setCoursePDF(e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-sm-4">
                    <label className="text-secondary">Category</label>
                    <select
                      className="custom-select mr-sm-2"
                      name="productCategory"
                      value={productCategory}
                      onChange={(e) => setProductCategory(e.target.value)}
                    >
                      <option value="">Choose one...</option>
                      {categories &&
                        categories.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.category}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="form-group col-sm-8">
                    <label className="text-secondary">video Preview URL</label>
                    <input
                      type="text"
                      className="form-control"
                      name="previewUrl"
                      value={previewUrl}
                      onChange={(e) => setPreviewUrl(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  {chapters &&
                    chapters.map(
                      ({ _id, chapterName, chapterVideo, id }, i) => (
                        <div key={id}>
                          <label className="text-secondary mt-2">
                            Chapter {i + 1} name{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control mt-2"
                            name="chapterName"
                            value={chapterName}
                            onChange={(e) => handleChangeInput(id, e)}
                          />
                          <label className="text-secondary mt-2">
                            Chapter {i + 1} URL{" "}
                          </label>
                          <div className="d-flex">
                            <input
                              type="text"
                              className="form-control mt-2"
                              name="chapterVideo"
                              value={chapterVideo}
                              onChange={(e) => handleChangeInput(id, e)}
                            />
                            <button
                              className="btn"
                              onClick={() => handleRemoveFields(id)}
                              title="Remove this chapter"
                              disabled={chapters.length === 1}
                              style={{
                                display: i + 1 === 1 ? "none" : "block",
                              }}
                            >
                              <i
                                class="fa fa-minus-circle"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </div>
                        </div>
                      )
                    )}
                  <button className="btn mt-2" onClick={handleAddFields}>
                    <i class="fa fa-plus-circle mr-2" aria-hidden="true"></i>
                    Add a new chapter
                  </button>
                </div>
              </Fragment>
            </div>
            <div className="modal-footer">
              {loading ? (
                <div>{showLoading()}</div>
              ) : (
                <button
                  type="submit"
                  className="btn btn-warning text-white"
                  onClick={handleProductSubmit}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEditProduct;
