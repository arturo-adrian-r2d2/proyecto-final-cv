import { useEffect, useState } from 'react';
import { CvProfile } from './components/CvProfile';
import type { CvResponse } from './models/cv.model';
import { getCv } from './services/cv.service';

function App() {
  const [cv, setCv] = useState<CvResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCv = async () => {
      try {
        const data = await getCv();
        setCv(data);
      } catch {
        setError('El backend no respondio correctamente.');
      } finally {
        setLoading(false);
      }
    };

    void loadCv();
  }, []);

  return <CvProfile cv={cv} error={error} loading={loading} />;
}

export default App;
