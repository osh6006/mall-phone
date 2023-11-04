import toast from "react-hot-toast";

interface UserForm {
  email: string;
  password: string;
  passwordConfirm?: string;
}

interface RegisterFormProps {
  changeForm: (form: "login" | "register") => void;
  changeFormData: (formData: UserForm) => void;
  formData: UserForm;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  changeForm,
  changeFormData,
  formData,
}) => {
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      toast.error("이름을 입력해 주세요");
      return false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      toast.error("유효한 이메일 주소를 입력해 주세요");
      return false;
    }

    if (formData.password.length < 8) {
      toast.error("비밀번호는 8자 이상으로 입력해 주세요");
      return false;
    }

    if (!formData.password || !formData.passwordConfirm) {
      toast.error("비밀번호를 입력해 주세요");
      return false;
    }

    if (formData.password !== formData.passwordConfirm) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return false;
    }

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    changeFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("폼이 유효합니다");
    }
  };

  const handleFormChange = (form: "register" | "login") => {
    changeForm(form);
  };
  return (
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
          className="bg-gray-50 border border-gray-300 text-gray-900 
                sm:text-sm rounded-lg 
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
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 
                sm:text-sm rounded-lg focus:ring-primary-600 
                focus:ring-main focus:border-primary-600 block w-full p-2.5 outline-main
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="confirm-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          비밀번호 확인
        </label>
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="••••••••"
          onChange={handleChange}
          value={formData.passwordConfirm}
          className="bg-gray-50 border border-gray-300 text-gray-900 
                sm:text-sm rounded-lg 
                focus:ring-main focus:border-primary-600 block w-full p-2.5 outline-main
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full text-white bg-main hover:bg-opacity-70 transition-opacity 
                focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        회원가입
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        이미 계정이 있으신가요?{" "}
        <span
          onClick={() => handleFormChange("login")}
          className="font-medium text-main cursor-pointer hover:underline dark:text-primary-500"
        >
          로그인 하러 가기
        </span>
      </p>
    </form>
  );
};

export default RegisterForm;
