import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch(url: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response: any = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
