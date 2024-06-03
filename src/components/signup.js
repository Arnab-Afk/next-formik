import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .required('Required'),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/signup/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          const data = await response.json();
          setErrors({ submit: data.error || 'Something went wrong' });
        } else {
          alert('Signup successful');
        }
      } catch (error) {
        setErrors({ submit: error.message });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden">
      <div className="relative hidden xl:block xl:w-1/2 h-full">
        <img
          className="absolute h-auto w-full object-cover"
          src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e"
          alt="Background"
        />
      </div>
      <div className="w-full xl:w-1/2 p-8">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-2xl font-bold">Sign up for a new account</h1>
          <div>
            <span className="text-gray-600 text-sm">Signup Form</span>
          </div>
          {formik.errors.submit && (
            <div className="text-red-500 text-sm">{formik.errors.submit}</div>
          )}
          <div className="mb-4 mt-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className={`text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10 ${
                formik.touched.username && formik.errors.username ? 'border-red-500' : ''
              }`}
              id="username"
              name="username"
              type="text"
              placeholder="Your username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 text-sm">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="mb-4 mt-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10 ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : ''
              }`}
              id="email"
              name="email"
              type="text"
              placeholder="Your email address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-6 mt-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10 ${
                formik.touched.password && formik.errors.password ? 'border-red-500' : ''
              }`}
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            ) : null}
            <a
              className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex w-full mt-8">
            <button
              className="w-full bg-gray-800 hover:bg-gray-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
