import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  School as SchoolIcon,
  WorkOutlined as WorkIcon,
} from '@mui/icons-material';
import type { CvResponse } from '../models/cv.model';

interface CvProfileProps {
  cv: CvResponse | null;
  loading: boolean;
  error: string | null;
}

export const CvProfile = ({ cv, error, loading }: CvProfileProps) => {
  if (loading) {
    return (
      <Box sx={{ display: 'grid', minHeight: '100vh', placeItems: 'center' }}>
        <CircularProgress aria-label="Cargando curriculum" />
      </Box>
    );
  }

  if (error || !cv) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Paper sx={{ p: 3, textAlign: 'center' }}>
          <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
            No se pudo cargar el CV
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            {error || 'Intente nuevamente mas tarde.'}
          </Typography>
        </Paper>
      </Container>
    );
  }

  const { persona, formacion } = cv;

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        bgcolor: '#f5f7fb',
        color: 'text.primary',
        py: { xs: 3, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            overflow: 'hidden',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '320px 1fr' },
            }}
          >
            <Box
              sx={{
                bgcolor: '#17324d',
                color: 'common.white',
                p: { xs: 3, md: 4 },
              }}
            >
              <Stack spacing={3} sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}>
                <Avatar
                  alt={`${persona.nombre} ${persona.apellido}`}
                  src={persona.foto}
                  sx={{
                    width: 160,
                    height: 160,
                    border: '4px solid rgba(255,255,255,0.35)',
                  }}
                />

                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography component="h1" variant="h3" sx={{ fontWeight: 800 }}>
                    {persona.nombre} {persona.apellido}
                  </Typography>
                  <Typography sx={{ mt: 1, color: 'rgba(255,255,255,0.78)' }}>
                    Desarrollador Full Stack Junior
                  </Typography>
                </Box>

                <Chip
                  icon={<LocationIcon />}
                  label={persona.ciudad}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.14)',
                    color: 'common.white',
                    '& .MuiChip-icon': { color: 'common.white' },
                  }}
                />
              </Stack>
            </Box>

            <Box sx={{ p: { xs: 3, md: 5 } }}>
              <Stack spacing={4}>
                <Box>
                  <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center', mb: 1.5 }}>
                    <WorkIcon color="primary" />
                    <Typography component="h2" variant="h5" sx={{ fontWeight: 700 }}>
                      Perfil profesional
                    </Typography>
                  </Stack>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    Profesional en formacion con enfoque en desarrollo web, APIs REST,
                    bases de datos relacionales y despliegue de aplicaciones con Docker.
                  </Typography>
                </Box>

                <Box>
                  <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center', mb: 2 }}>
                    <SchoolIcon color="primary" />
                    <Typography component="h2" variant="h5" sx={{ fontWeight: 700 }}>
                      Formacion academica
                    </Typography>
                  </Stack>

                  <Stack component="ul" spacing={2} sx={{ listStyle: 'none', p: 0, m: 0 }}>
                    {formacion.map((item) => (
                      <Paper
                        component="li"
                        key={item.id}
                        variant="outlined"
                        sx={{ p: 2, borderRadius: 1 }}
                      >
                        <Stack
                          direction={{ xs: 'column', sm: 'row' }}
                          spacing={1}
                          sx={{ justifyContent: 'space-between' }}
                        >
                          <Box>
                            <Typography sx={{ fontWeight: 700 }}>
                              {item.titulo}
                            </Typography>
                            <Typography color="text.secondary">
                              {item.institucion}
                            </Typography>
                          </Box>
                          <Chip label={item.anio} size="small" color="primary" />
                        </Stack>
                      </Paper>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
