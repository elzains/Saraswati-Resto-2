class footerContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer id="contact">
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-text">
                        <p>&#169; 2023 Studi Independent X Dicoding Academy Cycle 4. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-content', footerContent);
