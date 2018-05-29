<?php

$msg = "";
if ($_GET) {
	echo "<p>Du har fylt inn noe</p>";
	foreach ($_GET as $key => $value) {
		$msg .= "\t"."$key: $value"."\r\n";
	}
	$msg = "Dette ble sendt inn:"."\r\n"."\r\n" . $msg;

} else {
	echo "<p>Du har ikke fylt ut noe</p>";

	$msg->sendEmailTo('firmapost@bmif.no'); 

mail("firmapost@bmif.no","Kvittering",$msg);
?>

<!DOCTYPE html>
<html>
<head>
	<title>Kvittering</title>
</head>
<body>
	<pre>
		<?php echo $msg; ?></pre>
</body>
</html>