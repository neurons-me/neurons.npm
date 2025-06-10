import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { FaGithub, FaNpm } from 'react-icons/fa'

export default function ThisMePage() {
  const theme = useTheme()
  const codeBlockStyle = {
    backgroundColor: theme.palette.mode === 'dark' ? '#111' : '#f5f5f5',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '6px',
    padding: '12px',
    fontFamily: 'monospace',
    fontSize: '0.95rem',
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  }
  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 16px',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '6px',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  }
  return (
    <Box sx={{ padding: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Box
          component="img"
          src="/media/all-this/this.me.png"
          alt="this.me"
          sx={{ maxWidth: '277px', marginBottom: 2 }}
        />

        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          this.me
        </Typography>
        <Typography variant="subtitle2" sx={{ fontStyle: 'italic', color: 'text.secondary', marginBottom: '1rem' }}>
          "When a user declares &quot;I am .me,&quot; their digital existence is affirmed and recorded in the system."
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 4 }}>
          <a href="https://github.com/neurons-me/this.me" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
            <FaGithub style={{ marginRight: '8px' }} />
            GitHub Repository
          </a>
          <a href="https://www.npmjs.com/package/this.me" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
            <FaNpm style={{ marginRight: '8px' }} />
            npm Module
          </a>
        </Box>

        <Box sx={{ textAlign: 'left', display: 'inline-block', marginBottom: '2rem' }}>
          <Typography variant="body2" sx={{ fontWeight: 600, marginBottom: '4px' }}>
            Install npm package globally:
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: '8px' }}>
            It must be installed globally because <code>this.me</code> runs on localhost to store and hash identities securely in your local environment.
          </Typography>
          <Box sx={codeBlockStyle}>npm i -g this.me</Box>

          <Typography variant="body2" sx={{ fontWeight: 600, marginTop: '16px', marginBottom: '4px' }}>
            Run in your terminal:
          </Typography>
          <Box sx={codeBlockStyle}>me</Box>
        </Box>
        <h1 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' }}>
          I am .Me
        </h1>
        <blockquote style={{ fontStyle: 'italic', marginBottom: '2rem', color: '#555' }}>
          .me is the subject. It’s the one who says “I”. It is the private key, the biography, the will.
          <br />
          .me is local, silent, static. It doesn’t “live” or listen. It is only queried — and it affirms.
        </blockquote>
      </Box>

      <Box sx={{ textAlign: 'left' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' }}>
          The Problem: Decentralized Yet Trustworthy
        </h1>
        <p style={{ marginBottom: '1.5rem' }}>
          Identity, by its nature, is both <strong>personal</strong> and <strong>relational</strong>. On the one hand, we want the <strong>freedom to define ourselves</strong> without <strong>external constraints</strong>.<br />
          On the other, our identities must often be <strong>validated by trusted authorities</strong> to engage in <strong>meaningful transactions</strong>, whether signing a digital contract or interacting with a service.
        </p>
        <p style={{ marginBottom: '1.5rem'}}>
          How can we create an identity system that respects <strong>personal sovereignty</strong> while ensuring <strong>trust</strong> and <strong>usability</strong> in a <strong>networked world</strong>?
        </p>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.6rem', marginBottom: '1rem' }}>
          Enter This.Me:
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          This.Me offers a framework for identity creation and interaction that revolves around two core principles:
        </p>
        <ol style={{ marginLeft: '1.2rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Freedom to Declare:</strong> Anyone can create a <code>.me</code> instance and define their identity without external permissions. This identity exists as a standalone object, enabling users to interact in a purely self-declared state.
          </li>
          <li>
            <strong>Trust Anchors:</strong> When needed, central authorities or networks, such as Cleaker, can validate the identity. These authorities provide the infrastructure for authentication, signing, and verification without compromising the user’s control over their identity.
          </li>
        </ol>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            Cryptographic &amp; Security Model
          </h2>
          <p>
            The identity is unlocked using a user-defined hash. This hash decrypts the local <strong>.me</strong> file and allows the identity to act with a secure key pair. Endorsements are optional but verifiable via public keys.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            File Structure
          </h2>
          <ul>
            <li><code>~/.this/me/username.me.json</code> — Encrypted identity file</li>
            <li>Contains username, keys, attributes, endorsements</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            Use Cases
          </h2>
          <ul>
            <li>Document signing</li>
            <li>Smart contract identity</li>
            <li>Decentralized trust systems</li>
            <li>Federated profiles</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            Glossary
          </h2>
          <ul>
            <li><strong>hash</strong>: password used to unlock the identity</li>
            <li><strong>endorsement</strong>: signature from trusted authority</li>
            <li><strong>Cleaker</strong>: sample public authority ledger</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>1. The Me Structure Overview</h2>

          <h3 style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Core Components</h3>

          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '1rem' }}>Identity</h4>
          <p>
            The foundation of the <code>this.me</code> object.<br />
            Immutable attributes: <code>username</code>, <code>DID</code>.<br />
            Core methods for validation and setup.
          </p>

          <hr />

          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '1rem' }}>Attributes</h4>
          <p>
            Store and manage user traits dynamically:
            <br />
            Examples: name, age, location, pronouns, bio.
            <br />
            <strong>Use <code>.be()</code> to add or update attributes.</strong>
          </p>
          <div style={codeBlockStyle}>
            <pre>{`{ name: 'John Doe', age: 30, location: 'Earth' }`}</pre>
          </div>
          <p>Implement <code>be()</code> as a flexible key-value store.</p>

          <hr />

          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '1rem' }}>Relationships</h4>
          <p>
            Connections with others:
            <br />
            <strong>Contacts</strong>: Individual connections.
            <br />
            <strong>Groups</strong>: Collections of users with shared context.
          </p>
          <div style={codeBlockStyle}>
            <pre>{`.relationships.addContact({ username: 'alice', status: 'friend' });
.relationships.createGroup({ name: 'Family', members: ['alice', 'bob'] });`}</pre>
          </div>
          <p>Define <code>addContact</code> and <code>createGroup</code> methods with support for nested groups.</p>

          <hr />

          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '1rem' }}>Reactions</h4>
          <p>
            Streamline all user engagements under <code>.react()</code>:
            <br />
            Examples: likes, comments, shares, emotions.
          </p>
          <div style={codeBlockStyle}>
            <pre>{`.react.add({ type: 'like', target: 'PostID' });
.react.add({ type: 'comment', target: 'PhotoID', content: 'Great pic!' });`}</pre>
          </div>
          <p>
            Design a structure to log, store and retrieve reactions efficiently.
          </p>

          <hr />

          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '1rem' }}>Properties</h4>
          <p>
            Attach external, modular objects as user-owned assets:
            <br />
            Use <code>this.me.properties</code> as a unified interface.
            <br />
            Examples: wallets, devices, digital files, accounts.
          </p>
          <div style={codeBlockStyle}>
            <pre>{`const jabellae = new Me('jabellae');
const wallet = new Wallet({ type: 'ETH', address: '0x123...' });
jabellae.addProperty(wallet);`}</pre>
          </div>

          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '1rem' }}>Sharing the Wallet</h4>
          <div style={codeBlockStyle}>
            <pre>{`jabellae.shareProperty(wallet, 'otherMe', { permissions: 'view' });`}</pre>
          </div>

          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '1rem' }}>Transferring Ownership</h4>
          <div style={codeBlockStyle}>
            <pre>{`jabellae.transferOwnership(wallet, 'otherMe');`}</pre>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>2. Why Independent Objects?</h2>

          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '1rem' }}>Modularity</h4>
          <p>
            Keeps the <code>this.me</code> instance agnostic of specifics.<br />
            Allows new property types to integrate seamlessly.
          </p>

          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '1rem' }}>Reusability</h4>
          <p>
            Each property (e.g., <code>this.wallet</code>, <code>this.device</code>) operates independently and can be ported.
          </p>

          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '1rem' }}>Transferability</h4>
          <div style={codeBlockStyle}>
            <pre>{`const wallet = new Wallet(owner = "me");
wallet.transferOwnership("otherMeInstance");`}</pre>
          </div>

          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '1rem' }}>Separation of Concerns</h4>
          <p>
            Identity (<code>this.me</code>) handles high-level interactions.<br />
            Properties like <code>Wallet</code> or <code>Device</code> manage specific behavior.
          </p>

          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '1rem' }}>Scalability</h4>
          <p>
            Add new types by defining objects and registering them with <code>this.me</code>.
          </p>
        </section>

        <p style={{ fontSize: '0.9rem', color: '#777' }}>
          Author: suiGn / neurons.me<br />
          License: MIT — <a href="https://www.npmjs.com/package/this.me">this.me</a>
        </p>
      </Box>
    </Box>
  )
}