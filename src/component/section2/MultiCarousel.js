import {Image} from "react-bootstrap";
import wisata2 from '../../img/pasir.jfif'
import wisata3 from '../../img/pohon.jfif'
import wisata4 from '../../img/fotografer.jpg'
import wisata5 from '../../img/popmie.jpg'
import kelapa from '../../img/kelapa.jpg'

function MultiCarousel() {
  return (
    <>
    {/* <h1 className="title-home">PESONA</h1> */}
    <div style={{marginTop:'0'}}>
        <Image className="img3" src={kelapa}></Image>
        <Image className="img3" src={wisata2}></Image>
        <Image className="img3" src={wisata3}></Image>
        <Image className="img3" src={wisata4}></Image>
        <Image className="img3" src={wisata5}></Image>
    </div>
    <div style={{padding:'10%'}}>"Will Keep on your memories"</div>
    </>
  );
}

export default MultiCarousel;