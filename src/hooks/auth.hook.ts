import { getMe, userLogin, userLogout, userRegistration } from "@/api/auth.api";
import type { User } from "@/types";
import {
    queryOptions,
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import { FetchError } from "ofetch";

const useRefreshMe = () => {
    const queryClient = useQueryClient();
    return () => queryClient.query({ ...meQueryOptions, staleTime: 0 });
};

export const useLogin = () => {
    const refreshMe = useRefreshMe();
    return useMutation({
        mutationFn: userLogin,
        onSuccess: () => refreshMe(),
    });
};

export const useRegistration = () => {
    return useMutation({
        mutationFn: userRegistration,
    });
};

export const useLogout = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: userLogout,
        onSuccess: () => {
            queryClient.setQueryData(meQueryOptions.queryKey, null);
        },
    });
};

const fetchMe = async (): Promise<User | null> => {
    try {
        const res = await getMe();
        return res.success ? res.data : null;
    } catch (err) {
        if (
            err instanceof FetchError &&
            (err.status === 401 || err.status === 403)
        ) {
            return null;
        }
        throw err;
    }
};

export const meQueryOptions = queryOptions({
    queryKey: ["user"],
    queryFn: fetchMe,
    retry: false,
});

export const useGetMe = () => useQuery(meQueryOptions);
