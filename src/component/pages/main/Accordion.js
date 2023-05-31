import Accordion from 'react-bootstrap/Accordion';

function Accordions() {
  return (
    <Accordion style={{ padding: '5%' }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>FunFact</Accordion.Header>
        <Accordion.Body>
          Pantai Kilang adalah salah satu pantai terindah di Balikpapan dengan pemandangan yang menakjubkan dan pasir putih yang lembut. Pantai ini juga merupakan tempat favorit untuk melihat matahari terbenam yang spektakuler.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Persiapan</Accordion.Header>
        <Accordion.Body>
          Untuk mengunjungi Pantai Kilang, pastikan Anda membawa perlengkapan yang sesuai, seperti:
          <ul>
            <li>Pakaian renang dan handuk</li>
            <li>Krim tabir surya untuk melindungi kulit dari sinar matahari</li>
            <li>Kacamata hitam dan topi untuk melindungi mata dan kepala dari sinar matahari langsung</li>
            <li>Snorkel dan peralatan selam jika ingin menjelajahi keindahan bawah laut</li>
            <li>Minuman dan makanan ringan</li>
          </ul>
          Pastikan juga untuk menghormati lingkungan sekitar dan menjaga kebersihan pantai dengan tidak meninggalkan sampah.
        </Accordion.Body>
      </Accordion.Item>
      {/* Tambahkan item Accordion lainnya di sini */}
    </Accordion>
  );
}

export default Accordions;