import { useRef } from 'react'

const Section = ({ children, align = 'left', color = 'white', style = {} }) => {
    return (
        <section
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 10vw',
                alignItems: align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start',
                textAlign: align === 'right' ? 'right' : align === 'center' ? 'center' : 'left',
                color: color,
                ...style
            }}
        >
            {children}
        </section>
    )
}

export const Overlay = () => {
    return (
        <div style={{ width: '100%' }}>
            {/* Navigation - Updated to new reference: •• MENU SEARCH ... SE CONNECTER CART */}
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '25px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1000,
                mixBlendMode: 'difference',
                background: 'transparent',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em'
            }} className="sans">

                {/* Left Side */}
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.2rem', letterSpacing: '-2px' }}>••</span>
                    <a href="#" style={{ textDecoration: 'none', color: 'white' }}>MENU</a>
                    <a href="#" style={{ textDecoration: 'none', color: 'white' }}>SEARCH</a>
                </div>

                {/* Right Side */}
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    <a href="#" style={{ textDecoration: 'none', color: 'white' }}>SE CONNECTER</a>
                    <a href="#" style={{ textDecoration: 'none', color: 'white' }}>CART</a>
                </div>
            </nav>

            {/* Slide 1 - Hero */}
            <Section align="center">
                <h1 className="serif" style={{ fontSize: '15vw', lineHeight: 0.8, background: 'linear-gradient(to right, #ffffff, #aaaaaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    INVALID
                </h1>
                <p className="sans" style={{ fontSize: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '20px', color: 'var(--color-cyan)' }}>
                    Redefining Footwear <span style={{ fontSize: '0.6em', color: 'white', opacity: 0.8, textTransform: 'none', letterSpacing: '0.1em' }}>By thomas</span>
                </p>
            </Section>

            {/* Slide 2 - Men 1 */}
            <Section align="right">
                <h2 className="serif" style={{ fontSize: '4rem' }}>Urban <br /> <span className="text-cyan">Drift_01</span></h2>
                <p className="sans" style={{ maxWidth: '300px', marginTop: '20px', fontSize: '0.9rem', opacity: 0.8 }}>
                    Engineered for the night. Reflective mesh upper with responsive cushioning.
                </p>
                <div className="sans" style={{ marginTop: '30px', padding: '10px 20px', border: '1px solid white', borderRadius: '50px' }}>
                    ₹35,000
                </div>
            </Section>

            {/* Slide 3 - Men 2 */}
            <Section align="left">
                <h2 className="serif" style={{ fontSize: '4rem' }}>Kinetic <br /> <span className="text-purple">Stride_02</span></h2>
                <p className="sans" style={{ maxWidth: '300px', marginTop: '20px', fontSize: '0.9rem', opacity: 0.8 }}>
                    Adaptable terrain dominance. Luxury rubber compound sole.
                </p>
                <div className="sans" style={{ marginTop: '30px', padding: '10px 20px', border: '1px solid white', borderRadius: '50px' }}>
                    ₹42,000
                </div>
            </Section>

            {/* Slide 4 - Men 3 */}
            <Section align="right">
                <h2 className="serif" style={{ fontSize: '4rem' }}>Void <br /> <span className="text-lime">Walker_03</span></h2>
                <p className="sans" style={{ maxWidth: '300px', marginTop: '20px', fontSize: '0.9rem', opacity: 0.8 }}>
                    Zero gravity feel. Ultra-lightweight carbon fiber chassis.
                </p>
                <div className="sans" style={{ marginTop: '30px', padding: '10px 20px', border: '1px solid white', borderRadius: '50px' }}>
                    ₹48,000
                </div>
            </Section>

            {/* Slide 5 - Women 1 (Generated CSS) */}
            <Section align="center">
                <h2 className="serif" style={{ fontSize: '6rem', zIndex: 1, position: 'relative' }}>
                    <span className="text-magenta">NEON</span> FLOW
                </h2>
                <p className="sans" style={{ marginTop: '20px', letterSpacing: '0.1em' }}>WOMEN'S EXCLUSIVE</p>
            </Section>

            {/* Slide 6 - Women 2 */}
            <Section align="left">
                <h2 className="serif" style={{ fontSize: '4rem' }}>Cyber <br /> <span className="text-cyan">Run_W</span></h2>
                <p className="sans" style={{ maxWidth: '300px', marginTop: '20px', fontSize: '0.9rem', opacity: 0.8 }}>
                    High-velocity impact protection. Dynamic aesthetic.
                </p>
                <div className="sans" style={{ marginTop: '30px', padding: '10px 20px', border: '1px solid white', borderRadius: '50px' }}>
                    ₹38,000
                </div>
            </Section>

            {/* Slide 7 - Women 3 */}
            <Section align="right">
                <h2 className="serif" style={{ fontSize: '4rem' }}>Velvet <br /> <span className="text-magenta">Tech</span></h2>
                <p className="sans" style={{ maxWidth: '300px', marginTop: '20px', fontSize: '0.9rem', opacity: 0.8 }}>
                    Soft-touch luxury meets brutalist engineering.
                </p>
                <div className="sans" style={{ marginTop: '30px', padding: '10px 20px', border: '1px solid white', borderRadius: '50px' }}>
                    ₹45,000
                </div>
            </Section>

            {/* Slide 8 - Philosophy */}
            <Section align="center">
                <h3 className="serif" style={{ fontSize: '3rem', fontStyle: 'italic' }}>"Perfection is not accident,"</h3>
                <p className="sans" style={{ marginTop: '30px', maxWidth: '600px', lineHeight: 1.6 }}>
                    It is the result of intentional design, superior craftsmanship, and comfort innovation. We create shoes that balance luxury, performance, and effortless style in every step.
                </p>
            </Section>

            {/* Slide 9 - About (Updated Text) */}
            <Section align="left">
                <h2 className="serif" style={{ fontSize: '4rem', color: 'var(--color-lime)', marginBottom: '30px' }}>ABOUT</h2>
                <div className="sans" style={{ maxWidth: '600px', fontSize: '1rem', lineHeight: 1.6, opacity: 0.9, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p>
                        We create shoes for the new generation of luxury—where elevated design meets uncompromising comfort. Every pair is crafted with precision, blending premium materials, refined silhouettes, and forward-thinking technology to deliver effortless style that moves with you.
                    </p>
                    <p>
                        Our philosophy is simple: luxury should feel as good as it looks. From the first step to the last, our shoes are engineered for all-day comfort without sacrificing sophistication. Clean lines, modern details, and a timeless aesthetic make each design versatile enough for both statement moments and everyday wear.
                    </p>
                    <p>
                        This is footwear redefined for those who expect more—more comfort, more style, more intention. Confident, contemporary, and undeniably refined, our shoes are made to carry you into the future in comfort and class.
                    </p>
                    <p style={{ fontStyle: 'italic', color: 'white', marginTop: '10px' }}>
                        Luxury. Comfort. The new standard.
                    </p>
                </div>
            </Section>

            {/* Slide 10 - Footer / Contact - Reference Image Style */}
            <Section align="left" style={{ justifyContent: 'flex-end', paddingBottom: '50px' }}>
                <div style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    columnGap: '20px',
                    fontSize: '0.8rem',
                    marginBottom: '100px',
                    lineHeight: '2.0'
                }} className="sans">

                    {/* Col 1 */}
                    <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>CONTACT</div>
                        <div>thomas.anthonyr99@gmail.com</div>
                        <div>+91 9916904091</div>
                        <div style={{ marginTop: '20px', fontWeight: 'bold', marginBottom: '10px' }}>FOLLOW US</div>
                        <div>Instagram</div>
                        <div>Facebook</div>
                        <div>Youtube</div>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>NEED HELP?</div>
                        <div><a href="https://wa.me/919916904091" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</a></div>
                        <div>Distributors</div>
                        <div>Careers</div>
                        <div>Support & FAQ</div>
                        <div>Shipping & Returns</div>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>IMPORTANT LINKS</div>
                        <div>Care and Maintenance</div>
                        <div>Terms and Conditions</div>
                        <div>Privacy and Cookies</div>
                    </div>

                    {/* Col 4 - Newsletter */}
                    <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>SIGN UP TO OUR NEWSLETTER</div>
                        <input type="email" placeholder="Enter email" style={{
                            background: 'black', border: '1px solid #333', padding: '10px', color: 'white', width: '250px', display: 'block', marginBottom: '10px'
                        }} />
                        <button style={{
                            background: 'white', color: 'black', border: 'none', padding: '10px 20px', fontWeight: 'bold', cursor: 'pointer', width: '250px'
                        }}>SUBMIT</button>
                    </div>
                </div>

                {/* Big Bottom Text */}
                <h1 className="sans" style={{ fontSize: '8vw', margin: 0, lineHeight: 0.8, fontWeight: 900, textTransform: 'uppercase' }}>
                    INVALID <span style={{ fontSize: '4vw', WebkitTextStroke: '1px white', color: 'transparent' }}>by thomas</span>
                </h1>

                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', fontSize: '0.7rem', opacity: 0.7, marginTop: '20px' }}>
                    <span style={{ marginRight: '20px' }}>Made my tommy</span>
                    <span>© 2026 Invalid Footwear</span>
                </div>
            </Section>
        </div>
    )
}
