import { Box, Typography, Grid } from '@mui/material';
import { ModuleCard } from 'this.gui';

const demoModules = [
  {
    title: "Neural Model",
    description: "Train and visualize dynamic neural architectures.",
    link: "https://neurons.me/docs/neural-model",
    image: "/media/module-neural.png",
  },
  {
    title: "Signal Flow",
    description: "Real-time signal propagation and transformation.",
    link: "https://neurons.me/docs/signal-flow",
    image: "/media/module-signal.png",
  },
  {
    title: "Data Handler",
    description: "Intuitive control over how data flows through systems.",
    link: "https://neurons.me/docs/data-handler",
    image: "/media/module-data.png",
  },
];

const ModuleCardPage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        ModuleCard Component
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>ModuleCard</strong> is a ready-to-use UI block designed to present a module or feature
        visually. It supports an image, a title, a short description, and a link to learn more.
      </Typography>

      <Typography variant="body2" sx={{ mb: 3 }}>
        You can use it declaratively by passing props like: <code>title</code>, <code>description</code>,
        <code>link</code>, and <code>image</code>.
      </Typography>

      <Typography variant="subtitle1" sx={{ fontWeight: '600', mb: 1 }}>
        Example Usage (React):
      </Typography>
      <Box
        component="pre"
        sx={{
          backgroundColor: '#1e1e1e',
          color: '#ddd',
          p: 2,
          borderRadius: 2,
          overflowX: 'auto',
          mb: 4,
        }}
      >
{`<ModuleCard
  title="Neural Model"
  description="Train and visualize dynamic neural architectures."
  link="https://neurons.me/docs/neural-model"
  image="/media/module-neural.png"
/>`}
      </Box>

      <Grid container spacing={3}>
        {demoModules.map((mod, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ModuleCard {...mod} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ModuleCardPage;