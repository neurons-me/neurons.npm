import React from "react";
import { Box, Grid, Typography, Card, CardActionArea, CardContent } from "@mui/material";

// Define menu items with images and explicit links
const menuItems = [
  {
    title: "this.me",
    description: "Identity management simplified.",
    link: "/this-me",
    image: "/media/all-this/this.me.png", // Replace with actual image paths
  },
  {
    title: "this.wallet",
    description: "Secure wallet integration.",
    link: "/this-wallet",
    image: "/media/all-this/this.wallet.png",
  },
  {
    title: "this.img",
    description: "Image processing made easy.",
    link: "/this-img",
    image: "/media/all-this/this.img.png",
  },
  {
    title: "this.audio",
    description: "Audio manipulation tools.",
    link: "/this-audio",
    image: "/media/all-this/this.audio.png",
  },
  {
    title: "this.blockchain",
    description: "Blockchains on the Go!",
    link: "/this.blockchains",
    image: "/media/all-this/this.audio.png",
  },
  {
    title: "this.pixel",
    description: "Pixel-level control utilities.",
    link: "/this-pixel",
    image: "/media/all-this/this.pixel.png",
  },
  {
    title: "this.video",
    description: "Video editing and streaming.",
    link: "/this-video",
    image: "/media/all-this/this.video.png",
  },
  {
    title: "this.DOM",
    description: "DOM manipulation helpers.",
    link: "/this-dom",
    image: "/media/all-this/this.DOM.png",
  },
  {
    title: "this.dictionaries",
    description: "Dictionary utilities.",
    link: "/this-dictionaries",
    image: "/media/all-this/this.dictionaries.png",
  },
  {
    title: "this.env",
    description: "Environment management tools.",
    link: "/this-env",
    image: "/media/all-this/this.env.png",
  },
  {
    title: "this.GUI",
    description: "Custom GUI components.",
    link: "/this-gui",
    image: "/media/all-this/this.gui.png",
  },
  {
    title: "this.text",
    description: "Text parsing and manipulation.",
    link: "/this-text",
    image: "/media/all-this/this.text.png",
  },
  {
    title: "this.file",
    description: "File handling made simple.",
    link: "/this-file",
    image: "/media/all-this/this.file.png",
  },
  {
    title: "this.url",
    description: "URL utilities and helpers.",
    link: "/this-url",
    image: "/media/all-this/this.url.png",
  },
  {
    title: "this.dir",
    description: "Directory management tools.",
    link: "/this-dir",
    image: "/media/all-this/this.dir.png",
  },
];

const AllThisOptions = () => {
  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: 2,
      }}
    >
      {/* Compact Grid of Items */}
      <Grid container spacing={2}>
        {menuItems.map((item, index) => (
          <Grid
            item
            xs={6} // 2 per row on small screens
            sm={4} // 3 per row on medium screens
            md={3} // 4 per row on large screens
            key={index}
          >
            <Card
              sx={{
                height: "100%",
                backgroundColor: "background.paper",
                boxShadow: 2,
                borderRadius: 2,
                "&:hover": {
                  boxShadow: 4,
                  transform: "translateY(-2px)",
                  transition: "0.3s ease-in-out",
                },
              }}
            >
              {/* Link */}
              <CardActionArea href={item.link}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: 2,
                  }}
                >
                  {/* Image */}
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "80px",
                      height: "80px",
                      marginBottom: 1,
                      objectFit: "contain",
                    }}
                  />

                  {/* Title */}
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      marginBottom: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.85rem",
                      color: "text.secondary",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllThisOptions;
