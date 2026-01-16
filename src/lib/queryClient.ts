import { QueryClient } from "@tanstack/react-query";

export const queryClient =  new QueryClient({
    defaultOptions: {
        queries: {

            staleTime: 1000 * 60,               // determines how long the data is 'fresh'
            refetchOnWindowFocus:  false        // 기본값 true

        }
    }
})