import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AaryaIntro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Hello, Everyone! <span className="emoji">🌟</span></h1>
        <p>I'm <span className="highlight">Aarya R</span>, Head of Web Development at ISTE Manipal!</p>
        <p>I’m here not only to guide the development of our primary platform, the ISTE website, but also to mentor and support everyone in the web development domain. Whether it's working on exciting projects, exploring new technologies, or sharing insights on best practices, I'm committed to helping you grow as developers. I’m always eager to discuss innovative ideas, startups, and anything that pushes the boundaries of what we can achieve together in tech.</p>
        <p>I'm a 3rd-year CSE student at MIT, so feel free to reach out if you have any general questions or need help with anything CSE-related.</p>
        <p className="emoji">Looking forward to an incredible journey with all of you! Let’s make some magic happen! 🚀</p>
      </div>
    </div>
  )
}
