class AgencyNav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(this.bodyBlock);
    }

    get bodyBlock() {
        let bodyBlock = document.createElement('ul');
        bodyBlock.classList.add("usa-sidenav__sublist");

        bodyBlock.innerHTML = `
      <li class="usa-sidenav__item">
      <a href="view.html?website=cda" id="cda">CDA - Department of Agriculture</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=cdoc" id="cdoc">CDOC - Department of Corrections</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=cdec" id="cdec">CDEC - Department of Early
          Childhood</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=cde" id="cde">CDE - Department of Education</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=hcpf" id="hcpf">HCPF - Department of Health Care
          Policy and Financing</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=cdhe" id="cdhe">CDHE - Department of Higher
          Education</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=cdhs" id="cdhs">CDHS - Department of Human
          Services</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=cdle" id="cdle">CDLE - Department of Labor and
          Employment</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=dola" id="dola">DOLA - Department of Local
          Affairs</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=dmva" id="dmva">DMVA - Department of Military and
          Veterans Affairs</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=cdnr" id="cdnr">CDNR - Department of Natural
          Resources</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=dpa" id="dpa">DPA - Department of Personnel and
          Administration</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=cdphe" id="cdphe">CDPHE - Department of Public Health
          and Environment</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=cdps" id="cdps">CDPS - Department of Public
          Safety</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=dora" id="dora">DORA - Department of Regulatory
          Agencies</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=dor" id="dor">DOR - Department of Revenue</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=dos" id="dos">DOS - Department of State</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=cdot" id="cdot">CDOT - Department of
          Transportation</a>
  </li>
  <li class="usa-sidenav__item">
      <a href="view.html?website=cdt" id="cdt">CDT - Department of the Treasury</a>
  </li>

      `;

        return bodyBlock;
    }
}

window.customElements.define('agency-nav', AgencyNav);