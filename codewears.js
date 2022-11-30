/* Мы определяем диапазон с двумя положительными целыми числами n1и n2и целочисленным коэффициентом k, [n1, n1 + k*n2],
границы определенного диапазона включены.
Нам будут даны два массива: primeFactorsи digits.
primeFactors = [p1, p2, ..., pl] # p1, p2, ... and pl are prime factors
digits = [d1, d2, ..., dj]  # d1, d2, ..., dj are digits from 0 to 9 included

Мы хотим найти все числа, mi такие что: n1 ≤ m1 < m2 < ....mi ≤ n1 + k*n2, и делятся для всех простых чисел, присутствующих в primeFactorsи имеют все цифры, присутствующие в digits.
Давайте посмотрим на пример, показывающий функцию, которая решит эту проблему.
n1 = 30
n2 = 90
k = 4
factors = [2, 3]
digits = [6, 2]
--> return [126, 162, 216, 246, 264, 276] # result should be a sorted list with the found numbers.
Пустой список означает, что нет чисел, которые могут удовлетворять заданным условиям.
Диапазон входов
100 <= n1 <= 500,
1000 <= n2 <= 8000
180 <= k <= 2500
Prime factors will be inferior or equal to 31
Удачного кодирования!!
function findUs(n1, n2, k, primeFactors, digits) {
    // your code here
    return [];
}
*/
let 
