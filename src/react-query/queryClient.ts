import { QueryClient } from "react-query";

const queryErrorHandler = (error: unknown):void => {
    console.log(error);
}

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            onError: queryErrorHandler
        },
        mutations: {
            onError: queryErrorHandler
        }
    }
})