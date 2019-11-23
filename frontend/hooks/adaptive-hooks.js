import { useEffect, useState } from 'react';

export function useNetworkStatus() {
  const [networkStatus, setNetworkStatus] = useState('4g');

  useEffect(() => {
    setNetworkStatus(window.navigator.connection.effectiveType);
  });

  return { networkStatus };
}
