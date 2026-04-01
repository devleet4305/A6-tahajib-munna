import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import heroImg from './assets/hero.png'; // ✅ ADD HERE
const productsData = [
  { id: 1, name: "AI Writing Pro", price: 29, period: "one-time", tag: "Popular", icon: "✍️", description: "Advanced AI writing assistant", features: ["Unlimited generations", "50+ templates"] },
  { id: 2, name: "Design Template Pack", price: 49, period: "one-time", tag: "Best Seller", icon: "🎨", description: "500+ premium design templates", features: ["Figma files", "Editable"] },
  { id: 3, name: "Premium Stock Assets", price: 79, period: "yearly", tag: "New", icon: "📸", description: "High-quality stock photos & videos", features: ["10,000+ assets", "Royalty free"] },
  { id: 4, name: "Automation Toolkit", price: 19, period: "monthly", tag: "", icon: "⚡", description: "Automate your repetitive tasks", features: ["Zapier integration"] },
  { id: 5, name: "Resume Builder Pro", price: 39, period: "one-time", tag: "Popular", icon: "📄", description: "AI-powered resume creator", features: ["ATS optimized", "Cover letter"] },
  { id: 6, name: "Social Family Content Kit", price: 59, period: "one-time", tag: "", icon: "📱", description: "Content for social media", features: ["Canva templates"] }
];

function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`, { position: "top-right" });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Item removed from cart");
  };

  const proceedToCheckout = () => {
    if (cart.length === 0) return;
    toast.success(`🎉 Checkout successful! ${cart.length} items purchased.`, { position: "top-center" });
    setCart([]);
  };

  const cartCount = cart.length;

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#f8fafc' }}>
      <ToastContainer />

      {/* Navbar */}
      <nav style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '18px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#6b21a8' }}>DigiTools</h1>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <button onClick={() => setActiveTab('products')} style={{ fontSize: '16px', fontWeight: 500, cursor: 'pointer' }}>Products</button>
            <button onClick={() => setActiveTab('cart')} style={{ fontSize: '16px', fontWeight: 500, cursor: 'pointer', position: 'relative' }}>
              Cart
              {cartCount > 0 && (
                <span style={{ position: 'absolute', top: '-8px', right: '-12px', backgroundColor: '#6b21a8', color: 'white', fontSize: '12px', padding: '2px 7px', borderRadius: '50%' }}>
                  {cartCount}
                </span>
              )}
            </button>
            <button style={{ backgroundColor: '#6b21a8', color: 'white', padding: '10px 28px', borderRadius: '50px', border: 'none', fontWeight: 600 }}>Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div style={{ background: 'linear-gradient(to right, #6b21a8, #9333ea)', color: 'white', padding: '110px 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '52px', fontWeight: '700', marginBottom: '20px' }}>Supercharge Your Digital Workflow</h1>
        <p style={{ fontSize: '21px', maxWidth: '720px', margin: '0 auto 40px' }}>Discover premium tools to boost your productivity and creativity.</p>
        <div>
          <button style={{ backgroundColor: 'white', color: '#6b21a8', padding: '16px 40px', borderRadius: '50px', fontSize: '18px', fontWeight: 600, marginRight: '16px' }}>Browse Tools</button>
          <button style={{ border: '2px solid white', color: 'white', padding: '16px 40px', borderRadius: '50px', fontSize: '18px', fontWeight: 600 }}>Watch Demo</button>
        </div>
      </div>

     
...............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................

      {/* Stats */}
      <div style={{ backgroundColor: '#ffffff', padding: '50px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px' }}>
          <div><div style={{ fontSize: '40px', fontWeight: '700', color: '#6b21a8' }}>50K+</div><div>Active Users</div></div>
          <div><div style={{ fontSize: '40px', fontWeight: '700', color: '#6b21a8' }}>200+</div><div>Premium Tools</div></div>
          <div><div style={{ fontSize: '40px', fontWeight: '700', color: '#6b21a8' }}>4.9</div><div>Average Rating</div></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 40px' }}>
        
        {/* Toggle + Title Section */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '30px' }}>Premium Digital Tools</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
            <button 
              onClick={() => setActiveTab('products')}
              style={{ 
                padding: '12px 32px', 
                borderRadius: '50px', 
                backgroundColor: activeTab === 'products' ? '#6b21a8' : '#f3e8ff',
                color: activeTab === 'products' ? 'white' : '#6b21a8',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Products
            </button>
            
            <button 
              onClick={() => setActiveTab('cart')}
              style={{ 
                padding: '12px 32px', 
                borderRadius: '50px', 
                backgroundColor: activeTab === 'cart' ? '#6b21a8' : '#f3e8ff',
                color: activeTab === 'cart' ? 'white' : '#6b21a8',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {activeTab === 'products' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {productsData.map((product) => (
              <div key={product.id} style={{ backgroundColor: 'white', borderRadius: '20px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
                <div style={{ fontSize: '58px', marginBottom: '20px' }}>{product.icon}</div>
                {product.tag && <span style={{ backgroundColor: '#fef3c7', color: '#d97706', padding: '6px 18px', borderRadius: '9999px', fontSize: '14px' }}>{product.tag}</span>}
                <h3 style={{ fontSize: '23px', fontWeight: 700, margin: '20px 0 12px' }}>{product.name}</h3>
                <p style={{ color: '#64748b', marginBottom: '24px', lineHeight: '1.5' }}>{product.description}</p>
                
                <div style={{ marginBottom: '28px' }}>
                  <span style={{ fontSize: '32px', fontWeight: '700' }}>${product.price}</span>
                  <span style={{ color: '#64748b' }}> /{product.period}</span>
                </div>

                <button 
                  onClick={() => addToCart(product)}
                  style={{ width: '100%', backgroundColor: '#6b21a8', color: 'white', padding: '16px', borderRadius: '16px', fontSize: '17px', fontWeight: 600, border: 'none', cursor: 'pointer' }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Cart Section - Made to match your screenshot */}
        {activeTab === 'cart' && (
          <div style={{ maxWidth: '700px', margin: '40px auto', backgroundColor: '#ffffff', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            <div style={{ padding: '40px' }}>
              <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '30px' }}>Your Cart</h2>

              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                  <div style={{ fontSize: '100px', marginBottom: '20px' }}>🛒</div>
                  <h3 style={{ fontSize: '26px' }}>Your cart is empty</h3>
                </div>
              ) : (
                <>
                  {cart.map((item, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', borderBottom: '1px solid #f1f5f9' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <span style={{ fontSize: '52px' }}>{item.icon}</span>
                        <div>
                          <p style={{ fontWeight: 600, fontSize: '19px' }}>{item.name}</p>
                          <p style={{ color: '#64748b' }}>${item.price} / {item.period}</p>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} style={{ color: '#ef4444', fontWeight: 500 }}>Remove</button>
                    </div>
                  ))}

                  <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', fontWeight: 600, marginBottom: '30px' }}>
                      Total Items: <span style={{ color: '#6b21a8' }}>{cartCount}</span>
                    </div>
                    <button 
                      onClick={proceedToCheckout}
                      style={{ 
                        width: '100%', 
                        background: 'linear-gradient(to right, #6b21a8, #9333ea)', 
                        color: 'white', 
                        padding: '20px', 
                        borderRadius: '9999px', 
                        fontSize: '19px', 
                        fontWeight: 700, 
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Get Started Section */}
<div style={{ backgroundColor: '#f8fafc', padding: '80px 40px' }}>
  <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
    <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '10px' }}>
      Get Started In 3 Steps
    </h2>
    <p style={{ color: '#64748b', marginBottom: '50px' }}>
      Start using our tools in minutes
    </p>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px'
    }}>
      
      {/* Step 1 */}
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <div style={{ fontSize: '40px', marginBottom: '15px' }}>👤</div>
        <h3 style={{ fontSize: '20px', fontWeight: '600' }}>Create Account</h3>
        <p style={{ color: '#64748b' }}>Sign up in seconds</p>
      </div>

      {/* Step 2 */}
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <div style={{ fontSize: '40px', marginBottom: '15px' }}>📦</div>
        <h3 style={{ fontSize: '20px', fontWeight: '600' }}>Choose Products</h3>
        <p style={{ color: '#64748b' }}>Browse premium tools</p>
      </div>

      {/* Step 3 */}
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <div style={{ fontSize: '40px', marginBottom: '15px' }}>🚀</div>
        <h3 style={{ fontSize: '20px', fontWeight: '600' }}>Start Creating</h3>
        <p style={{ color: '#64748b' }}>Boost productivity instantly</p>
      </div>

    </div>
  </div>
</div>


{/* Pricing Section */}
<div style={{ backgroundColor: '#ffffff', padding: '90px 40px' }}>
  <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
    
    <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '10px' }}>
      Simple, Transparent Pricing
    </h2>
    <p style={{ color: '#64748b', marginBottom: '50px' }}>
      Choose the plan that fits your needs
    </p>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px'
    }}>

      {/* Free Plan */}
      <div style={{ backgroundColor: '#f8fafc', padding: '40px', borderRadius: '20px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '600' }}>Starter</h3>
        <p style={{ fontSize: '32px', fontWeight: '700', margin: '20px 0' }}>$0</p>
        <p style={{ color: '#64748b', marginBottom: '20px' }}>Basic features</p>
        <button style={{
          padding: '12px 30px',
          borderRadius: '999px',
          border: 'none',
          backgroundColor: '#6b21a8',
          color: 'white',
          cursor: 'pointer'
        }}>
          Get Started
        </button>
      </div>

      {/* Pro Plan (highlighted) */}
      <div style={{
        background: 'linear-gradient(to right, #6b21a8, #9333ea)',
        padding: '40px',
        borderRadius: '20px',
        color: 'white',
        transform: 'scale(1.05)'
      }}>
        <h3 style={{ fontSize: '22px', fontWeight: '600' }}>Pro</h3>
        <p style={{ fontSize: '32px', fontWeight: '700', margin: '20px 0' }}>$29/month</p>
        <p style={{ marginBottom: '20px' }}>All premium tools included</p>
        <button style={{
          padding: '12px 30px',
          borderRadius: '999px',
          border: 'none',
          backgroundColor: 'white',
          color: '#6b21a8',
          cursor: 'pointer',
          fontWeight: '600'
        }}>
          Get Pro
        </button>
      </div>

      {/* Enterprise */}
      <div style={{ backgroundColor: '#f8fafc', padding: '40px', borderRadius: '20px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '600' }}>Enterprise</h3>
        <p style={{ fontSize: '32px', fontWeight: '700', margin: '20px 0' }}>$99/month</p>
        <p style={{ color: '#64748b', marginBottom: '20px' }}>For teams & businesses</p>
        <button style={{
          padding: '12px 30px',
          borderRadius: '999px',
          border: 'none',
          backgroundColor: '#6b21a8',
          color: 'white',
          cursor: 'pointer'
        }}>
          Contact Sales
        </button>
      </div>

    </div>
  </div>
</div>
      {/* CTA Section */}
<div style={{
  background: 'linear-gradient(to right, #6b21a8, #9333ea)',
  padding: '80px 40px',
  textAlign: 'center',
  color: 'white'
}}>
  <div style={{ maxWidth: '900px', margin: '0 auto' }}>
    
    <h2 style={{
      fontSize: '36px',
      fontWeight: '700',
      marginBottom: '20px'
    }}>
      Ready to transform Your Workflow?
    </h2>

    <p style={{
      fontSize: '18px',
      marginBottom: '40px',
      opacity: 0.9
    }}>
      Join thousands of creators using DigiTools to boost productivity.
    </p>

    <button style={{
      backgroundColor: 'white',
      color: '#6b21a8',
      padding: '16px 40px',
      borderRadius: '999px',
      border: 'none',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
    }}>
      explore products 🚀
    </button>

  </div>
</div>
      {/* Footer */}
      <footer style={{ backgroundColor: '#1e2937', color: '#94a3b8', padding: '70px 40px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: '28px' }}>DigiTools</h2>
        <p>Premium Digital Tools for Modern Creators</p>
      </footer>
    </div>
  );
}

export default App;