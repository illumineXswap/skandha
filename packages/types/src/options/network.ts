export type NetworkOptions = {
  host: string;
  port: number;
  bootEnrs: string[];
};

export const defaultNetworkOptions: NetworkOptions = {
  host: "127.0.0.1",
  port: 4337,
  bootEnrs: [],
};
