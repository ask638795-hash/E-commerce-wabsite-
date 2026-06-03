import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
    >
      <h2 className="text-3xl font-bold mb-6">
        Login
      </h2>

      <input
        {...register("email")}
        placeholder="Email"
        className="w-full border p-3 rounded-lg mb-4"
      />

      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="w-full border p-3 rounded-lg mb-4"
      />

      <button
        className="gradient-btn w-full py-3 rounded-xl"
      >
        Login
      </button>
    </form>
  );
}
