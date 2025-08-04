import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import './Blog.css';

const SleepTraining = () => {
  return (
    <div className="blog-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="breadcrumb">
        <Link to="/blog" className="breadcrumb-link">Blog</Link>
        <span className="breadcrumb-separator"> / </span>
        <span>Sleep Training with Dr. Ferber</span>
      </nav>

      {/* Botão Back (topo) */}
      <Link to="/blog" className="back-button" aria-label="Back para o blog">
        <IoArrowBack className="arrow-icon" />
        Back
      </Link>

      <article className="blog-article">
        <h1 className="blog-title">😴 Sleep Training with Dr. Ferber: Why It’s Not Cruel, Just Clever</h1>
        <p className="blog-author">By Purple Turtle Doula & Nanny Services</p>

        <p>Let’s talk about something most new parents dream about (literally): sleep. Or rather, the lack of it.</p>
        <p>You’ve swaddled, rocked, bounced, and whispered sweet lullabies in the dark at 3am… and yet, your little one is still wide awake, staring at you like it’s party time.</p>
        <p>Enter: The Ferber Method. Yes, it’s that thing you heard someone in your mom group whisper about — “Isn’t that the one where you let your baby cry?” Well… sort of. But also not exactly. Let’s break it down.</p>

        <hr />

        <h2>💡 What Is the Ferber Method?</h2>
        <p>
          Developed by Dr. Richard Ferber, this method teaches your baby to self-soothe and fall asleep independently using something called “graduated extinction.”<br />
          (Yes, it sounds like a dinosaur documentary, but hang with me.)
        </p>

        <p>Here’s how it works:</p>
        <ul>
          <li>You follow a consistent bedtime routine.</li>
          <li>You put baby down awake.</li>
          <li>You check in on them at gradually increasing intervals if they cry — without picking them up.</li>
        </ul>

        <p>So no, you’re not abandoning your baby. You’re teaching them to fall asleep without needing to be rocked, nursed, or bounced every single time. 🙃</p>

        <hr />

        <h2>🛏 The Real-Life Benefits (for Baby and You)</h2>
        <ul>
          <li>✅ Better Sleep for Everyone — Once your baby learns to fall asleep independently, you both sleep longer stretches. Sleep = sanity. It’s science.</li>
          <li>✅ Builds Confidence in Your Baby — Babies actually gain emotional confidence by learning that sleep is safe — and that they can handle it. You’re giving them a gift!</li>
          <li>✅ Predictable Bedtimes — No more mystery marathons. You’ll know when your baby is going to sleep (and when you can finally binge-watch something that isn’t animated).</li>
          <li>✅ It’s Backed by Research — Despite the myths, studies show that gentle versions of the Ferber Method are safe and effective — with no long-term emotional harm. (We love science!)</li>
        </ul>

        <hr />

        <h2>🍼 But… What About the Crying?</h2>
        <p>
          Look, no one likes hearing their baby cry. Your heart will do the cha-cha the first night. That’s normal.<br />
          But crying is your baby’s way of adjusting. With consistency, most families see big improvements in just 3–7 nights.
        </p>
        <p>And remember: You’re not ignoring your baby. You’re supporting them — with check-ins, love, and structure.</p>

        <hr />

        <h2>💬 Common Questions</h2>
        <p><strong>Q: What age can I start?</strong><br />
        A: Typically around 4–6 months, when babies are developmentally ready. Always check with your pediatrician.</p>

        <p><strong>Q: Can I still feed my baby at night?</strong><br />
        A: Yes! Many families continue 1–2 night feeds while sleep training. It’s not all or nothing.</p>

        <p><strong>Q: Is this cruel?</strong><br />
        A: No. Cruel is making a mom survive on 2 hours of sleep for 4 months straight.</p>

        <hr />

        <h2>🧸 Raquel’s Real Talk:</h2>
        <p>
          I’ve supported many families through Ferber-style sleep training — and I can tell you, it’s not just about sleep. It’s about giving parents their confidence back.<br />
          And watching your baby snooze peacefully on their own? Pure magic.
        </p>

        <p>
          Need help setting up a customized Ferber sleep plan? That’s what I’m here for.<br />
          Let’s make sleep sweet again — for both of you 💜
        </p>

        <hr />

        <h2>💤 Ready to Try Sleep Training with Support?</h2>
        <p><strong>📞 Contact Purple Turtle Doula & Nanny Services</strong><br />
        I’ll help you:</p>
        <ul>
          <li>Set the right sleep environment</li>
          <li>Choose the best timing</li>
          <li>Handle wake-ups</li>
          <li>Stick with it (because support makes all the difference)</li>
        </ul>
      </article>

      {/* Botão Back (final) */}
      <Link to="/blog" className="back-button bottom" aria-label="Back para o blog">
        <IoArrowBack className="arrow-icon" />
        Back
      </Link>
    </div>
  );
};

export default SleepTraining;
