const logo = `${process.env.NODE_ENV === 'production' ? '/2553311' : ''}/assets/logo-original.png`;

export default function Logo() {
  return <span className="logoMark" role="img" aria-label="Ателье Авторского Ремонта">
    <img className="logoLight" src={logo} alt="" aria-hidden="true" draggable={false} />
    <img className="logoDetail" src={logo} alt="" aria-hidden="true" draggable={false} />
  </span>;
}
