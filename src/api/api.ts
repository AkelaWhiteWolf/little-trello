export const API = {
  async get(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return { data };
    } catch (error) {
      console.error(error);
      return { error };
    }
  },
};
