class AvFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(this.bodyBlock);
    }

    get bodyBlock() {
        let bodyBlock = document.createElement('div');
        bodyBlock.innerHTML = `
        <style>
            .rounded{
                border-radius: 50%;
            }
        </style>

        <footer class="usa-footer">
        <div class="grid-container usa-footer__return-to-top">
            <a href="#">Return to top</a>
        </div>

        <!-- footer nav-->
        <div class="usa-footer__secondary-section">
            <div class="grid-container">
                <div class="grid-row grid-gap">
                    <div class="
              usa-footer__logo
              grid-row
              mobile-lg:grid-col-6 mobile-lg:grid-gap-2
            ">                
                        <div class="mobile-lg:grid-col-auto">
                        <a href="https://accessibilityview.com">
                            <img class="usa-footer__logo-img rounded" src="/assets/img/av-logo4.png"
                                alt="Accessibility View" />
                        </a>
                        </div>
                        <div class="mobile-lg:grid-col-auto">
                            <p class="usa-footer__logo-heading">
                                <a href="https://accessibilityview.com">Accessibility View</a>
                            </p>
                        </div>
                
                    </div>
                    <div class="usa-footer__contact-links mobile-lg:grid-col-6">
                        <p class="usa-footer__contact-heading">
                            Contact us
                        </p>
                        <address class="usa-footer__address">
                            <div class="usa-footer__contact-info grid-row grid-gap">
                                <div class="grid-col-auto">
                                    
                                </div>
                                <div class="grid-col-auto">
                                    <a href="mailto:scott@accessibilityview.com">scott@accessibilityview.com</a>
                                </div>
                            </div>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!--
  <div class="usa-identifier">
    <section
      class="usa-identifier__section usa-identifier__section--masthead"
      aria-label="Agency identifier"
    >
      <div class="usa-identifier__container">
        <div class="usa-identifier__logos">
          <a href="javascript:void(0)" class="usa-identifier__logo"
            ><img
              class="usa-identifier__logo-img"
              src="/assets/uswds/img/circle-gray-20.svg"
              alt="&lt;Parent agency&gt; logo"
              role="img"
          /></a>
        </div>
        <section
          class="usa-identifier__identity"
          aria-label="Agency description"
        >
          <p class="usa-identifier__identity-domain">domain.gov</p>
          <p class="usa-identifier__identity-disclaimer">
            An official website of the <a href="">&lt;Parent agency&gt;</a>
          </p>
        </section>
      </div>
    </section>
    <nav
      class="usa-identifier__section usa-identifier__section--required-links"
      aria-label="Important links"
    >
      <div class="usa-identifier__container">
        <ul class="usa-identifier__required-links-list">
          <li class="usa-identifier__required-links-item">
            <a
              href="javascript:void(0)"
              class="usa-identifier__required-link usa-link"
              >About &lt;Parent shortname&gt;</a
            >
          </li>
          <li class="usa-identifier__required-links-item">
            <a href="" class="usa-identifier__required-link usa-link"
              >Accessibility support</a
            >
          </li>
          <li class="usa-identifier__required-links-item">
            <a href="" class="usa-identifier__required-link usa-link"
              >FOIA requests</a
            >
          </li>
          <li class="usa-identifier__required-links-item">
            <a href="" class="usa-identifier__required-link usa-link"
              >No FEAR Act data</a
            >
          </li>
          <li class="usa-identifier__required-links-item">
            <a href="" class="usa-identifier__required-link usa-link"
              >Office of the Inspector General</a
            >
          </li>
          <li class="usa-identifier__required-links-item">
            <a href="" class="usa-identifier__required-link usa-link"
              >Performance reports</a
            >
          </li>
          <li class="usa-identifier__required-links-item">
            <a href="" class="usa-identifier__required-link usa-link"
              >Privacy policy</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <section
      class="usa-identifier__section usa-identifier__section--usagov"
      aria-label="U.S. government information and services"
    >
      <div class="usa-identifier__container">
        <div class="usa-identifier__usagov-description">
          Looking for U.S. government information and services?
        </div>
        <a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
      </div>
    </section>
  </div>
-->
      `;

        return bodyBlock;
    }
}

window.customElements.define('av-footer', AvFooter);