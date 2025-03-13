const Footer: React.FC = () => {
  return (
    <footer className="col-span-12 grid grid-cols-4 p-4 border-t border-gray-300">
      <div className="col-span-1">
        <h3>Fundacja Zryw</h3>
      </div>
      <div className="col-span-1">
        <p>ul. Górnośląska 16/42</p>
        <p>00-432 Warszawa</p>
        <p>E-mail: kontakt@fundacjazryw.pl</p>
        <p>Telefon: +48 575 934 017</p>
      </div>
      <div className="col-span-1">
        <p>NIP: 7011177639</p>
        <p>REGON: 527088981</p>
        <p>KRS: 0001072883</p>
      </div>
      <div className="col-span-1">
        <p>Polityka prywatności</p>
        <p>Materiały prasowe</p>
      </div>
      <div className="col-span-4 flex justify-end">
        <img src="/footer-logo.png" alt="Logo" className="h-10" />
      </div>
    </footer>
  );
};

export default Footer;
