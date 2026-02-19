import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Formik Registration Form
      </h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted:", values);
          alert("Registration successful!");
          resetForm();
        }}
      >
        <Form className="space-y-4">
          <div>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;