import axios from "axios";

async function testScraper() {

  const url = "https://wdc.kugi.kyoto-u.ac.jp/dst_realtime/presentmonth/index.html";

  const res = await axios.get(url);

  const lines = res.data.split("\n");

  let dstData = [];

  for (let line of lines) {

    line = line.trim();

    const parts = line.split(/\s+/);

    // hanya ambil baris yang punya 25 kolom (day + 24 jam)
    if (parts.length === 25) {

      const day = Number(parts[0]);

      if (isNaN(day)) continue;

      // hanya ambil day 1–15
      if (day > 15) continue;

      const values = parts.slice(1);

      values.forEach((dst, hourIndex) => {

        if (dst !== "999999999") {

          dstData.push({
            day: day,
            hour: hourIndex + 1,
            dst: Number(dst)
          });

        }

      });

    }

  }

  console.log("TOTAL:", dstData.length);
  console.log(dstData.slice(0,400));

}

testScraper();