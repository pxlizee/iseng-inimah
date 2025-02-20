document.getElementById('cc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const boreInput = document.getElementById('bore').value.replace(',', '.');
    const strokeInput = document.getElementById('stroke').value.replace(',', '.');
    const cylindersInput = document.getElementById('cylinders').value;

    const bore = parseFloat(boreInput);
    const stroke = parseFloat(strokeInput);
    const cylinders = parseInt(cylindersInput);

    if (isNaN(bore) || isNaN(stroke) || isNaN(cylinders) || bore <= 0 || stroke <= 0 || cylinders <= 0) {
        document.getElementById('result').textContent = 'mohon masukkan nilai yang valid.';
        return;
    }

    const boreRadius = bore / 2;
    const volumePerCylinder = Math.PI * Math.pow(boreRadius, 2) * stroke;
    const totalVolume = volumePerCylinder * cylinders / 1000;

    document.getElementById('result').textContent = `Kapasitas Silinder: ${totalVolume.toFixed(2)} cc`;
});
