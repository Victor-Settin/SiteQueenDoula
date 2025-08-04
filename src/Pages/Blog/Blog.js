import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <section className="blog-article">
        <h1 className="blog-title">🍼 The Ultimate Baby Registry Guide: What You Actually Need for the First 3 Months</h1>
        <p className="blog-author">By Purple Turtle Doula & Nanny Services</p>
        <p>Preparing for your baby’s arrival is such a joyful (and let’s be honest, overwhelming) experience. One of the most helpful steps? Creating a thoughtful baby registry. But with so many options out there, how do you know what’s truly essential — especially in the first three months?</p>
        <p>This guide breaks it down by category and price range — from budget-friendly to luxury — so you can build a registry that actually works for your family.</p>

        <h2>👕 CLOTHING</h2>
        <p><strong>How Much?</strong> 10–15 outfits total (mix of onesies, footed pajamas, leggings, hats, and socks)</p>
        <p><strong>Suggested Brands:</strong></p>
        <ul>
          <li><strong>Budget:</strong> Gerber, Garanimals (Walmart)</li>
          <li><strong>Affordable:</strong> Carter’s, Cloud Island (Target)</li>
          <li><strong>Luxury:</strong> Kyte Baby, Magnetic Me</li>
        </ul>

        <h2>🧷 DIAPERS & WIPES</h2>
        <p><strong>How Much?</strong> 600 diapers and 300 packs of wipes for the first 3 months</p>
        <ul>
          <li><strong>Budget:</strong> Parent’s Choice (Walmart), Kirkland Signature (Costco)</li>
          <li><strong>Affordable:</strong> Huggies, Pampers</li>
          <li><strong>Luxury:</strong> Coterie, Honest Co.</li>
        </ul>

        <h2>🛏 SLEEP ESSENTIALS</h2>
        <p><strong>How Much?</strong> 1 crib or bassinet, 1 firm mattress, 2–3 fitted sheets, 3–4 swaddles or sleep sacks</p>
        <ul>
          <li><strong>Budget:</strong> Dream On Me, Delta Children</li>
          <li><strong>Affordable:</strong> Graco, Newton Baby</li>
          <li><strong>Luxury:</strong> SNOO by Happiest Baby, Babyletto</li>
        </ul>

        <h2>🍼 FEEDING GEAR</h2>
        <p><strong>How Much?</strong> 4–6 bottles, 8 burp cloths, 1 nursing pillow, 1 breast pump (if nursing)</p>
        <ul>
          <li><strong>Budget:</strong> Evenflo, NUK</li>
          <li><strong>Affordable:</strong> Dr. Brown’s, Lansinoh</li>
          <li><strong>Luxury:</strong> Comotomo, Elvie</li>
        </ul>

        <h2>🚗 ON-THE-GO ESSENTIALS</h2>
        <p><strong>How Much?</strong> 1 infant car seat, 1 stroller, 1 diaper bag</p>
        <ul>
          <li><strong>Budget:</strong> Safety 1st, Baby Trend</li>
          <li><strong>Affordable:</strong> Graco, Chicco</li>
          <li><strong>Luxury:</strong> UPPAbaby, Doona, Nuna</li>
        </ul>

        <h2>🔧 HEALTH & EXTRAS</h2>
        <p><strong>How Much?</strong> 1 baby monitor, 1 digital thermometer, 2 hooded towels, 4 washcloths, 1 grooming kit</p>
        <ul>
          <li><strong>Budget:</strong> Safety 1st, Summer Infant</li>
          <li><strong>Affordable:</strong> VTech, Frida Baby</li>
          <li><strong>Luxury:</strong> Nanit, Owlet, Hatch</li>
        </ul>

        <p className="doula-tip"><strong>💬 Doula Tip:</strong> Don’t stress about having everything before baby arrives. Focus on the essentials that bring comfort and peace of mind in the early weeks. You can always add more later as your baby grows.</p>

      </section>

      <section className="blog-article">
        <h1 className="blog-title">🍽️ Introducing Foods & Preventing Allergies in Babies: What Parents Need to Know</h1>
        <p className="blog-author">By Purple Turtle Doula & Nanny Services</p>

        <p>Starting solids is an exciting (and slightly nerve-wracking) milestone for many parents. It’s not just about what to serve — it’s also about how and when to safely introduce new foods, especially the ones that commonly cause allergies.</p>

        <h2>🍼 When Can I Start Feeding My Baby Solids?</h2>
        <p>Most babies are ready around 6 months. Always talk to your pediatrician.</p>
        <p><strong>Signs baby might be ready:</strong></p>
        <ul>
          <li>Can sit up with little or no support</li>
          <li>Has good head and neck control</li>
          <li>Shows interest in what you're eating</li>
          <li>Can move food to the back of the mouth and swallow</li>
        </ul>

        <h2>🥄 How to Introduce New Foods</h2>
        <p><strong>Start slow and simple:</strong> 1 new food every 3–5 days.</p>
        <p><strong>Good first foods:</strong></p>
        <ul>
          <li>Puréed vegetables</li>
          <li>Mashed fruits</li>
          <li>Baby cereal</li>
          <li>Blended lentils/beans</li>
        </ul>

        <h2>⚠️ What About Allergy-Prone Foods?</h2>
        <p><strong>Top 9 allergy-prone foods:</strong></p>
        <ul>
          <li>Peanut, Egg, Cow’s milk, Soy, Wheat, Tree nuts, Shellfish, Fish, Sesame</li>
        </ul>
        <p><strong>Start with small amounts</strong> and wait 2–3 days between allergens.</p>

        <h2>🧪 Make It Easier with Ready. Set. Food!</h2>
        <p><strong>Why parents love it:</strong></p>
        <ul>
          <li>Easy to use daily</li>
          <li>Backed by research</li>
          <li>Ideal for families who want extra support</li>
        </ul>

        <h2>🩺 When to Be Cautious</h2>
        <p>Check with your pediatrician if your baby:</p>
        <ul>
          <li>Has eczema, known allergy, or sibling with allergies</li>
        </ul>

        <p className="doula-tip"><strong>❤️ Doula Tip:</strong> Food introduction is about connection and trust, not perfection. Follow your baby’s cues and enjoy the process.</p>

        <p><strong>💬 Need Help with a Feeding Plan?</strong><br />Contact Purple Turtle Doula & Nanny Services for support with feeding, sleep, and more.</p>
      </section>
    </div>
  );
};

export default Blog;
