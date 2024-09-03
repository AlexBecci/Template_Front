import { useForm } from "react-hook-form";
import { Input } from "./ui/auth/Input";
interface login_dto {
    usuario: string
    password: string
}
export function Login() {
    const { register, handleSubmit } = useForm<login_dto>()
    async function onSubmit(data: login_dto) {
        console.log(data.usuario)
        console.log(data.password)
    }
    return (
        <div className="flex min-h-[100dvh] items-center justify-center  px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto w-full  max-w-xs sm:max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl  tracking-tight ">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-muted">
                        Or{" "}
                        <a href="#" className=" " >
                            start your 14-day free trial
                        </a>
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm  ">
                            Username
                        </label>
                        <div className="mt-1">
                            <Input register={register} boolean={true} place="beccialex@gmail.com" id="usuario" name="usuario" type="email" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm  ">
                            Password
                        </label>
                        <div className="mt-1">
                            <Input register={register} boolean={true} id="password" name="password" place="*********" type="password" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded  focus:ring-primary"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm ">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="  " >
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-teal-500 text-amber-50 py-2 px-4 text-sm   shadow-sm  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                        >
                            Sign in
                        </button>
                    </div>
                    <div>
                        <button
                            /* onClick={check_session} */
                            type="button"
                            className="flex w-full justify-center rounded-md bg-teal-500 text-amber-50 py-2 px-4 text-sm   shadow-sm  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                        >
                            check session
                        </button>
                    </div>
                    <div>
                        <button
                            /* onClick={logout} */
                            type="button"
                            className="flex w-full justify-center rounded-md bg-teal-500 text-amber-50 py-2 px-4 text-sm   shadow-sm  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                        >
                            Logout
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}