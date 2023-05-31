import {Image} from "react-bootstrap";
import wisata2 from '../../img/img1.jpg'
import wisata1 from '../../img/img2.jpg'
import wisata3 from '../../img/img10.jpg'
import wisata4 from '../../img/img4.jpg'
import wisata5 from '../../img/img3.jpg'

function All() {
  return (
    <>
    <h1 className="title-home">Pesona</h1>
    <div style={{marginTop:'0'}}>
        <Image className="img1" src={wisata1}></Image>
        <Image className="img2" src={wisata2}></Image>
        <Image className="img3" src={wisata3}></Image>
        <Image className="img2" src={wisata4}></Image>
        <Image className="img1" src={wisata5}></Image>
    </div>
    <div style={{padding:'10%'}}>"Keindahan tak tergantikan, selamat datang di Pantai Kilang Balikpapan!"</div>
    </>
  );
}

export default All;