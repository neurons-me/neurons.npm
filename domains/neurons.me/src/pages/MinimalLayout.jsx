// neurons.me/src/pages/MinimalLayout.jsx
import { MinimalLayout } from 'this.gui';

export default function MinimalLayoutWrapper({ topic = "Home", contextDrawer }) {
  return (
    <MinimalLayout
      topic={topic}
      rightContext={contextDrawer}
      config={{
        title: "neurons.me",
        logo: "https://neurons.me/neurons.me.png",
        topNavLinks: [
          { label: "Home", path: "/", external: false },
          {
            label: "About",
            children: [
              { label: "Who We Are", path: "/WhoWeAre", external: false },
              { label: "C0deBreakers", path: "/c0debreakers", external: false },
              { label: "Contact", path: "/contact", external: false }
            ]
          }
        ],
        sideBarLinks: {
          "About": [
            { label: "About", path: "/about", external: false },
            { label: "Who We Are?", path: "/WhoWeAre", external: false },
            { label: "C0deBreakers", path: "/c0debreakers", external: false },
            { label: "Contact", path: "/contact", external: false }
          ],
         "All.This": [
          {
            label: "What Is All.this?",
            path: "/All.This/",
            icon: () => <img src="/media/all-this/webp/all.this.webp" alt="all.this" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.me",
            path: "/this.me",
            icon: () => <img src="/media/all-this/webp/this.me.webp" alt="this.me" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.wallet",
            path: "/this.wallet",
            icon: () => <img src="/media/all-this/webp/this.wallet.webp" alt="this.wallet" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.GUI",
            path: "/this.GUI",
            icon: () => <img src="/media/all-this/webp/this.gui.webp" alt="this.GUI" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.env",
            path: "/this.env",
            icon: () => <img src="/media/all-this/webp/this.env.webp" alt="this.env" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.img",
            path: "/this.img",
            icon: () => <img src="/media/all-this/webp/this.img.webp" alt="this.img" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.audio",
            path: "/this.audio",
            icon: () => <img src="/media/all-this/webp/this.audio.webp" alt="this.audio" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.blockchain",
            path: "/this.blockchain",
            icon: () => <img src="/media/all-this/webp/this.blockchain.webp" alt="this.blockchain" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.pixel",
            path: "/this.pixel",
            icon: () => <img src="/media/all-this/webp/this.pixel.webp" alt="this.pixel" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.video",
            path: "/this.video",
            icon: () => <img src="/media/all-this/webp/this.video.webp" alt="this.video" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.DOM",
            path: "/this.DOM",
            icon: () => <img src="/media/all-this/webp/this.DOM.webp" alt="this.DOM" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.dictionaries",
            path: "/this.dictionaries",
            icon: () => <img src="/media/all-this/webp/this.dictionaries.webp" alt="this.dictionaries" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.text",
            path: "/this.text",
            icon: () => <img src="/media/all-this/webp/this.text.webp" alt="this.text" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.url",
            path: "/this.url",
            icon: () => <img src="/media/all-this/webp/this.url.webp" alt="this.url" style={{ width: 20, height: 20 }} />
          },
          {
            label: "this.dir",
            path: "/this.dir",
            icon: () => <img src="/media/all-this/webp/this.dir.webp" alt="this.dir" style={{ width: 20, height: 20 }} />
          }
        ],
          "Apps": [
            { label: "Netget", path: "https://netget.me", external: true },
            { label: "Cleaker", path: "https://cleaker.me", external: true }
          ],
          "ServiceHub": [
            { label: "ServiceHub", path: "/ServiceHub", external: false },
            { label: "Getting your Data Ready", path: "/business-data", external: false },
            { label: "AI Integration", path: "/ai-for-your-business", external: false },
            { label: "System Development", path: "/business-system-development", external: false },
            { label: "Cyber Security", path: "/business-cyber-security", external: false },
            { label: "Marketing Solutions", path: "/business-marketing", external: false },
            { label: "Branding", path: "/business-branding", external: false }
            ],"Docs": [
            { label: "Ecosystem", path: "/open-source/ecosystem", external: false },
            { label: "Roadmap", path: "/open-source/roadmap", external: false },
            { label: "How to Contribute", path: "/open-source/contributing", external: false },
            { label: "Me Protocol RFC", path: "/me-protocol-rfc", external: false },
            { label: "Whitepaper", path: "/me-protocol-whitepaper", external: false }
          ],
        }
      }}
    />
  );
}
