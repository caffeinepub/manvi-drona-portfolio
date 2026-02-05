import { useEffect, useState } from 'react';

export function useStaticAssetAvailability(assetPath: string) {
  const [isAvailable, setIsAvailable] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const checkAsset = async () => {
      try {
        const response = await fetch(assetPath, { method: 'HEAD' });
        if (!cancelled) {
          setIsAvailable(response.ok);
          setIsChecking(false);
        }
      } catch {
        if (!cancelled) {
          setIsAvailable(false);
          setIsChecking(false);
        }
      }
    };

    checkAsset();

    return () => {
      cancelled = true;
    };
  }, [assetPath]);

  return { isAvailable, isChecking };
}
