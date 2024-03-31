import { request } from "@playwright/test"

const postRequest = async (url: string, data?: any) => {
    const context = await request.newContext()
    return await context.post(url, {
        data: data ? data : ''
    })
}

const getRequest = async (url: string, param?: any) => {
    const context = await request.newContext()
    return await context.get(url, {
        params: {
            'id': param,
        }
    })
}

export { postRequest, getRequest }