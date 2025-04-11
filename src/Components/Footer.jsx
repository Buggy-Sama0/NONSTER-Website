import './footer.css';  // Ensure you create this CSS file
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div class="main-container">
            <div class="content">

            </div>
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Products</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div class="footer-social">
                        <h4>Follow Us</h4>
                        <div class="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                    </div>
                    <div class="footer-newsletter">
                        <h4>Subscribe to Our Newsletter</h4>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>© 2025 NONSTER. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;