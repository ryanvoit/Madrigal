import z from "zod"

export const LoginScheme = z.object({
    email: z.string().min(1, 'Email обязателен').email('Некорректный email'),
    password: z.string().min(1, 'Пароль обязателен'),
})

export type Login = z.infer<typeof LoginScheme>