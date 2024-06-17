const database = require("../model/database");

const createAduan = (req, res) => {
  const { email_user, judul_aduan, deskripsi_aduan, url_aduan } = req.body;
  if (!email_user || !judul_aduan || !deskripsi_aduan || !url_aduan) {
    return res.status(400).json({
      error: "silahkan isi semua field",
    });
  }
  database.query(
    `INSERT INTO aduan (email_user, judul_aduan, deskripsi_aduan,url_aduan) VALUES (?,?,?,?)`,
    [email_user, judul_aduan, deskripsi_aduan, url_aduan],
    (err, results) => {
        if(err){
            console.error(err);
            return res.status(500).json({
                error:'error saat memasukan aduan'
            })
        }
        if(results.affectedRows > 0){
            console.log(results);
            return res.json({
                message:"berhasil mengadu"
            })
        }
        return res.status(500).json({
            error:'gagal mengadu'
        })
    }
  );
};

module.exports = createAduan