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

      <div class="">
        <h1>Hello, Everyone! <span class="emoji">🌟</span></h1>
        <p>I'm <span class="highlight">Aarya R</span>, Head of Web Development at ISTE Manipal!</p>
        <p>I’m here to guide the development of our primary platform, the ISTE website, and to work with all of you on exciting projects that push boundaries. I'm always eager to discuss new project ideas, startups, or anything innovative in tech.</p>
        <p>I'm a 3rd-year CSE student at MIT, so feel free to reach out if you have any general questions or need help with anything CSE-related.</p>
        <p class="emoji">Looking forward to an incredible journey with all of you! Let’s make some magic happen! 🚀</p>
      </div>
    </div>
  )
}
