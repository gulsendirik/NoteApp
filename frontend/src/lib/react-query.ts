import { AxiosError } from "axios";
import {
  QueryClient,
  UseQueryOptions,
  UseMutationOptions,
  DefaultOptions,
  QueryKey,
  QueryFunctionContext,
} from "react-query";
import { AsyncReturnType } from "type-fest";

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type ExtractFnReturnType<FnType extends (...args: any) => any> =
  AsyncReturnType<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> =
  UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    AxiosError,
    Parameters<MutationFnType>[0]
  >;

export type QueryContext<
  keys extends { [K: string]: QueryKey | ((...params: any[]) => QueryKey) },
  mode extends keyof keys
> = keys[mode] extends (...params: any[]) => QueryKey
  ? QueryFunctionContext<ReturnType<keys[mode]>>
  : keys[mode] extends QueryKey
  ? QueryFunctionContext<keys[mode]>
  : never;
