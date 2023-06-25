class jumbotronContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <!-- jumbotron -->
        <div class="jumbotron-container">
          <div class="jumbotron-title">
            <h1 id="typing">Welcome to MyResto!</h1>
            <a id="getStarted" href="#main-content">Get Started</a>
          </div>
        </div>
        `;
    }
}

customElements.define('jumbotron-content', jumbotronContent);
