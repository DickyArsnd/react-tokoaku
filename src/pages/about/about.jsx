import React from 'react';
import Header from '../../layout/header';

function TentangTokoku() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      {/* Konten */}
      <main className="container mx-auto p-4">
        <section className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Kisah Kami</h2>
          <p className="text-gray-700">
            Tokoku adalah pasar online terkemuka yang berdedikasi untuk memberikan
            pengalaman belanja terbaik bagi pelanggan kami. Kami menawarkan berbagai
            produk, mulai dari elektronik dan fashion hingga barang rumah tangga dan
            kecantikan. Misi kami adalah membuat belanja online menjadi lebih mudah,
            menyenangkan, dan dapat diakses oleh semua orang.
          </p>
        </section>

        <section className="mt-6 bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Tim Kami</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <img
                src="./assets/img/hp.jpg"
                alt="Anggota Tim 1"
                className="w-20 h-20 rounded-full mx-auto mb-2"
              />
              <p className="font-semibold">John Doe</p>
              <p className="text-gray-600">Pendiri</p>
            </div>
            <div className="text-center">
              <img
                src="./assets/img/hp.jpg"
                alt="Anggota Tim 2"
                className="w-20 h-20 rounded-full mx-auto mb-2"
              />
              <p className="font-semibold">Jane Smith</p>
              <p className="text-gray-600">Perancang</p>
            </div>
            <div className="text-center">
              <img
                src="./assets/img/hp.jpg"
                alt="Anggota Tim 3"
                className="w-20 h-20 rounded-full mx-auto mb-2"
              />
              <p className="font-semibold">David Brown</p>
              <p className="text-gray-600">Pengembang</p>
            </div>
            <div className="text-center">
              <img
                src="./assets/img/hp.jpg"
                alt="Anggota Tim 4"
                className="w-20 h-20 rounded-full mx-auto mb-2"
              />
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-gray-600">Pemasaran</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TentangTokoku;
