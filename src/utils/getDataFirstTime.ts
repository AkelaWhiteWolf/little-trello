interface Params {
  data?: any[];
  isLoading?: boolean;
  getDataFunction: (data?: any) => any;
}

export async function getDataFirstTime({
  data,
  isLoading,
  getDataFunction,
}: Params) {
  if (!data?.length && !isLoading) {
    const result = await getDataFunction();
    return result;
  }
}
