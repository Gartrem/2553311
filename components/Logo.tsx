const logo = `${process.env.NODE_ENV === 'production' ? '/2553311' : ''}/assets/logo-original.png`;

export default function Logo() {
  return <span className="logoMark" role="img" aria-label="Ателье Авторского Ремонта">
    <svg viewBox="100 36 1060 1125" aria-hidden="true" focusable="false">
      <image href={logo} width="1254" height="1254" />
    </svg>
  </span>;
}
