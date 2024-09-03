import { useForm } from "react-hook-form";
import { Input } from "./ui/auth/Input";

interface register_dto {
    nombre: string;
    usuario: string;
    password: string;
    confirmPassword: string;
}

export function Register() {
    const { register, handleSubmit, watch } = useForm<register_dto>();
    const onSubmit = async (data: register_dto) => {
        if (data.password !== data.confirmPassword) {
            console.log("Las contraseñas no coinciden");
            return;
        }
        console.log(data.nombre);
        console.log(data.usuario);
        console.log(data.password);
        // Aquí iría la lógica para el registro
    };

    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    return (
        <div className="flex min-h-[100dvh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-xs sm:max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl tracking-tight">
                        Register for an account
                    </h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="nombre" className="block text-sm">
                            Full Name
                        </label>
                        <div className="mt-1">
                            <Input boolean={true} register={register} id="nombre" name="nombre" type="text" place="John Doe" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="usuario" className="block text-sm">
                            Email Address
                        </label>
                        <div className="mt-1">
                            <Input boolean={true} register={register} id="usuario" name="usuario" type="email" place="example@gmail.com" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm">
                            Password
                        </label>
                        <div className="mt-1">
                            <Input boolean={true} register={register} id="password" name="password" type="password" place="*********" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm">
                            Confirm Password
                        </label>
                        <div className="mt-1">
                            <Input boolean={true} register={register} id="confirmPassword" name="confirmPassword" type="password" place="*********" />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-teal-500 text-amber-50 py-2 px-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
