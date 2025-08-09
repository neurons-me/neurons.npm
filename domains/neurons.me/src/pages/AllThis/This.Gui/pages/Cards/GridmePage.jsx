import { Box, Grid, Typography } from '@mui/material';
import { LilBox } from 'this.gui'; // Adjust path if needed

const gridItems = [
  { label: 'Simple Grid', icon: 'Grid', href: '/this.GUI/Grid/Simple' },
  { label: 'Responsive Grid', icon: 'Layout', href: '/this.GUI/Grid/Responsive' },
  { label: 'Nested Grid', icon: 'Layers', href: '/this.GUI/Grid/Nested' },
];

const GridmePage = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Grid Examples
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ marginBottom: '2rem' }}>
        Explore different grid layouts using <code>&lt;Grid /&gt;</code> components and responsive utilities.
      </Typography>

      <Grid container spacing={3}>
        {gridItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <LilBox label={item.label} icon={item.icon} href={item.href} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridmePage;