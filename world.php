<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

$country = $_GET['country'] ?? '';

$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>

<table border="1">
	<tr>
		<th scope="col">Country Name</th>
		<th scope="col">Continent</th>
		<th scope="col">Independence Year</th>
		<th scope="col">Head of State</th>
	</tr>

	<?php foreach ($results as $row): ?>
	<tr>
		<td><?= $row['name']?></td>
		<td><?= $row['continent']?></td>
		<td><?= $row['independence_year']?></td>
		<td><?= $row['head_of_state']?></td>
	</tr>
	<?php endforeach; ?>
</table>
