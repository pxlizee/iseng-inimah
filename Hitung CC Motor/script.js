document.getElementById('cc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const bore = parseFloat(document.getElementById('bore').value);
    const stroke = parseFloat(document.getElementById('stroke').value);
    const cylinders = parseInt(document.getElementById('cylinders').value);

    if (isNaN(bore) || isNaN(stroke) || isNaN(cylinders) || bore <= 0 || stroke <= 0 || cylinders <= 0) {
        document.getElementById('result').textContent = 'mohon masukkan nilai yang valid.';
        return;
    }

    const boreRadius = bore / 2;
    const volumePerCylinder = Math.PI * Math.pow(boreRadius, 2) * stroke;
    const totalVolume = volumePerCylinder * cylinders / 1000;

    document.getElementById('result').textContent = 'Kapasitas silinder: ${totalVolume.toFixed(2)} cc';
    });