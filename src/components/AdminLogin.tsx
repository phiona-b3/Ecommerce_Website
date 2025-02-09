import { signInWithEmailAndPassword } from "firebase/auth";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


//Remainder: Create a dummy email and password to be used to access the admin dashboard
//Include it in the ReadMe

const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const AdminLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const onSubmit = async (data: LoginFormData) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            navigate("/admin/dashboard");
        } catch (error) {
            setError("Invalid credentials")
        }
    };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Admin Login</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input {...register("email")} type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <input {...register("password")} type="password" placeholder="Password" className="w-full p-2 border rounded-md" />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <button type="submit" className="w-full bg-cyan-500 text-white p-2 rounded-md">Login</button>
        </form>
    </div>
  )
}

export default AdminLogin