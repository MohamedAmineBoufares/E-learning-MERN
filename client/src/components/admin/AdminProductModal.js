import React, { Fragment, useState } from "react";
import "./Admin.css"

import { v4 as uuidv4 } from "uuid";

import isEmpty from "validator/lib/isEmpty";

import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
import { showLoading } from "../../helpers/loading";

// redux
import { useSelector, useDispatch } from "react-redux";
import { clearMessages } from "../../redux/actions/messageActions";
import { createProduct } from "../../redux/actions/productActions";

const AdminProductModal = () => {
  /********************************
   * REDUX GLOBAL STATE PROPERTIES
   ********************************/
  const { loading } = useSelector((state) => state.loading);
  const { successMsg, errorMsg } = useSelector((state) => state.messages);
  const { categories } = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  /********************************
   * COMPONENT STATE PROPERTIES
   ********************************/

  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), chapterName: "", chapterURL: "" },
  ]);

  const [clientSideError, setClientSideError] = useState("");

  const [coursePDF, setCoursePDF] = useState("");

  const [productData, setProductData] = useState({
    productImage: null,
    productName: "",
    productDesc: "",
    productPrice: "",
    productCategory: "",
    videoUrl: "",
    previewUrl: "",
  });

  const {
    productImage,
    productName,
    productDesc,
    productPrice,
    productCategory,
    videoUrl,
    previewUrl,
  } = productData;

  /********************************
   * EVENT HANDLERS
   ********************************/
  const handleMessages = (evt) => {
    dispatch(clearMessages());
    setClientSideError("");
  };

  const handleProductImage = (evt) => {
    console.log(evt.target.files[0]);
    setProductData({
      ...productData,
      [evt.target.name]: evt.target.files[0],
    });
  };

  const handleProductChange = (evt) => {
    setProductData({
      ...productData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleProductSubmit = (evt) => {
    evt.preventDefault();

    if (productImage === null) {
      setClientSideError("Please select a thumbnail");
    } else if (
      isEmpty(productName) ||
      isEmpty(productDesc) ||
      isEmpty(productPrice) ||
      isEmpty(previewUrl)
    ) {
      setClientSideError("All fields are required");
    } else if (isEmpty(productCategory)) {
      setClientSideError("Please select a category");
    } else {
      // let formData = new FormData();

      // formData.append("productImage", productImage);
      // formData.append("productName", productName);
      // formData.append("productDesc", productDesc);
      // formData.append("productPrice", productPrice);
      // formData.append("productCategory", productCategory);
      // // formData.append("chapters", inputFields);
      // formData.append("previewUrl", previewUrl);

      const dataToSend = {
        productImage,
        productName,
        productDesc,
        productPrice,
        productCategory,
        previewUrl,
        inputFields,
        coursePDF,
      };

      dispatch(createProduct(dataToSend));
      setProductData({
        productImage: null,
        productName: "",
        productDesc: "",
        productPrice: "",
        productCategory: "",
        videoUrl: "",
        previewUrl: "",
      });
      setCoursePDF("");
    }
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), chapterName: "", chapterURL: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  /********************************
   * RENDERS
   ********************************/
  return (
    <div id="addCourseModal" className="modal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div>
            <div className="modal-header text-white add__prod__modal">
              <h5 className="modal-title">Add Course</h5>
              <button className="close" data-dismiss="modal">
                <span>
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body my-2">
              {clientSideError && showErrorMsg(clientSideError)}
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}

              {loading ? (
                <div className="text-center">{showLoading()} </div>
              ) : (
                <div className="container">
                  <div className="custom-file mb-2">
                    <input
                      type="file"
                      className="custom-file-input"
                      name="productImage"
                      onChange={handleProductImage}
                    />
                    <label className="custom-file-label">Choose File</label>
                  </div>

                  <div className="form-group mt-2">
                    <label className="text-secondary">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="productName"
                      value={productName}
                      onChange={handleProductChange}
                    />
                  </div>

                  <div className="form-group mt-2">
                    <label className="text-secondary">Description</label>
                    <textarea
                      rows="3"
                      className="form-control p-3"
                      name="productDesc"
                      value={productDesc}
                      onChange={handleProductChange}
                    ></textarea>
                  </div>

                  <div className="form-group mt-2">
                    <label className="text-secondary">Price</label>
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      name="productPrice"
                      value={productPrice}
                      onChange={handleProductChange}
                    />
                  </div>

                  <div className="form-row mt-2">
                    <label className="text-secondary">Category</label>
                    <select
                      className="custom-select mr-sm-2"
                      name="productCategory"
                      onChange={handleProductChange}
                    >
                      <option value="">Choose a category...</option>
                      {categories &&
                        categories.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.category}
                          </option>
                        ))}
                    </select>
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

                  <div className="form-group mt-2">
                    <label className="text-secondary">video Preview URL</label>
                    <input
                      type="text"
                      className="form-control"
                      name="previewUrl"
                      value={previewUrl}
                      onChange={handleProductChange}
                    />
                  </div>

                  <div className="form-group" rows="3">
                    <h4>Add course chapters</h4>
                    {inputFields.map(({ id, chapterName, chapterURL }, i) => (
                      <div key={id}>
                        <label className="text-secondary mt-2">
                          Chapter {i + 1} name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="chapterName"
                          value={chapterName}
                          onChange={(e) => handleChangeInput(id, e)}
                        />

                        <label className="text-secondary mt-2">
                          Chapter {i + 1} URL
                        </label>

                        <div className="d-flex">
                          <input
                            type="text"
                            className="form-control"
                            name="chapterURL"
                            value={chapterURL}
                            onChange={(e) => handleChangeInput(id, e)}
                          />
                          <button
                            className="btn"
                            onClick={() => handleRemoveFields(id)}
                            title="Remove this chapter"
                            disabled={inputFields.length === 1}
                            style={{ display: i + 1 === 1 ? "none" : "block" }}
                          >
                            <i
                              class="fa fa-minus-circle"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </div>
                    ))}
                    <button className="btn mt-2" onClick={handleAddFields}>
                      <i class="fa fa-plus-circle mr-2" aria-hidden="true"></i>
                      Add a new chapter
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button
                type="submit"
                className="btn btn-warning text-white"
                onClick={handleProductSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductModal;
