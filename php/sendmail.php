<?php

$OWNER_ADDRESS = "glanz.strings@gmail.com";

$TOKEN_LENGTH = 16;
$GET_TOKEN = "GET_TOKEN";


$CONFIRM_MESSAGE_HEADER = <<< EOM
以下の内容でメールが送信されました。
--------------------------------------------------
 

EOM;

$CONFIRM_MESSAGE_FOOTER = <<< EOM


--------------------------------------------------
Glanz弦楽合奏団

tel: 080-3180-7125(岩本)
email: glanz.strings@gmail.com
EOM;


////////////////////////////////////////////////////////////////////

mb_language("japanese");
mb_internal_encoding("UTF-8");


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
	// セッションをdestroy
	destroy();

	if (filter_var($_POST['address'], FILTER_VALIDATE_EMAIL)) {
		$client_address = $_POST['address'];
	} else {
		die('{ "success": false, "status": "不正なメールアドレスです。" }');
	}

	if ( isset($_POST['message']) && ($_POST['message'] != "") ) {
		// 特殊文字をhtmlエンティティに変換
		$message = htmlspecialchars($_POST['message'], ENT_QUOTES, "UTF-8");
	} else {
		die('{ "success": false, "status": "本文が空です。" }');
	}

	if ( isset($_POST['subject']) && ($_POST['subject'] != "") ) {
		$subject = $_POST['subject'];
	} else {
		die('{ "success": false, "status": "題名が空です。" }');
	}

	// メールを送信
	$status = mb_send_mail($OWNER_ADDRESS, $subject, $message, "From:". $client_address);
	if (!$status) {
		die('{ "success": false, "status": "メールの送信に失敗しました。" }');	
	}

	// 確認メールを送信
	$status = mb_send_mail($client_address, "メール送信完了のお知らせ", $CONFIRM_MESSAGE_HEADER. $message. $CONFIRM_MESSAGE_FOOTER, "From:". $OWNER_ADDRESS);
	if ($status) {
		echo '{ "success": true, "status": "送信完了。確認メールを送信しました。" }';
	} else {
		echo '{ "success": false, "status": "確認メールの送信失敗。アドレスが間違っている可能性があります。" }';
		mb_send_mail($OWNER_ADDRESS, "確認メールの送信失敗 to $client_address", error_message($client_address), "From:". $client_address);
	}

} else {
	echo '{ "success": false, "status": "不適切なアクセスです。" }';
	destroy();
}

function destroy() {	
	$_SESSION['token'] = array();
	session_destroy();
} 

function error_message($client_address) {
	$error_message = "";
	$error_message .= <<< EOM
$client_address　への確認メールの送信に失敗しました。
メールアドレス $client_address は有効ではない可能性があります。
EOM;
	return $error_message;
}

?>
