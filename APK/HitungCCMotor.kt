fun hitungCC(diameter: Double, langkah: Double, jumlahSilinder: Int): Double {
    val radius = diameter / 2
    val volumeSilinder = Math.PI * radius * radius * langkah
    return volumeSilinder * jumlahSilinder / 1000
}

fun main() {
    printIn("Masukkan diameter silinder: ")
    val diameter = readLine()!!.toDouble()

    printIn("Masukkan langkah Piston : ")
    val langkah = readLine()!!.toDouble()

    printIn("Masukkan Jumlah Silinder: ")
    val jumlahSilinder = readLine()!!.toInt()

    val cc = hitungCC(diameter, langkah, jumlahSilinder)
    printIn("CC Motor kamu adalah: ")
}