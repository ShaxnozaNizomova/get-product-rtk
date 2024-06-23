import React, { useState } from "react";
import "./CreateProduct.css";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useCreateProductMutation } from "../../context/api/productApi";
import LocalImage from "../localImage/LocalImage";
const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
};
const CreateProduct = () => {
  const { formData, setFormData, handleChange } =
    useGetInputValue(initialState);
  const [files, setFiles] = useState("");
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const handleCreateProducts = (e) => {
    e.preventDefault();

    let form = new FormData();

    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("oldPrice", formData.oldPrice);
    form.append("category", formData.category);
    form.append("units", formData.units);
    form.append("description", formData.description);
    form.append("info", JSON.stringify({}));

    Array.from(files).forEach((img) => {
      form.append("files", img, img.name);
    });
    createProduct(form);
    setFormData(initialState);
    setFiles("");
    alert("A new product succesfully created");
  };
  return (
    <div className="create__products">
      <div className="create">
        <form onSubmit={handleCreateProducts}>
          <input
            required
            placeholder="Product title"
            value={formData.title}
            type="text"
            name="title"
            onChange={handleChange}
          />
          <input
            required
            placeholder="Products price"
            value={formData.price}
            type="number"
            name="price"
            onChange={handleChange}
          />
          <input
            required
            placeholder="Products old price"
            value={formData.oldPrice}
            type="number"
            name="oldPrice"
            onChange={handleChange}
          />
          <input
            required
            placeholder="Products category"
            value={formData.category}
            type="text"
            name="category"
            onChange={handleChange}
          />
          <input
            required
            placeholder="Products unit"
            value={formData.unit}
            type="text"
            name="unit"
            onChange={handleChange}
          />
          <textarea
            placeholder="Product description"
            value={formData.description}
            name="description"
            onChange={handleChange}
          ></textarea>
          <textarea
            placeholder="Product info"
            value={formData.info}
            name="info"
            onChange={handleChange}
          ></textarea>
          <div>
            <input
              required
              onChange={(e) => setFiles(e.target.files)}
              type="file"
              multiple
              accept="image/*"
            />
            <LocalImage files={files} setFiles={setFiles} />
          </div>
          <button disabled={isLoading}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
