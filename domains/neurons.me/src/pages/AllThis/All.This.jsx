import { Grid } from "@mui/material";
import { Link } from 'react-router-dom'
import { ModuleCard, CodeBlock } from "this.gui";
import { Quote } from "this.gui";
import { FaGithub, FaFacebookF } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';
import { Callout } from 'this.gui';
export default function AllThis() {
  return (
    <div style={{ padding: '1.168rem', margin: '0 auto' }}>
      <Callout type="warning" sx={{ mb: '1.5rem', textAlign: 'center' }}>
        This repository is in continuous development and may be unstable.
      </Callout>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img
            src="/media/all-this/webp/all.this.webp"
            alt="Neurons Logo"
            style={{ width: '300px', height: 'auto', filter: 'var(--image-filter)' }}
          />
      </div>
      <h1 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' }}>
        All.This Library
      </h1>
      <Quote>
        A modular system to make data usable and intelligent by design.
      </Quote>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '2rem' }}>
        <a href="https://github.com/neurons-me/all.this" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
          <FaGithub />
        </a>
        <a href="https://www.npmjs.com/package/all.this" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
          <SiNpm />
        </a>
        <a href="https://www.facebook.com/all.this.stuff" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
          <FaFacebookF />
        </a>
      </div>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          What is all.this? 
        </h2>
        <p>
          <code>all.this</code> is a collection of libraries designed to handle various types of data — from audio and images to text and blockchain interactions. It's the foundation for preparing and normalizing input for machine learning and AI applications.
        </p>
      <CodeBlock language="bash">
        npm install all.this
      </CodeBlock>
      </section>
      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Explore Submodules
        </h2>
        <Grid container spacing={2}>
          {[
            {
              title: "this.me",
              description: "Identity management simplified.",
              link: "/this.me",
              image: "/media/all-this/webp/this.me.webp",
            },
            {
              title: "this.wallet",
              description: "Secure wallet integration.",
              link: "/this.wallet",
              image: "/media/all-this/webp/this.wallet.webp",
            },
            {
              title: "this.img",
              description: "Image processing made easy.",
              link: "/this.img",
              image: "/media/all-this/webp/this.img.webp",
            },
            {
              title: "this.audio",
              description: "Audio manipulation tools.",
              link: "/this.audio",
              image: "/media/all-this/webp/this.audio.webp",
            },
            {
              title: "this.blockchain",
              description: "Blockchains on the Go!",
              link: "/this.blockchain",
              image: "/media/all-this/webp/this.blockchain.webp",
            },
            {
              title: "this.pixel",
              description: "Pixel-level control utilities.",
              link: "/this.pixel",
              image: "/media/all-this/webp/this.pixel.webp",
            },
            {
              title: "this.video",
              description: "Video editing and streaming.",
              link: "/this.video",
              image: "/media/all-this/webp/this.video.webp",
            },
            {
              title: "this.DOM",
              description: "DOM manipulation helpers.",
              link: "/this.DOM",
              image: "/media/all-this/webp/this.DOM.webp",
            },
            {
              title: "this.dictionaries",
              description: "Dictionary utilities.",
              link: "/this.dictionaries",
              image: "/media/all-this/webp/this.dictionaries.webp",
            },
            {
              title: "this.env",
              description: "Environment management tools.",
              link: "/this.env",
              image: "/media/all-this/webp/this.env.webp",
            },
            {
              title: "this.GUI",
              description: "Custom GUI components.",
              link: "/this.GUI",
              image: "/media/all-this/webp/this.gui.webp",
            },
            {
              title: "this.text",
              description: "Text parsing and manipulation.",
              link: "/this.text",
              image: "/media/all-this/webp/this.text.webp",
            },
            {
              title: "this.file",
              description: "File handling made simple.",
              link: "/this.file",
              image: "/media/all-this/webp/this.file.webp",
            },
            {
              title: "this.url",
              description: "URL utilities and helpers.",
              link: "/this.url",
              image: "/media/all-this/webp/this.url.webp",
            },
            {
              title: "this.dir",
              description: "Directory management tools.",
              link: "/this.dir",
              image: "/media/all-this/webp/this.dir.webp",
            },
          ].map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <ModuleCard
                title={item.title}
                description={item.description}
                link={item.link}
                image={item.image}
              />
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  )
}