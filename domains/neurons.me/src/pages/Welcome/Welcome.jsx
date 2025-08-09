import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Import Link for routing
import { Box, Button, Card, CardContent, CardMedia, Typography, CardActions } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MemoryIcon from '@mui/icons-material/Memory';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BrushIcon from '@mui/icons-material/Brush';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import './css/styles.css'; // Your existing CSS
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
//import IconFooter from '../../components/Footer/IconFooter'; // Import the IconFooter component
const Welcome = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = '/monad.js';
        document.body.appendChild(script);
    }, []);

    const { t } = useTranslation();

    // Scroll to the first section in content-wrapper on button click, with smooth effect and center alignment
    const scrollToContent = () => {
        const section = document.querySelector('.content-wrapper section');
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };

    return (
        <div className="welcome-page">
          <Box
            sx={{
              position: 'fixed',
              top: '1rem',
              right: '1rem',
              zIndex: 10,
              width: 'fit-content',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              padding: '6px 12px',
              display: 'flex',
              gap: '1rem',
            }}
          >
            <Link
              to="/All.This"
              style={{
                color: '#fff',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                marginLeft: '20px'
              }}
            >
              All.This
            </Link>
            <Link
              to="/ServiceHub"
              style={{
                color: '#fff',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                marginLeft: '20px'
              }}
            >
              Service Hub
            </Link>
            <Link
              to="/blog"
              style={{
                color: '#fff',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                marginLeft: '20px'
              }}
            >
              Blog
            </Link>
                <Link
              to="/about"
              style={{
                color: '#fff',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                marginLeft: '20px'
              }}
            >
              About
            </Link>
          </Box>
            {/* Hero Content */}
            <div className="hero-content">
                {/* Background Video */}
                <div className="video-background">
                    <video autoPlay loop muted playsInline>
                        <source src="/media/neurons.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                {/* Overlay */}
                <div className="overlay"></div>
                {/* Modal Content */}
                <div className="modal">
                    <img src="/media/neurons-grey.webp" alt="neurons" width="89" />
                    <h2 style={{ color: '#000' }}><strong>{t('hero.title')}</strong></h2>
                    <p style={{ color: '#000' }}>{t('hero.subtitle')}</p>
                    <div className="buttons">
                        <button className="btn" onClick={scrollToContent}>{t('hero.explore')}</button>
                    </div>
                </div>
            </div>
            <div style={{ height: '21vh' }}></div>

            {/* Content Wrapper */}
            <div className="content-wrapper">
                <section id="ecosystem" className="welcome-section first align-left">
                  <div
                    className="ecosystem-content"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '2rem'
                    }}
                  >
                    <div className="ecosystem-text" style={{ flex: 1, maxWidth: '777px', }}>
                      <h3>{t('ecosystem.title')}</h3>
                      <p>{t('ecosystem.paragraph')}</p>
                      <div style={{ marginTop: '1.5rem' }}>
                        <Button
                          component={Link}
                          to="/getting-started"
                          variant="outlined"
                          sx={{
                            marginRight: '12px',
                            marginTop: '12px',
                            marginBottom: '12px',
                            textTransform: 'none',
                            color: 'rgb(0, 170, 150)',
                          }}
                        >
                          {t('cta.gettingStarted')}
                        </Button>
                        <Button
                          component={Link}
                          to="/what-is-all-this"
                          variant="outlined"
                          sx={{
                            marginRight: '12px',
                            marginTop: '12px',
                            marginBottom: '12px',
                            textTransform: 'none',
                            color: 'rgb(0, 170, 150)',
                          }}
                        >
                          {t('cta.whatIsAllThis')}
                        </Button>
                        <Button
                          component={Link}
                          to="/docs"
                          variant="outlined"
                          sx={{
                            marginRight: '12px',
                            marginTop: '12px',
                            marginBottom: '12px',
                            textTransform: 'none',
                            color: 'rgb(0, 170, 150)',
                          }}
                        >
                          {t('cta.docs')}
                        </Button>
                      </div>
                    </div>
                    <div className="ecosystem-image" style={{ flexShrink: 0, marginRight: '3.5rem' }}>
                      <img
                        src="/media/neurons-me.webp"
                        alt="neurons"
                        style={{ width: '144px', height: 'auto' }}
                      />
                    </div>
                  </div>
                </section>
         

              <section id="services" className="welcome-section second">
                <h3>{t('services.title')}</h3>
                <p>{t('services.description1')}</p>
                <p>{t('services.description2')}</p>
              {/* Mac-style Dock Layout Mockup */}
    <div
      className="mac-dock"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: '2rem',
        gap: '1.5rem',
        padding: '1rem'
      }}
    >
      {[
        { src: '/media/cleaker-logo.webp', alt: 'Cleaker', name: 'Cleaker', width: '94px' },
        { src: '/media/netget.webp', alt: 'NetGet', name: 'NetGet', width: '89px' },
        { src: '/media/CopyTo.webp', alt: 'CopyTo(0-9)', name: 'CopyTo(0-9)', width: '69px' },
        { src: '/media/neurons-grey.webp', alt: 'More Apps', name: 'More Apps', width: '63px' }
      ].map((app, index) => (
        <div key={index} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img src={app.src} alt={app.alt} style={{ width: app.width }} />
          <p style={{ marginTop: '0.5rem', color: '#fff', fontSize: '0.85rem' }}>{app.name}</p>
        </div>
      ))}
    </div>
                </section>

                <section id="apps" className="welcome-section third align-right">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1rem',
                        marginTop: '0.1rem',
                        width: '50%',
                        flexShrink: 0
                      }}
                    >
                      {[
                        { label: 'IA', icon: <MemoryIcon /> },
                        { label: 'Web Dev', icon: <CodeIcon /> },
                        { label: 'G Suite', icon: <CloudIcon /> },
                        { label: 'Media', icon: <VideoLibraryIcon /> },
                        { label: 'FullStack', icon: <DeveloperModeIcon /> },
                        { label: 'ChatBots', icon: <SmartToyIcon /> },
                        { label: 'SEO', icon: <TrendingUpIcon /> },
                        { label: 'Design', icon: <BrushIcon /> },
                        { label: 'Blockchain', icon: <CurrencyBitcoinIcon /> }
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="grid-item"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            height: '100px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ccc',
                            fontSize: '1rem',
                            fontWeight: '300'
                          }}
                        >
                          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                          {item.label}
                        </div>
                      ))}
                    </div>
                    <div style={{ flex: 1 }}>
                    <h3>{t('serviceHub.title')}</h3>
                      <p>{t('serviceHub.line1')}</p>
                      <p>{t('serviceHub.line2')}</p>
                      <p>{t('serviceHub.line3')}</p>
                      <p>{t('serviceHub.line4')}</p>
                    <Button
                          component={Link}
                          to="/what-is-all-this"
                          variant="outlined"
                          startIcon={<CalendarTodayIcon />}
                          sx={{
                            marginRight: '12px',
                            marginTop: '12px',
                            marginBottom: '12px',
                            textTransform: 'none',
                            color: 'rgb(0, 170, 150)',
                          }}
                        >
                        {t('serviceHub.scheduleCall')}
                        </Button>
                    <Button
                          component={Link}
                          to="/what-is-all-this"
                          variant="outlined"
                          startIcon={<ChatBubbleOutlineIcon />}
                          sx={{
                            marginRight: '12px',
                            marginTop: '12px',
                            marginBottom: '12px',
                            textTransform: 'none',
                            color: 'rgb(0, 170, 150)',
                          }}
                        >
                          Chat.
                        </Button>
                    </div>
                  </div>
                </section>

                <section id="blog" className="welcome-section fourth">
                  <h3>{t('blog.title')}</h3>
                  <p>{t('blog.description1')}</p>
                  <p>{t('blog.description2')}</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    {[
                      {
                        title: 'What is End-to-End Deep Learning?',
                        image: '/media/neurons-me-blog.webp',
                        summary: 'The model learns the features automatically from raw data.',
                        link: 'https://medium.com/@neurons.me/what-is-end-to-end-deep-learning-98f43cfe35eb'                      },
                      {
                        title: 'The Monad && The Lisa.',
                        image: '/media/MonadLisa.webp',
                        summary: 'Each monad, by the virtue of its perceptions, affirms its existence.',
                        link: 'https://medium.com/@suign/the-monad-and-the-lisa-b23f2f1bab93'                      },
                      {
                        title: 'Why Reshape?',
                        image: '/media/PixelGrid.webp',
                        summary: 'It simplifies the process of passing data through the layers of a neural network.',
                        link: 'https://medium.com/@suign/why-reshape-1d6fcd5b62b3'
                      }
                      
                    ].map((post, index) => (
                      <Card key={index} sx={{ width: 280, backgroundColor: '#1e1e1e', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={post.image}
                          alt={post.title}
                          sx={{ width: '100%', objectFit: 'cover' }}
                        />
                        <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                          <Typography gutterBottom variant="h6" component="div" sx={{ color: '#fff' }}>
                            {post.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                            {post.summary}
                          </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center', width: '100%' }}>
                          <Button size="small" sx={{ color: 'rgb(0,170,150)' }}>Read</Button>
                        </CardActions>
                      </Card>
                    ))}
                  </div>
                </section>

                <monad-ai></monad-ai>
                <Box
                  component="footer"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 40px',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    backgroundColor: 'rgb(18, 18, 20)'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'right',
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
                      <InstagramIcon
                        sx={{
                          fontSize: 24,
                          color: '#E4405F',
                          cursor: 'pointer',
                          '&:hover': { opacity: 0.8 },
                        }}
                        onClick={() => window.open('https://instagram.com/neurons.me', '_blank')}
                      />
                      <GitHubIcon
                        sx={{
                          fontSize: 24,
                          color: '#fff',
                          cursor: 'pointer',
                          '&:hover': { opacity: 0.8 },
                        }}
                        onClick={() => window.open('https://github.com/neurons-me', '_blank')}
                      />
                      <a
                        href="https://facebook.com/neurons.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff', fontSize: 24 }}
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href="https://linkedin.com/company/neurons-me"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff', fontSize: 24 }}
                      >
                        <FaLinkedinIn />
                      </a>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        color: '#fff',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 700,
                        fontSize: '16px',
                        marginBottom: '10px',
                      }}
                    >
                      neurons.me
                    </Typography>

                   <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'center' }}>
                     <Link
                       href="/terms-and-conditions"
                       underline="none"
                       sx={{
                         color: '#ccc',
                         fontSize: '14px',
                         fontWeight: 500,
                         '&:hover': { textDecoration: 'underline' },
                       }}
                     >
                       {t('footer.terms')}
                     </Link>
                     <Link
                       href="/privacy-policy"
                       underline="none"
                       sx={{
                         color: '#ccc',
                         fontSize: '14px',
                         fontWeight: 500,
                         '&:hover': { textDecoration: 'underline' },
                       }}
                     >
                       {t('footer.privacy')}
                     </Link>
                   </Box>
                  </Box>

                  <Box sx={{ marginLeft: '20px' }}>
                    <img
                      src="/neurons.me.png"
                      alt="neurons.me logo"
                      style={{ width: '50px', height: '50px' }}
                    />
                  </Box>
                </Box>
            </div>
        </div>
    );
};

export default Welcome;