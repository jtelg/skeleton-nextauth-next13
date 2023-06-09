import { cookies } from "next/headers";
export const cookie = {
    SET: (key: string, value: any) => {
        const co = cookies();
        return co.set(key, JSON.stringify(value))
    },
    GET: (key: string) => {
        const co = cookies();
        return co.get(key)?.value || ""
    }
}