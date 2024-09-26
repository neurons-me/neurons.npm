

<img src="https://suign.github.io/assets/imgs/cleakerme.png" alt="Cleaker Me" width="377" height="377">

# CLEAKER
##### cleaked (connected and recognized).
### [Project Status : Experimental and Under Development, Subject to Major Changes]
**Visit:** https://neurons.me to learn more.

# README
**Cleaker** is a pronoun representing a [person](https://suign.github.io/this.me/), place, or thing in space and time and serves connecting all points **within a fixed distance.** 
Its role is to function as a **Digital Identifier (DID)** **Creator**;  making **cleaker** accept an object (like a **.me** profile) and **return a unique DID for it.**

## Install with npm.
```bash
npm i cleaker
```

# Usage Example
Currently under development.
```javascript
import { cleaker } from 'cleaker';
const me = { /*  profile data */ };
const ID = { /*  Network Identity Provider */ };
// Generate a DID
cleaker(me, ID); 

```

By implementing both `SHA-256` and `Keccak-256`, `cleaker` becomes a versatile tool for creating DIDs that are compatible with major blockchain networks. This approach allows for the integration of **cleaker** with a variety of blockchain technologies and potentially opens up various use cases in the **blockchain domain.**

# Getting Cleaked.

##### usrme.cleaker.me

The server acts as a **channel** for these functionalities over the network.

**Subdomains** are a way to create a **unique URL** for each user. This is done by creating a **wildcard DNS record that points all subdomains to the same server.** Our server (https://cleaker.me) then parses the subdomain and uses it to identify the user. Any server can be setup.

 **This is done by using the request object in the server, to get the subdomain and then using it to query the database for the user.** 

* **If the user exists,** the server will then route the request to the user's profile page.
*  **If the user does not exist,** the server will route the request to the homepage.

----------
# About All.This

## Modular Data Structures:
**[this.me](https://suign.github.io/this.me)  - [this.audio](https://suign.github.io/this.audio) - [this.text](https://suign.github.io/this.text) - [this.wallet](https://suign.github.io/this.wallet) - [this.img](https://suign.github.io/this.img) - [this.pixel](https://suign.github.io/Pixels) - [be.this](https://suign.github.io/be.this) - [this.DOM](https://suign.github.io/this.DOM) - [this.env](https://suign.github.io/this.env/) - [this.GUI](https://suign.github.io/this.GUI) - [this.be](https://suign.github.io/this.be) - [this.video](https://suign.github.io/this.video) - [this.atom](https://suign.github.io/this.atom) - [this.dictionaries](https://suign.github.io/this.dictionaries/)**
**Each module** in **[all.this](https://neurons.me/all-this)** represents a specific **datastructure**. These classes encapsulate the functionalities and **data specific to their domain.**

## **Utils**
**[all.this](https://neurons.me/all-this)** not only aggregates these modules but also provides utilities to facilitate the integration, management, and enhancement of these data structures. **For example:**
*The integration with [cleaker](https://suign.github.io/cleaker/) ensures each module instance has a **unique cryptographic identity**, enhancing security and data integrity.*

### Neurons.me Ecosystem Glossary:
visit: [Neurons.me Glossary](https://suign.github.io/neurons.me/Glossary) 
## License & Policies
- **License**: MIT License (see LICENSE for details).
- **Privacy Policy**: Respects user privacy; no collection/storage of personal data.
- **Terms of Usage**: Use responsibly. No guarantees/warranties provided. [Terms](https://www.neurons.me/terms-of-use) | [Privacy](https://www.neurons.me/privacy-policy)
  **Learn more** at https://neurons.me
  **Author:** SuiGn
  [By neurons.me](https://neurons.me)
  <img src="https://suign.github.io/neurons.me/neurons_logo.png" alt="neurons.me logo" width="123" height="123" style="width123px; height:123px;">
