import { QueryClient } from "react-query";
import {message} from "antd";

const queryErrorHandler = (error: unknown):void => {
    const msg = error instanceof Error ? error.message : 'error connecting to server';
    message.error(msg);
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