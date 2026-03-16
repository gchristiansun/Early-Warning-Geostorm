# Geomagnetic Storm Monitoring Dashboard

Dashboard untuk memonitor **Dst Index (Disturbance Storm Time)** secara realtime dari data yang disediakan oleh World Data Center for Geomagnetism Kyoto.

Data diambil dari:
https://wdc.kugi.kyoto-u.ac.jp/dst_realtime/presentmonth/

Dashboard ini melakukan:

* Scraping data DST
* Menyediakan API endpoint
* Menampilkan grafik realtime menggunakan Recharts

---

# Tech Stack

* React (Vite)
* Recharts
* Axios
* Node.js Serverless API
* Vercel (deployment)

---

# Struktur Folder

```
monitoring-geostorm/
│
├── api/
│   └── dst-scrapper.js       
│
├── src/
│   │
│   ├── component/
│   │   └── DSTChart.jsx     
│   │
│   ├── App.jsx                
│   ├── main.jsx             
│   └── index.css
│
├── testScrapper.js            
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Instalasi

Clone repository:

```
git clone https://github.com/username/monitoring-geostorm.git
cd monitoring-geostorm
```

Install dependencies:

```
npm install
```

---

# Menjalankan Project (Local Development)

Karena project menggunakan **serverless API**, gunakan:

```
vercel dev
```

Server akan berjalan di:

```
http://localhost:3000
```

Frontend dan API akan berjalan dalam satu server.

---

# Endpoint API

API scraping tersedia di:

```
/api/dst-scrapper
```

Contoh response:

```json
{
  "updated": "2026-03-16T10:00:00Z",
  "data": [
    {
      "day": 1,
      "hour": 1,
      "dst": -7
    }
  ]
}
```

Data berisi:

| Field | Deskripsi          |
| ----- | ------------------ |
| day   | Hari dalam bulan   |
| hour  | Jam ke-1 sampai 24 |
| dst   | Nilai DST (nT)     |

---

# Menjalankan Test Scraper

Untuk memastikan scraping bekerja:

```
node testScrapper.js
```

Output contoh:

```
TOTAL: 336
[
 { day:1, hour:1, dst:-7 },
 { day:1, hour:2, dst:-9 }
]
```

---

# Dashboard

Dashboard akan menampilkan grafik **DST realtime** menggunakan Recharts.

```
data
```

---

# Deployment

Deploy ke Vercel:

```
vercel
```

Setelah deploy, API tersedia di:

```
https://your-project.vercel.app/api/dst-scrapper
```

---

# Future Improvements

Beberapa pengembangan yang bisa dilakukan:

* Realtime auto refresh setiap 1 menit
* Storm level indicator
* Alert ketika DST < -100
* Prediksi geomagnetic storm onset
* Penyimpanan data historis

---

# Data Source

World Data Center for Geomagnetism, Kyoto
https://wdc.kugi.kyoto-u.ac.jp/

---

# License

MIT License
