export const get = (key: string): string | null => localStorage.getItem(key);
export const del = (key: string): void => localStorage.removeItem(key);
export const set = (key: string, data: string): void =>
  localStorage.setItem(key, data);

export const getStorageReader: any = (key: string) => ({
  get: () => get(key),
  set: (data: string) => set(key, data),
  remove: () => del(key),
});

export const getJSONStorageReader: any = (key: string) => ({
  get() {
    const data = get(key);
    return data ? JSON.parse(data) : null;
  },
  set(data: JSON) {
    set(key, JSON.stringify(data));
  },
  remove: () => del(key),
});
