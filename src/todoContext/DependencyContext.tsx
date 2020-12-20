import * as React from 'react';

// ...

export type DependencyContextType = {
  apiFetch<T>(resource: string): Promise<T>
}

export const DependencyContext = React.createContext<DependencyContextType>({} as DependencyContextType);