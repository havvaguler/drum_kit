
// 1. aşama: klavye üzerinde herhangi bir tuşa bastığımda audio karşılığı olup olmadığını bulmalıyım.
window.addEventListener('keydown', function (e) {
    console.log(e.code)
    //2.aşama: karşılık gelen audioyu bana getir.
    const audio = document.querySelector(`audio[class= ${e.code}]`)
    console.log(audio)
    if (!audio) return; //audio yoksa fonksiyonun çalışmasını durdur.
    //her keydown yaptığımda sesi baştan çal.bu yüzden artık tuşa over and over again bastığımda her seferinde etk. alacağım.
    audio.currentTime = 0;
    //audioyu çalıştırmak için kullanacağımız JS kodu:
    audio.play()
    //sıradaki işlem keye karşılık gelen divi bulmak, ardından animasyon ekleyeceğiz.
    const key = document.querySelector(`div[class~= ${e.code}]`)
    //animasyon ekliyoruz.
    key.classList.add('hoverkey')
})

/* ATTRIBUTE SELECTOR: YENİ BİR KAVRAM ÖĞRENDİM:
<a class="logo navbar">Link</a> class attributei içerisinde birden çok class bulunduğunda daha spesifik bir eşleşmeye ihtiyaç duyulur.  

const a = document.querySelector('a[class="logo"]')
console.log(a) ---> null dönmesi bu yüzden.

const a = document.querySelector('a[class~="logo"]')  -> kelimeye göre arama yapıyor
console.log(a) ---> <a class="logo navbar"> 

ihtiyaç duyduğunda MDN dosyasından spesifik atr selectorlere ulaşabilirsin. hocanın class kullanmak yerine data-keys attribute oluşturması sanıyorum ki bu yüzden daha mantıklı. daha anlaşılır ve seçilebilir
*/



