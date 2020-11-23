export const get = (key: string) => localStorage.getItem(key);
export const del = (key: string) => localStorage.removeItem(key);
export const set = (key: string, data: string) =>
  localStorage.setItem(key, data);

export const getStorageReader = (key: string) => ({
  get: () => get(key),
  set: (data: string) => set(key, data),
  remove: () => del(key),
});

export const getJSONStorageReader = (key: string) => ({
  get() {
    const data = get(key);
    return data ? JSON.parse(data) : null;
  },
  set(data: JSON) {
    set(key, JSON.stringify(data));
  },
  remove: () => del(key),
});
