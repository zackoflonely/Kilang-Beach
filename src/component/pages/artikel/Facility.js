import img1 from '../../../img/wisata2.jpg';
import { Image,Row,Col, Container } from 'react-bootstrap';
import fas1 from '../../../img/img5.jpg';
import fas2 from '../../../img/fas2.jpg';
import fas4 from '../../../img/fas2.jfif';
import fas3 from '../../../img/fas6.jpg';
import fas5 from '../../../img/fas5.jpg';

function Facility(){
    return(
        <div className="fasilitas">
            <Container>
            <h1 className='title-fasilitas'>Sekilas Mengenai Pantai Kilang</h1>
            <Image src={fas1} style={{padding:'2%'}} className='img-fas'></Image>
            <p style={{textAlign:'justify',padding:'5%'}}>Pantai Kilang Balikpapan adalah salah satu pantai yang terletak di kota Balikpapan, Kalimantan Timur. Ketika hari beranjak senja, lampu-lampu hias di pantai akan mulai dinyalakan. Suasana pantai pun menjadi semakin romantis dan menyenangkan. Sambil menikmati semilir angin laut dan debur ombak, kita bisa menyantap aneka kuliner yang dijual di pantai ini.</p>
            <div style={{textAlign:'center'}}>
                <Row>
                    <Col>
                        <Image src={fas2} className='img-pad1' style={{width:'75%'}}></Image>
                    </Col>
                    <Col className='img-fas2'><p>Adapun Helipad di Pantai Kilang Balikpapan merupakan lokasi yang menarik untuk mengabadikan momen foto. Terletak di tepi pantai yang indah, helipad ini menawarkan pemandangan yang spektakuler dengan kombinasi langit biru, laut yang tenang, dan pesona alam sekitarnya.
                    </p></Col>
                </Row>
            </div>
            <br/>
            <div style={{textAlign:'center'}}>
                <Row>
                    <Col className='img-fas2'><p>Ketika senja tiba, langit di Pantai Kilang Balikpapan dihiasi oleh warna-warna indah yang menggoda. Anda dapat duduk di tepi pantai, merasakan angin sepoi-sepoi, dan menyaksikan perubahan warna langit dari biru cerah menjadi jingga dan merah yang memukau.
                    </p></Col>
                    <Col>
                        <Image src={fas3} className='img-pad2' style={{width:'80%'}}></Image>
                    </Col>
                </Row>
            </div>
            <br/>
            <div style={{textAlign:'center'}}>
                <Row>
                    <Col className='img-fas2'><p>
                    Sambil menunggu matahari tenggelam sepenuhnya, Anda dapat memanfaatkan momen ini untuk berjalan-jalan di sepanjang pantai, mengambil foto-foto yang menakjubkan, atau sekadar duduk bersantai menikmati suasana yang tenang. Jangan lupa untuk membawa bersama orang terkasih atau teman-teman Anda untuk berbagi keindahan momen ini.
                    </p></Col>
                    <Col>
                        <Image src={fas4} style={{width:'75%'}}></Image>
                    </Col>
                </Row>
            </div>
            <Image src={fas5} style={{width:'75%',padding:'2%'}} className='img-fas'></Image>
            <p style={{textAlign:'justify',padding:'5%'}}>Seringkali di pantai ini di adakan live music, konser dan sebagainya guna menghibur para pendatang. Dengan pemandangan matahari terbenam sebagai latar belakang, konser ini menjadi semakin memukau. Anda bisa merasakan getaran musik yang menyebar dalam udara, bergoyang mengikuti irama, dan merasakan semangat yang ditularkan oleh para penampil di atas panggung. Semua itu dilakukan di tengah suasana alam yang mempesona, menciptakan momen yang tak terlupakan.</p>
        </Container>
        </div>
    )
}
export default Facility;