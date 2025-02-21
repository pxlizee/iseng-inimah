function hitungCC() {
    const diameter = parseFloat(document.getElementById('diameter').value);
    const stroke = parseFloat(document.getElementById('stroke').value);
    const cylinder = parseInt(document.getElementById('cylinder').value);

    if (isNaN(diameter) || isNaN(stroke) || isNaN(cylinder)) {
        alert("Silakan masukkan nilai yang valid.");
        return;
    }

    // Rumus untuk menghitung kapasitas mesin (CC) per silinder
    const radius = diameter / 2; // mm
    const volume = Math.PI * Math.pow(radius, 2) * stroke; // mm^3
    const ccPerCylinder = volume / 1000; // konversi mm^3 ke cc
    
    // Total kapasitas mesin
    const totalCC = ccPerCylinder * cylinder;

    // Tampilkan hasil di modal
    document.getElementById('result').innerText = `Kapasitas Mesin: ${totalCC.toFixed(2)} CC`;
    document.getElementById('resultModal').style.display = "block";
}
// Menutup modal jika pengguna mengklik di luar modal
window.onclick = function(event) {
    const modal = document.getElementById('resultModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}