const ProductForm = ({ handleChange, handleSubmit, formData }) => {


  
  return (
    <article id="add-product" className="mb-4 mt-4">
      <h1 className="text-center">Product</h1>
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
            Product Name
          </label>
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-price" className="form-label">
            Product Price
          </label>
          <input
            value={formData.price}
            onChange={handleChange}
            type="number"
            className="form-control"
            id="price"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-quantity" className="form-label">
            Product Quantity
          </label>
          <input
            value={formData.amount}
            onChange={handleChange}
            type="number"
            className="form-control"
            id="amount"
            required
          />
        </div>
        <label htmlFor="add-image" className="form-label">
          Product Image
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            value={formData.image}
            onChange={handleChange}
            type="url"
            className="form-control"
            id="image"
            aria-describedby="basic-addon3"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            <i className="fa-solid fa-cart-plus me-2"></i>Save To Product
          </button>
        </div>
      </form>
    </article>
  );
};

export default ProductForm;
