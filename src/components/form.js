import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password is too short')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(values);
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-black">Login Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={formik.handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className={`peer placeholder-transparent h-10 w-full border-b-2 ${formik.errors.email ? 'border-red-600' : 'border-gray-300'} text-gray-900 focus:outline-none focus:border-blue-600`}
                    placeholder="Email address"
                    {...formik.getFieldProps('email')}
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Email Address
                  </label>
                  {formik.errors.email ? (
                    <div className="mt-1 text-red-600">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className={`peer placeholder-transparent h-10 w-full border-b-2 ${formik.errors.password ? 'border-red-600' : 'border-gray-300'} text-gray-900 focus:outline-none focus:border-blue-600`}
                    placeholder="Password"
                    {...formik.getFieldProps('password')}
                  />
                  <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Password
                  </label>
                  {formik.errors.password ? (
                    <div className="mt-1 text-red-600">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="relative">
                  <button
                    className="bg-blue-500 text-white rounded-md px-2 py-1"
                    type="submit"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? 'Loading' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
