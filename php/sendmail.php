<?php
mb_language("japanese");
mb_internal_encoding("UTF-8");

$to = "niba1122@keio.jp";
$subject = "テストメール from glanz@s602.xrea.com";

$TOKEN_LENGTH = 16;
$GET_TOKEN = "GET_TOKEN";


session_start();

header("Content-Type: application/json; charset=utf-8");

if ($_POST['token'] == $GET_TOKEN) {
	// セッションが存在する場合はsession idを更新
	if (isset($_SESSION['token'])) { 
		session_regenerate_id(true);
	}

	// トークンの生成
	$token = bin2hex(openssl_random_pseudo_bytes($TOKEN_LENGTH));
	$_SESSION['token'] = $token;

	echo '{ "token": "'. $token. '"}';

} else if (isset($_SESSION['token']) && ($_POST['token'] == $_SESSION['token'])) {

	if (filter_var($_POST['address'], FILTER_VALIDATE_EMAIL)) {
		$from = $_POST['address'];
	} else {
//		echo ;
		destroy();
		die('{ "success": false, "status": "不正なメールアドレスです。" }');
	}
	// 特殊文字をhtmlエンティティに変換
	$message = htmlspecialchars($_POST['message'], ENT_QUOTES, "UTF-8");

	// メールを送信
	$status = mb_send_mail($to, $subject, $message, "From:".$from);
	if ($status) {
		echo '{ "success": true, "status": "メールは正常に送信されました。" }';
	} else {
		echo '{ "success": false, "status": "メールの送信に失敗しました。" }';	
	}
//	destroy();
} else {
	echo '{ "success": false, "status": "不適切なアクセスです。" }';
	destroy();
}

function destroy() {	
	$_SESSION['token'] = array();
	session_destroy();
} 



?>
