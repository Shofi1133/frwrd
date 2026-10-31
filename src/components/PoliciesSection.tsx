import { ArrowUpRight } from 'lucide-react'
import { sizeChart, SIZE_CHART_IMAGE, TERMS_IMAGE } from '../data/products'

export function SizeChartTable() {
  return (
    <div className="size-chart-table-wrap">
      <table className="size-chart-table">
        <caption className="sr-only">Ukuran kemeja FRWRD dalam sentimeter</caption>
        <thead>
          <tr>
            <th scope="col">Ukuran</th>
            <th scope="col">Panjang (cm)</th>
            <th scope="col">Lebar (cm)</th>
            <th scope="col">Lengan (cm)</th>
          </tr>
        </thead>
        <tbody>
          {sizeChart.map((row) => (
            <tr key={row.size}>
              <th scope="row">{row.size}</th>
              <td>{row.length}</td>
              <td>{row.width}</td>
              <td>{row.sleeve}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="size-chart-note">Semua ukuran dalam sentimeter. Toleransi pengukuran dapat berbeda sekitar 1–2 cm.</p>
      <details className="policy-image-details">
        <summary>Lihat size chart bergambar <ArrowUpRight aria-hidden="true" /></summary>
        <img src={SIZE_CHART_IMAGE} alt="Ilustrasi cara mengukur kemeja dan size chart FRWRD ukuran S sampai XL" loading="lazy" />
      </details>
    </div>
  )
}

export function PoliciesSection() {
  return (
    <section className="policies-section" aria-label="Informasi pemesanan FRWRD">
      <div className="policy-block size-chart-block" id="size-chart">
        <div className="policy-heading">
          <p className="eyebrow">Temukan ukuran yang pas</p>
          <h2 className="section-title">Size chart<span>.</span></h2>
          <p>Gunakan tabel berikut sebagai panduan memilih ukuran kemeja FRWRD.</p>
        </div>
        <SizeChartTable />
      </div>

      <div className="policy-block terms-block" id="terms">
        <div className="policy-heading">
          <p className="eyebrow">Mohon dibaca sebelum memesan</p>
          <h2 className="section-title">Syarat &amp; ketentuan<span>.</span></h2>
          <p>Ketentuan penukaran produk dan langkah yang perlu dilakukan.</p>
        </div>
        <div className="terms-content">
          <div className="terms-group">
            <h3>Ketentuan penukaran</h3>
            <ol>
              <li>Sertakan video unboxing saat membuka paket.</li>
              <li>Pengajuan penukaran maksimal 7 hari sejak produk diterima.</li>
              <li>Penukaran berlaku untuk pesanan yang tidak sesuai, kesalahan pengiriman, atau produk yang rusak/cacat produksi.</li>
              <li>Produk tidak boleh dalam keadaan rusak, kotor, atau telah dicuci.</li>
              <li>Label dan barcode produk harus masih utuh.</li>
              <li>Apabila barang yang dikirim tidak memenuhi syarat, barang akan dikembalikan kepada customer.</li>
            </ol>
          </div>
          <div className="terms-group">
            <h3>Prosedur pengembalian</h3>
            <ol>
              <li>Konfirmasi kepada kami dan sertakan nomor transaksi sebelum produk dikirim kembali.</li>
              <li>Produk akan ditukar dengan produk yang sama atau dana dikembalikan jika stok tidak tersedia.</li>
              <li>Setelah menerima konfirmasi ketersediaan produk pengganti, kirim produk beserta label dan barcode asli.</li>
              <li>Ongkos kirim pengembalian ditanggung customer; ongkos kirim produk pengganti ditanggung FRWRD.</li>
            </ol>
          </div>
          <details className="policy-image-details">
            <summary>Lihat S&amp;K bergambar <ArrowUpRight aria-hidden="true" /></summary>
            <img src={TERMS_IMAGE} alt="Poster syarat dan ketentuan penukaran barang serta prosedur pengembalian FRWRD" loading="lazy" />
          </details>
        </div>
      </div>
    </section>
  )
}
