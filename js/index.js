$(".messagearea").on("input", function () {
  var input1 = $(textarea).val(); //#textarea に入力された文字を取得
  var input2 = $(username).val(); //#username に入力された文字を取得

  if (input1 && input2) {
    //もし文字が入っていれば

    $("#sendbtn").prop("disabled", false); //disabled を無効にする＝ボタンが押せる
  } else {
    $("#sendbtn").prop("disabled", true); //disabled を有効にする＝ボタンが押せない
  }
});

$(".liarea").on("input", function () {
  var input1 = $(liuser).val(); //#liuser に入力された文字を取得
  var input2 = $(lipass).val(); //#lipass に入力された文字を取得

  if (input1 && input2) {
    //もし文字が入っていれば

    $("#loginbtn").prop("disabled", false); //disabled を無効にする＝ボタンが押せる
  } else {
    $("#loginbtn").prop("disabled", true); //disabled を有効にする＝ボタンが押せない
  }
});

$(".suarea").on("input", function () {
  var input1 = $(suuser).val(); //#suuser に入力された文字を取得
  var input2 = $(supass).val(); //#supass に入力された文字を取得
  var input3 = $(supass2).val(); //#supass2 に入力された文字を取得

  if (input1 && input2 && input3 && input2 == input3) {
    //もし文字が入っていれば

    $("#signupbtn").prop("disabled", false); //disabled を無効にする＝ボタンが押せる
  } else {
    $("#signupbtn").prop("disabled", true); //disabled を有効にする＝ボタンが押せない
  }
});

/**
 * サインアップの処理
 */

$(function () {
  $("#signupbtn").click(function () {
    $.ajax({
      url: "../forum/signup.php",
      type: "POST",
      data: $("#signupform").serialize(),
      dataType: "json",
    })
      .done(function (data) {
        console.log(data);
        // $("#result").text(data);
      })
      .fail(function () {
        console.log(data);
        // $("#result").text(data);
      });
  });
});

/**
 * ログインの処理
 */

$(function () {
  $("#loginbtn").click(function () {
    // 通常のPOST処理を無効
    // event.preventDefault();

    $.ajax({
      url: "../forum/login.php",
      type: "POST",
      data: $("#loginform").serialize(),
      dataType: "json",
    });
  });
});

/**
 * 投稿内容の検索
 */

$(function () {
  $("#serchcontent").keyup(function () {
    let word = $(this).val();
    // console.log(word);
    $.ajax({
      url: "../forum/index.php",
      type: "POST",
      data: {
        seword: word,
      },
      dataType: "json",
    });
    $("#reloadcontent").load("../forum/index.php #reloadcontent");
  });
});

$(document).ready(function () {
  let word = document.getElementById("#serchcontent");
  $.ajax({
    url: "../forum/index.php",
    type: "POST",
    data: {
      seword: word,
    },
    dataType: "json",
  });
  $("#reloadcontent").load("../forum/index.php #reloadcontent");
});
