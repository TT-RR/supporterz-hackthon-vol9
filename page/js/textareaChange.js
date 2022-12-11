// 改行したときに行の高さが自動で変わる
// edit,uploadに適応
document.querySelectorAll(".form-control").forEach(function(){
      this.addEventListener('keyup',function(e){
          e.srcElement.style.height = 0
          e.srcElement.style.height = e.srcElement.scrollHeight+"px"
      })
  })
