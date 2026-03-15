import axios from "axios";

export default async function handler(req, res) {

  try {

    const url = "https://wdc.kugi.kyoto-u.ac.jp/dst_realtime/presentmonth/";

    const response = await axios.get(url);

    const lines = response.data.split("\n");

    let dstData = [];

    for (let line of lines) {

      line = line.trim();

      const parts = line.split(/\s+/);

      if (parts.length === 25) {

        const day = Number(parts[0]);

        if (isNaN(day)) continue;

        const values = parts.slice(1);

        values.forEach((dst, i) => {

          if (dst !== "999999999") {

            dstData.push({
              day: day,
              hour: i + 1,
              dst: Number(dst)
            });

          }

        });

      }

    }

    console.log("TOTAL:", dstData.length);

    res.status(200).json({
      updated: new Date(),
      data: dstData
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

}