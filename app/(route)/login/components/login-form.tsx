"use client";

interface UserForm {
  email: string;
  password: string;
  passwordConfirm?: string;
}

interface LoginFormProps {
  changeForm: (form: "login" | "register") => void;
  changeFormData: (formData: UserForm) => void;
  formData: UserForm;
}

const LoginForm: React.FC<LoginFormProps> = ({
  changeForm,
  changeFormData,
  formData,
}) => {
  const handleFormChange = (form: "register" | "login") => {
    changeForm(form);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    changeFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {};

  return (
    <>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            이메일
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                  focus:ring-main focus:border-primary-600 block w-full p-2.5 outline-main
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            비밀번호
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                  focus:ring-main focus:border-primary-600 block w-full p-2.5 outline-main
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-main hover:bg-opacity-70 transition-opacity 
                focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          로그인
        </button>
        <p className="flex gap-x-2 text-sm font-light text-gray-500 dark:text-gray-400">
          아직 가입하지 않으셨나요?
          <span
            onClick={() => handleFormChange("register")}
            className="font-medium text-main cursor-pointer hover:underline dark:text-primary-500"
          >
            가입하러 가기
          </span>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
