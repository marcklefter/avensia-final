import {
  DependencyContext 
} from './DependencyContext'

import {
  App as AppComponent
} from './App';

// ...

async function apiFetch<T>(resource: string): Promise<T> {
  const response  = await fetch(`${process.env.REACT_APP_API_URL}/${resource}`);
  const data      = await response.json();

  return data;
}

// ...

export const App = () => {
  return (
    <DependencyContext.Provider value={{ apiFetch }}>
      <AppComponent />
    </DependencyContext.Provider>
  )
}