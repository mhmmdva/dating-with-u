
let click = document.getElementById('btnClick')
click.addEventListener('click', function () {
   let clicks1 = confirm("resti lo suka kopi gak ?")
   if (clicks1 == true) {

      let clicks2 = confirm('lu orangnya suka banget kopi ya?')
      if (clicks2 == true) {
         alert('iya, sukaaaaaaaaaaaaaaaaa')
      } else {
         alert('engga jugaaaaa');
      }

      let clicks3 = confirm('kalo lu berkenan, kira-kira lo mau ga ya ngopi bareng gue')
      if (clicks3 == true) {
         alert('coba like story ig gue kalo berkenan')
      } else {
         alert('engga dulu len, makasih :)');
      }

      return alert('okay, have a nice dream tonight')

   } else {
      alert('hmm, ok')
   }

   let film = confirm("kalo nonton film suka ga ? ")
   if (film == true) {

      let clicks2 = confirm('suka banget nonton yaaa lo res')
      if (clicks2 == true) {
         alert('iya, sukaaaaaaaaaaaaaaaaa')
      } else {
         alert('engga jugaaaaa');
      }

      let clicks3 = confirm('kan tadi ngopi gamau, kalo nonton gimana ? mau ga')
      if (clicks3 == true) {
         alert('coba kasih reaction story ig gue kalo bersedia')
      } else {
         alert('enggaaaaaaaaaaaaaaaa makasih :)');
      }

      return alert('okay, have a nice dream tonight')

   } else {
      alert("next time mungkin boleh yaaa")
   }
})

