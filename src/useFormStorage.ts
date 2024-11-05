// useFormStorage.ts
export function useFormStorage(storageKey: string) {
    return {
      saveData: (data: Record<string, any>) => {
        localStorage.setItem(storageKey, JSON.stringify(data));
      },
  
      loadData: (): Record<string, any> | null => {
        const data = localStorage.getItem(storageKey);
        return data ? JSON.parse(data) : null;
      },
  
      clearData: () => {
        localStorage.removeItem(storageKey);
      },
    };
  }
  