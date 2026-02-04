window.addEventListener('scroll', function () {
    const header = document.getElementById('header_wrap');

    if (window.scrollY > 900) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// tap
$(function(){
  $(".tap > li > a").on("click", function(e){
    e.preventDefault(); // ← #로 이동하는 기본동작 막기
    $(this).parent().addClass("on").siblings().removeClass("on");
  });
});

// tap2
function openBoard(evt, boardName) {
  evt.preventDefault(); // href="#" 때문에 위로 튀는거 방지

  // 1) 모든 내용 숨기기
  const boards = document.getElementsByClassName("board");
  for (let i = 0; i < boards.length; i++) {
    boards[i].style.display = "none";
  }

  // 2) 모든 탭에서 on 제거
  const tablinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("on");
  }

  // 3) 선택한 내용만 보이기
  document.getElementById(boardName).style.display = "block";

  // 4) 클릭한 탭에만 on 추가
  evt.currentTarget.classList.add("on");
}