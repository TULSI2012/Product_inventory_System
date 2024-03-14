import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AddProductForm.css";

const AddProductForm = () => {
  const initialValues = {
    productName: "",
    image: "",
    price: "",
    description: "",
    keyword: "",
    category: "",
    subcategory: "",
  };

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Product Name is required"),
    image: Yup.mixed().required("Image is required"),
    price: Yup.number().required("Price is required"),
    description: Yup.string().required("Description is required"),
    keyword: Yup.string().required("Keyword is required"),
    category: Yup.string().required("Category is required"),
    subcategory: Yup.string().required("Subcategory is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    // Handle form submission here, such as sending data to backend
    console.log("Form submitted with values:", values);
    resetForm();
  };

  function setFieldValue(_arg0: string, _arg1: File) {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="add-product-form">
      <h1>Add Product</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <Field type="text" name="productName" />
              <ErrorMessage
                name="productName"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={(event) => {
                  if (
                    event.currentTarget.files &&
                    event.currentTarget.files.length > 0
                  ) {
                    setFieldValue("image", event.currentTarget.files[0]);
                  }
                }}
              />
              <ErrorMessage name="image" component="div" />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <Field type="number" name="price" />
              <ErrorMessage
                name="price"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field as="textarea" name="description" />
              <ErrorMessage
                name="description"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="keyword">Keyword</label>
              <Field type="text" name="keyword" />
              <ErrorMessage
                name="keyword"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <Field type="text" name="category" />
              <ErrorMessage
                name="category"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subcategory">Subcategory</label>
              <Field type="text" name="subcategory" />
              <ErrorMessage
                name="subcategory"
                component="div"
                className="error-message"
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProductForm;
